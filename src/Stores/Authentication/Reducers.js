/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

export const fetchAuthenticationLoading = (state = INITIAL_STATE) =>
  state.merge({
    authenticationIsLoading: true,
    authenticationErrorMessage: '',
  })

export const fetchAuthenticationSuccess = (
  state = INITIAL_STATE,
  { userData }
) =>
  state.merge({
    userData: userData,
    authenticationIsLoading: false,
    authenticationErrorMessage: null,
  })

export const fetchAuthenticationFailure = (
  state = INITIAL_STATE,
  { errorMessage }
) =>
  state.merge({
    auserData: null,
    authenticationIsLoading: false,
    authenticationErrorMessage: errorMessage,
  })

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export default createReducer(INITIAL_STATE, {
  [AuthTypes.FETCH_AUTHENTICATION_LOADING]: fetchAuthenticationLoading,
  [AuthTypes.FETCH_AUTHENTICATION_SUCCESS]: fetchAuthenticationSuccess,
  [AuthTypes.FETCH_AUTHENTICATION_FAILURE]: fetchAuthenticationFailure,
})
