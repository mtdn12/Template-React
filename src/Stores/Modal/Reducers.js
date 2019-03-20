/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { fromJS } from 'immutable'

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ModalTypes } from './Actions'

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
const clearModal = (state, action) => state.set('modal', null)

// Show loading action
const showLoadingAction = (state, action) => state.set('isLoadingAction', true)
// Hide loading action
const hideLoadingAction = (state, action) => state.set('isLoadingAction', false)
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
const reducer = createReducer(INITIAL_STATE, {
  [ModalTypes.SET_MODAL]: setModal,
  [ModalTypes.CLEAR_MODAL]: clearModal,
  [ModalTypes.SHOW_LOADING_ACTION]: showLoadingAction,
  [ModalTypes.HIDE_LOADING_ACTION]: hideLoadingAction,
})

export default reducer
