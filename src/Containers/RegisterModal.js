import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuthActions } from '../Stores/Authentication/Actions'
import { LoadingSelectors } from '../Stores/Loading/Selectors'
import RegisterModal from '../Components/organisms/RegisterModal'

const RegisterModalContainer = ({ handleRegister, ...props }) => {
  const handleAction = values => handleRegister(values)
  return <RegisterModal handleAction={handleAction} {...props} />
}

const mapStateToProps = state => ({
  isLoadingAction: LoadingSelectors.getLoadingAction(state),
})

const mapDispatchToProps = dispatch => ({
  handleRegister: values => dispatch(AuthActions.registerRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

RegisterModalContainer.propTypes = {
  handleRegister: PropTypes.func,
}

export default compose(withConnect)(RegisterModalContainer)
