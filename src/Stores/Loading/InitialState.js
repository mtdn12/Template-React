import { fromJS } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const MODULE_NAME = 'loading'

export const INITIAL_STATE = fromJS({
  isLoadingAction: false,
  isLoadingList: false,
  isLoadingItems: {},
})
