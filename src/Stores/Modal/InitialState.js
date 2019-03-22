import { fromJS } from 'immutable'

/**
 * The initial values for the redux state.
 */
const INITIAL_STATE = fromJS({
  modal: null,
  isLoadingAction: false,
})

export default INITIAL_STATE
