/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import INITIAL_STATE from './InitialState'
import { createReducer } from 'reduxsauce'
import { NotificationTypes } from './Actions'
import reducerRegistry from '../Reducers/ReducerRegistry'

let reducerName = 'notification'

export const showNotification = (
  state = INITIAL_STATE,
  { title, message, color }
) =>
  state.merge({
    title: title,
    message: message,
    color: color,
    open: true,
  })

export const hideNotification = (state = INITIAL_STATE) =>
  state.merge({
    open: false,
  })

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */

const reducer = createReducer(INITIAL_STATE, {
  [NotificationTypes.SHOW_NOTIFICATION]: showNotification,
  [NotificationTypes.HIDE_NOTIFICATION]: hideNotification,
})

reducerRegistry.register(reducerName, reducer)
export default reducer
