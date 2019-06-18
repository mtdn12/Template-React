import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuthActions } from '../Stores/Authentication/Actions'
import { LoadingSelectors } from '../Stores/Loading/Selectors'
import LoginModal from '../Components/organisms/LoginModal'

const LoginModalContainer = ({ handleLogin, ...props }) => {
  const handleAction = values => handleLogin(values)
  return <LoginModal handleAction={handleAction} {...props} />
}

const mapStateToProps = state => ({
  isLoadingAction: LoadingSelectors.getLoadingAction(state),
})

const mapDispatchToProps = dispatch => ({
  handleLogin: values => dispatch(AuthActions.loginRequest(values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

LoginModalContainer.propTypes = {
  handleLogin: PropTypes.func,
}

export default compose(withConnect)(LoginModalContainer)
