import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // SetModal
  setModal: ['modalType', 'modalProps'],
  // Clear Modal
  clearModal: null,
  // Show loading action in modal
  showLoadingAction: null,
  // Hide loading action in modal
  hideLoadingAction: null,
})

export const ModalTypes = Types
export const ModalActions = Creators
