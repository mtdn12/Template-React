import React from 'react'
import { connect } from 'react-redux'
import '../Stores/Modal/Reducers'
import { ModalActions } from 'src/Stores/Modal/Actions'
import { getModal } from 'src/Stores/Modal/Selectors'
import { getLoadingAction } from '../Stores/Loading/Selectors'
import ConfirmationDialog from '../Components/molecules/ConfirmationDialog'
import LoginModal from '../Components/organisms/LoginModal'
import RegisterModal from '../Components/organisms/RegisterModal'

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
