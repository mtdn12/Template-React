import { Map } from 'immutable'

/**
 * The initial values for the redux state.
 */
const INITIAL_STATE = Map({
  userData: null,
  authenticationErrorMessage: null,
  authenticationIsLoading: false,
})

export default INITIAL_STATE
