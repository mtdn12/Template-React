import { fromJS } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = fromJS({
  modal: null,
  isLoadingAction: false,
})
