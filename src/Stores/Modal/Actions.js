import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // SetModal
    setModal: ['modalType', 'modalProps'],
    // Clear Modal
    clearModal: null,
    // Show loading action in modal
    showLoadingAction: null,
    // Hide loading action in modal
    hideLoadingAction: null,
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const ModalTypes = Types
export const ModalActions = Creators
