import { fromJS } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const MODULE_NAME = 'product'

export const INITIAL_STATE = fromJS({
  items: [],
  itemDetail: {},
  formItem: {
    id: 0,
    name: '',
    amount: '',
  },
  filter: {
    limit: 5,
    page: 0,
    keyword: '',
  },
  totalCount: 0,
  totalPages: 0,
})
