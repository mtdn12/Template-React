import { fromJS } from 'immutable'

import { INITIAL_STATE, MODULE_NAME } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ProductTypes } from './Actions'
import reducerRegistry from '../Reducers/ReducerRegistry'

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
// Check Item reducer
const setItemCheck = (state, { item }) => {
  const listProduct = state.get('items')
  let newList = listProduct.map(pro => {
    if (pro.get('id') === item.id) {
      return fromJS(item)
    }
    return pro
  })
  return state.set('items', newList)
}

const reducer = createReducer(INITIAL_STATE, {
  // List items action handler
  [ProductTypes.GET_ITEMS_SUCCESS]: setItems,
  [ProductTypes.CLEAR_ITEMS]: clearItems,
  // Set filters handler
  [ProductTypes.SET_FILTER]: setFilter,
  // Get Item Detail
  [ProductTypes.GET_ITEM_SUCCESS]: setItem,
  [ProductTypes.CLEAR_ITEM]: resetItem,
  // Check item
  [ProductTypes.CHECK_ITEM_SUCCESS]: setItemCheck,
})

reducerRegistry.register(MODULE_NAME, reducer)

export default reducer
