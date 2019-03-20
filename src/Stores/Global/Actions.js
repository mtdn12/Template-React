import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  showHideConfirmDialog: ['show', 'id'],
  getConfigRequest: null,
  getConfigSuccess: ['result'],
  // An error occurred
  getConfigFailure: ['errorMessage'],
})

export const GlobalTypes = Types
export const GlobalActions = Creators
