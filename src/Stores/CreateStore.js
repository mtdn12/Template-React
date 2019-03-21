import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router/immutable'
import { persistReducer, persistStore } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'

import createRootReducer from './reducers'
import storage from 'redux-persist/lib/storage'
import authSaga from './Authentication/Sagas'
import globalSaga from './Global/Sagas'
import startupSaga from './Startup/Sagas'

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: storage,
  /**
   * Blacklist state that we do not need/want to persist
   */
  blacklist: ['router', 'notification'],
}

const createRootStore = history => {
  const middleware = []
  const enhancers = []
  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  middleware.push(routerMiddleware(history))
  enhancers.push(applyMiddleware(...middleware))
  let composeEnhancers = compose

  if (
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }
  const extrasReducers = {
    router: connectRouter(history),
  }
  const rootReducer = createRootReducer(extrasReducers)
  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, composeEnhancers(...enhancers))
  const persistor = persistStore(store)
  // Run sagas
  store.injectedSagas = []
  store.runSaga = sagaMiddleware.run
  store.injectedSagas.push('startup')
  store.runSaga(startupSaga)
  store.injectedSagas.push('global')
  store.runSaga(globalSaga)
  store.injectedSagas.push('auth')
  store.runSaga(authSaga)
  // Persitor
  store.persistor = persistor
  return store
}

export default createRootStore
