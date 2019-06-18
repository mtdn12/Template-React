import { MODULE_NAME } from './InitialState'

export const getLoadingAction = state =>
  state[MODULE_NAME].get('isLoadingAction')

export const getLoadingList = state => state[MODULE_NAME].get('isLoadingList')

export const getLoadingItems = state => state[MODULE_NAME].get('isLoadingItems')

export const LoadingSelectors = {
  getLoadingAction,
  getLoadingList,
  getLoadingItems,
}
