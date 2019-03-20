/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { GlobalTypes } from './Actions'

export const showHideConfirmDialog = (state = INITIAL_STATE, { show, id }) =>
  state.merge({
    showHideConfirmDialog: show,
    showHideConfirmDialogId: id,
  })

export const fetchConfigRequest = state =>
  state.merge({
    isLoadingConfig: true,
  })

export const fetchConfigsuccess = (state = INITIAL_STATE, { result }) =>
  state.merge({
    socialSources: result.socialSources,
    topics: result.topics,
    categories: result.categories,
    subCategories: result.subCategories,
    isLoadingConfig: false,
  })

export const fetchConfigFailure = (state = INITIAL_STATE) =>
  state.merge({
    isLoadingConfig: false,
  })

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export default createReducer(INITIAL_STATE, {
  [GlobalTypes.SHOW_HIDE_CONFIRM_DIALOG]: showHideConfirmDialog,
  [GlobalTypes.GET_CONFIG_REQUEST]: fetchConfigRequest,
  [GlobalTypes.GET_CONFIG_SUCCESS]: fetchConfigsuccess,
  [GlobalTypes.GET_CONFIG_FAILURE]: fetchConfigFailure,
})
