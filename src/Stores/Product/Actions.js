import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // Get List Product actions
    getItemsRequest: null,
    getItemsSuccess: ['items'],
    getItemsFailure: null,
    clearItems: null,
    // Get Product Detail actions
    getItemRequest: ['id'],
    getItemSuccess: ['item'],
    getItemFailure: null,
    clearItem: null,
    // Edit Product actions
    editItemRequest: ['id', 'values'],
    editItemSuccess: null,
    editItemFailure: null,
    // Create Product actions
    createItemRequest: ['values'],
    createItemSuccess: null,
    createItemFailure: null,
    // Delete Product actions
    deleteItemRequest: ['id'],
    deleteItemSuccess: null,
    deleteItemFailure: null,
    // Check item done
    checkItemRequest: ['id'],
    checkItemSuccess: ['item'],
    checkItemFailure: null,
    // Change Filter
    setFilter: ['name', 'value'],
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const ProductTypes = Types
export const ProductActions = Creators
