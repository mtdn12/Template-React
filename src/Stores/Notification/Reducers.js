/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE, MODULE_NAME } from './InitialState'
import { createReducer } from 'reduxsauce'
import { NotificationTypes } from './Actions'
import reducerRegistry from '../Reducers/ReducerRegistry'

export const showNotification = (state = INITIAL_STATE, { message }) =>
  state.merge({
    message: message,
    isOpen: true,
  })

export const hideNotification = (state = INITIAL_STATE) =>
  state.merge({
    isOpen: false,
    message: '',
  })

const reducer = createReducer(INITIAL_STATE, {
  [NotificationTypes.SHOW_NOTIFICATION]: showNotification,
  [NotificationTypes.HIDE_NOTIFICATION]: hideNotification,
})

reducerRegistry.register(MODULE_NAME, reducer)
export default reducer
