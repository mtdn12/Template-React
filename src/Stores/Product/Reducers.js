import { fromJS } from 'immutable'

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ProductTypes } from './Actions'

const showLoadingItem = state => state.set('isLoadingItem', true)
const hideLoadingItem = state => state.set('isLoadingItem', false)

const clearItems = state =>
  state
    .set('items', fromJS([]))
    .set('totalCount', 0)
    .set('totalPage', 0)

const setItems = (state, { items, totalCount, totalPages }) =>
  state
    .set('items', fromJS(items))
    .set('totalCount', totalCount)
    .set('totalPages', totalPages)
    .set('isLoadingItem', false)

const setFilter = (state, { name, value }) =>
  state.setIn(['filter', name], value)

// Set item detail to form item when get item detail success
const setItem = (state, { item }) => state.set('formItem', fromJS(item))

// Reset form item when component unmount
const resetItem = state =>
  state.set(
    'formItem',
    fromJS({
      id: 0,
      name: '',
      amount: '',
    })
  )
// Show and hide loading action when create or edit product
const showLoadingAction = state => state.set('isLoadingAction', true)
const hideLoadingAction = state => state.set('isLoadingAction', false)

const reducer = createReducer(INITIAL_STATE, {
  // List items action handler
  [ProductTypes.GET_ITEMS_REQUEST]: showLoadingItem,
  [ProductTypes.GET_ITEMS_SUCCESS]: setItems,
  [ProductTypes.GET_ITEMS_FAILURE]: hideLoadingItem,
  [ProductTypes.CLEAR_ITEMS]: clearItems,
  // Set filters handler
  [ProductTypes.SET_FILTER]: setFilter,
  // Get Item Detail
  [ProductTypes.GET_ITEM_SUCCESS]: setItem,
  [ProductTypes.CLEAR_ITEM]: resetItem,
  // show and hide loading when create or edit product
  [ProductTypes.CREATE_ITEM_REQUEST]: showLoadingAction,
  [ProductTypes.CREATE_ITEM_SUCCESS]: hideLoadingAction,
  [ProductTypes.CREATE_ITEM_FAILURE]: hideLoadingAction,
  [ProductTypes.EDIT_ITEM_REQUEST]: showLoadingAction,
  [ProductTypes.EDIT_ITEM_SUCCESS]: hideLoadingAction,
  [ProductTypes.EDIT_ITEM_FAILURE]: hideLoadingAction,
})

export default reducer
