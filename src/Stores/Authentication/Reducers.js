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

// Log out
export const doLogout = (state = INITIAL_STATE) => INITIAL_STATE

const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.FETCH_AUTHENTICATION_LOADING]: fetchAuthenticationLoading,
  [AuthTypes.FETCH_AUTHENTICATION_SUCCESS]: fetchAuthenticationSuccess,
  [AuthTypes.FETCH_AUTHENTICATION_FAILURE]: fetchAuthenticationFailure,
  // do log out
  [AuthTypes.DO_LOGOUT]: doLogout,
})

export default reducer
