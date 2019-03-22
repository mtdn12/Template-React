import { combineReducers } from 'redux' //
import authInitialState from '../Authentication/InitialState'
import notificationInitial from '../Notification/InitialState'
import globalInitial from '../Global/InitialState'
import modalInitial from '../Modal/InitialState'
import productInitial from '../Product/InitialState'

export const initialState = {
  auth: authInitialState,
  notification: notificationInitial,
  product: productInitial,
  gobal: globalInitial,
  modal: modalInitial,
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
