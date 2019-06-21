import React from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ModalExample from 'Components/pages/ModalExample'
import { ModalActions } from '../Stores/Modal/Actions'

const ModalExampleContainer = ({ handleOpenModal, ...props }) => {
  const handleOpenLoginModal = () => {
    handleOpenModal('LoginModal', {
      item: {
        email: '',
        password: '',
      },
    })
  }
  const handleOpenRegisterModal = () => {
    handleOpenModal('RegisterModal', {
      item: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    })
  }
  return (
    <ModalExample
      handleOpenLoginModal={handleOpenLoginModal}
      handleOpenRegisterModal={handleOpenRegisterModal}
      {...props}
    />
  )
}
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  handleOpenModal: (type, props) =>
    dispatch(ModalActions.setModal(type, props)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

ModalExampleContainer.propTypes = {
  handleOpenModal: func.isRequired,
}

export default compose(withConnect)(ModalExampleContainer)
