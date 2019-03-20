import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ModalExample from 'src/Components/pages/ModalExample'
import { ModalActions } from '../Stores/Modal/Actions'

class ModalExampleContainer extends Component {
  handleOpenLoginModal = () => {
    this.props.handleOpenModal('LoginModal', {
      item: {
        email: '',
        password: '',
      },
    })
  }
  handleOpenRegisterModal = () => {
    this.props.handleOpenModal('RegisterModal', {
      item: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    })
  }

  render() {
    return (
      <ModalExample
        handleOpenLoginModal={this.handleOpenLoginModal}
        handleOpenRegisterModal={this.handleOpenRegisterModal}
        {...this.props}
      />
    )
  }
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

export default compose(withConnect)(ModalExampleContainer)
