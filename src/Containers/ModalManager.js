import React from 'react'
import { connect } from 'react-redux'
import { func, bool, object } from 'prop-types'
import '../Stores/Modal/Reducers'
import { ModalActions } from 'Stores/Modal/Actions'
import { getModal } from 'Stores/Modal/Selectors'
import { getLoadingAction } from '../Stores/Loading/Selectors'
import ConfirmationDialog from './ConfirmationDialog'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

const modalLookup = { ConfirmationDialog, LoginModal, RegisterModal }

const Modal = props => {
  const { modal, isLoadingAction, handleClose } = props
  if (modal) {
    const { modalType, modalProps } = modal.toJS()
    const ModalShow = modalLookup[modalType]
    return (
      <ModalShow
        isLoadingAction={isLoadingAction}
        handleClose={handleClose}
        {...modalProps}
      />
    )
  }
  return <span />
}

const mapStateToProps = state => ({
  modal: getModal(state),
  isLoadingAction: getLoadingAction(state),
})

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(ModalActions.clearModal()),
})

Modal.propTypes = {
  modal: object,
  isLoadingAction: bool,
  handleClose: func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
