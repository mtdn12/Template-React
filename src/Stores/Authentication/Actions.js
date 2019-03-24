import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // Fetch the current weather temperature
    fetchAuthentication: ['response'],
    // The operation has started and is loading
    fetchAuthenticationLoading: null,
    // The temperature was successfully fetched
    fetchAuthenticationSuccess: ['userData'],
    // An error occurred
    fetchAuthenticationFailure: ['errorMessage'],
    // log out
    doLogout: null,
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const AuthTypes = Types
export const AuthActions = Creators
