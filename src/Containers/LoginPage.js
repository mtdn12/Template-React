import React from 'react'
import { object } from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AuthActions } from 'Stores/Authentication/Actions'
import '../Stores/Authentication/Reducers'
import Login from 'Components/pages/Login'

const LoginPageContainer = ({ userData, location, ...props }) => {
  const { from } = location.state || { from: { pathname: '/' } }
  return userData ? (
    <Redirect to={from} />
  ) : (
    <Login location={location} {...props} />
  )
}

LoginPageContainer.propTypes = {
  userData: object,
  location: object.isRequired,
}

const mapDispatchToProps = dispatch => ({
  responseFromGoogle: response => {
    dispatch(AuthActions.fetchAuthentication(response))
  },
})

const mapStateToProps = state => {
  return {
    userData: state.auth.get('userData'),
    authenticationErrorMessage: state.auth.get('authenticationErrorMessage'),
    authenticationIsLoading: state.auth.get('authenticationIsLoading'),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPageContainer)
