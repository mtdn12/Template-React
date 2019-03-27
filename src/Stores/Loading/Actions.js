import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // show and hide Loading action
    showLoadingAction: null,
    hideLoadingAction: null,
    // Show and hide loading list
    showLoadingList: null,
    hideLoadingList: null,
    // Show and hide loading item
    showLoadingItem: ['name'],
    hideLoadingItem: ['name'],
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const LoadingTypes = Types
export const LoadingActions = Creators
