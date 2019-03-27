import { createActions } from 'reduxsauce'
import { MODULE_NAME } from './InitialState'

const { Types, Creators } = createActions(
  {
    // SetModal
    setModal: ['modalType', 'modalProps'],
    // Clear Modal
    clearModal: null,
  },
  {
    prefix: `@@${MODULE_NAME}/`,
  }
)

export const ModalTypes = Types
export const ModalActions = Creators
