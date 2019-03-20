import { fromJS } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = fromJS({
  items: [],
  itemDetail: {},
  formItem: {
    id: 0,
    name: '',
    amount: '',
  },
  isLoadingItem: false,
  isLoadingAction: false,
  filter: {
    limit: 5,
    page: 1,
    keyword: '',
  },
  totalCount: 0,
  totalPages: 0,
})
