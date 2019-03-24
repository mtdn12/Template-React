import { Map } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const MODULE_NAME = 'auth'

export const INITIAL_STATE = Map({
  userData: null,
  authenticationErrorMessage: null,
  authenticationIsLoading: false,
})
