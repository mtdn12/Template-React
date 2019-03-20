import { combineReducers } from 'redux' //
import authenticationReducer from './Authentication/Reducers'
import globalReducer from './Global/Reducers'
import notificationReducer from './Notification/Reducers'
import modalReducer from './Modal/Reducers'
import productReducer from './Product/Reducers'

const createRootReducer = extras => {
  return combineReducers({
    auth: authenticationReducer,
    global: globalReducer,
    notification: notificationReducer,
    modal: modalReducer,
    product: productReducer,
    ...extras,
  })
}

export default createRootReducer
