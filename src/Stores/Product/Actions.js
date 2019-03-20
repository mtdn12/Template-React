import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    // Get List Product actions
    getItemsRequest: ['filter'],
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
    // Change Filter
    setFilter: ['name', 'value'],
  },
  {
    prefix: 'product/',
  }
)

export const ProductTypes = Types
export const ProductActions = Creators
