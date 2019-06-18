import { MODULE_NAME } from './InitialState'

const getIsOpen = state => state[MODULE_NAME].get('isOpen')
const getMessage = state => state[MODULE_NAME].get('message')
const getDuration = state => state[MODULE_NAME].get('duration')

export const NotificationSelectors = {
  getIsOpen,
  getMessage,
  getDuration,
}
