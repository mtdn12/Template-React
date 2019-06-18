import { combineReducers } from 'redux'
import * as auth from '../Authentication/InitialState'
import * as global from '../Global/InitialState'
import * as modal from '../Modal/InitialState'

// Persist reducer need to declare here
export const initialState = {
  [auth.MODULE_NAME]: auth.INITIAL_STATE,
  [global.MODULE_NAME]: global.INITIAL_STATE,
  [modal.MODULE_NAME]: modal.INITIAL_STATE,
}
export const combine = reducers => {
  const reducerNames = Object.keys(reducers)
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state
    }
  })
  return combineReducers(reducers)
}
