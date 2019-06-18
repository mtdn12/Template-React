import { fromJS } from 'immutable'

import { INITIAL_STATE, MODULE_NAME } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ModalTypes } from './Actions'
import reducerRegistry from '../Reducers/ReducerRegistry'

// Set modal
const setModal = (state, { modalType, modalProps }) =>
  state.set(
    'modal',
    fromJS({
      modalType,
      modalProps,
    })
  )
// Clear modal
const clearModal = state => state.set('modal', null)

const reducer = createReducer(INITIAL_STATE, {
  [ModalTypes.SET_MODAL]: setModal,
  [ModalTypes.CLEAR_MODAL]: clearModal,
})
reducerRegistry.register(MODULE_NAME, reducer)

export default reducer
