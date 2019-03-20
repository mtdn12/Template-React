import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import AuthTemplate from './AuthTemplate'

const PrivateRoute = ({ component: Component, userData, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location, ...props }) => {
        // Nếu có Login
        if (userData) {
          return (
            <AuthTemplate>
              <Component location={location} {...props} />
            </AuthTemplate>
          )
        }

        // Nếu chưa login thì đưa về trang Login
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  userData: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    userData: state.auth.get('userData'),
  }
}

export default connect(mapStateToProps)(PrivateRoute)
