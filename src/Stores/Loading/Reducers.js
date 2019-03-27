/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { LoadingTypes } from './Actions'

// Show and hide loading action
const showLoadingAction = state => state.set('isLoadingAction', true)
const hideLoadingAction = state => state.set('isLoadingAction', false)
// Show and hide loading list
const showLoadingList = state => state.set('isLoadingList', true)
const hideLoadingList = state => state.set('isLoadingList', false)
// show and hide loading item
const showLoadingItem = (state, { name }) =>
  state.setIn(['isLoadingItems', name], true)
const hideLoadingItem = (state, { name }) =>
  state.setIn(['isLoadingItems', name], false)

const reducer = createReducer(INITIAL_STATE, {
  [LoadingTypes.SHOW_LOADING_ACTION]: showLoadingAction,
  [LoadingTypes.HIDE_LOADING_ACTION]: hideLoadingAction,
  // loading list item
  [LoadingTypes.SHOW_LOADING_LIST]: showLoadingList,
  [LoadingTypes.HIDE_LOADING_LIST]: hideLoadingList,
  // loading item
  [LoadingTypes.SHOW_LOADING_ITEM]: showLoadingItem,
  [LoadingTypes.HIDE_LOADING_ITEM]: hideLoadingItem,
})

export default reducer
