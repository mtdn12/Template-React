import { MODULE_NAME } from './InitialState'

export const getFilter = state => state[MODULE_NAME].get('filter')

export const getItems = state => state[MODULE_NAME].get('items')

export const getTotalCount = state => state[MODULE_NAME].get('totalCount')

export const getTotalPages = state => state[MODULE_NAME].get('totalPages')

export const getFormItem = state => state[MODULE_NAME].get('formItem')
