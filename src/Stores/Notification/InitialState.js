import { Map } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const MODULE_NAME = 'notification'

export const INITIAL_STATE = Map({
  isOpen: false,
  message: '',
  duration: 3000,
})
