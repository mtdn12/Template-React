import { Map } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const MODULE_NAME = 'global'

export const INITIAL_STATE = Map({
  showHideConfirmDialog: false,
  showHideConfirmDialogId: 0,
  isLoadingConfig: false,
  socialSources: [], // sample data
  topics: [], // sample data
  categories: [], // sample data
  subCategories: [], // sample data
})

export default INITIAL_STATE
