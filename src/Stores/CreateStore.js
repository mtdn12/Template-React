import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router/immutable'
import { persistReducer, persistStore } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import { combine, initialState } from './Reducers/index'
import storage from 'redux-persist/lib/storage'
// Import Saga and register saga to register static sagas
import sagaRegistry from './Sagas/SagaRegistry'
import authSaga from './Authentication/Sagas'
import globalSaga from './Global/Sagas'
import startupSaga from './Startup/Sagas'
// Import reducer to register static reducer
import reducerRegistry from './Reducers/ReducerRegistry'
import authReducer from './Authentication/Reducers'
import globalReducer from './Global/Reducers'
import loadingReducer from './Loading/Reducers'
// Import module name
import { MODULE_NAME as authName } from './Authentication/InitialState'
import { MODULE_NAME as startupName } from './Startup/InitialState'
import { MODULE_NAME as globalName } from './Global/InitialState'
import { MODULE_NAME as loadingName } from './Loading/InitialState'

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  keyPrefix: 'Template-react', // Key prefix when save to local storage, need declare to avoid conflict between projects
  storage: storage,
  /**
   * White list State . These reducer will be persisted by redux-persist
   */
  whitelist: ['auth', 'global', 'modal'],
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
  const rootReducer = combine(reducerRegistry.getReducers())
  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers)
  )
  const persistor = persistStore(store)
  // Persitor
  store.persistor = persistor
  // Run sagas
  // Register saga change listener
  sagaRegistry.setChangeListener(saga => {
    sagaMiddleware.run(saga)
  })
  sagaRegistry.register(startupName, startupSaga)
  sagaRegistry.register(globalName, globalSaga)
  sagaRegistry.register(authName, authSaga)
  // Register reducer change listener
  reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(persistReducer(persistConfig, combine(reducers)))
  })
  // Register reducer for global reducer ('router', 'authentication', 'global', 'loading')
  reducerRegistry.register('router', connectRouter(history))
  reducerRegistry.register(authName, authReducer)
  reducerRegistry.register(globalName, globalReducer)
  reducerRegistry.register(loadingName, loadingReducer)
  return store
}

export default createRootStore
