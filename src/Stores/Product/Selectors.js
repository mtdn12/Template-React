export const getFilter = state => state.product.get('filter')

export const getItems = state => state.product.get('items')

export const getTotalCount = state => state.product.get('totalCount')

export const getTotalPages = state => state.product.get('totalPages')

export const getLoadingItem = state => state.product.get('isLoadingItem')

export const getFormItem = state => state.product.get('formItem')

export const getLoadingAction = state => state.product.get('isLoadingAction')
