import { MODULE_NAME } from './InitialState'

export const getModal = state => state[MODULE_NAME].get('modal')

export const getLoadingAction = state =>
  state[MODULE_NAME].get('isLoadingAction')
