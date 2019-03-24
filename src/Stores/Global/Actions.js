import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    showHideConfirmDialog: ['show', 'id'],
    getConfigRequest: null,
    getConfigSuccess: ['result'],
    // An error occurred
    getConfigFailure: ['errorMessage'],
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const GlobalTypes = Types
export const GlobalActions = Creators
