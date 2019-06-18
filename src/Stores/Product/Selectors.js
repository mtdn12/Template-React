import { MODULE_NAME } from './InitialState'

const getFilter = state => state[MODULE_NAME].get('filter')

const getItems = state => state[MODULE_NAME].get('items')

const getTotalCount = state => state[MODULE_NAME].get('totalCount')

const getTotalPages = state => state[MODULE_NAME].get('totalPages')

const getFormItem = state => state[MODULE_NAME].get('formItem')

export const ProductSelectors = {
  getFilter,
  getItems,
  getTotalCount,
  getTotalPages,
  getFormItem,
}
