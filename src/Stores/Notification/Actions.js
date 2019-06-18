import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // Show notification with message
    showNotification: ['message'],
    // Hide Notification
    hideNotification: null,
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const NotificationTypes = Types
export const NotificationActions = Creators
