import React from 'react'
import { func, bool } from 'prop-types'
import GoogleLogin from 'react-google-login'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

const Login = ({ responseFromGoogle, authenticationIsLoading }) => {
  const classes = useStyles()
  return (
    <div className={classes.wapperLogin}>
      <Typography variant="h4" align="center" className={classes.title}>
        Template React V-5
      </Typography>
      <Typography variant="h6" align="center" className={classes.subTitle}>
        A Product of Square Communication
      </Typography>
      <GoogleLogin
        className={classes.overPrimary}
        disabled={authenticationIsLoading}
        clientId={
          '1071869311754-qpnjkeobg7h75i09nj4q7m9ohdkia29l.apps.googleusercontent.com'
        }
        onSuccess={responseFromGoogle}
        onFailure={responseFromGoogle}>
        <span> Login with Google</span>
      </GoogleLogin>
      <Typography className={classes.info}>
        Need support ? Contact us:{' '}
        <a href="mailto:technical@dsquare.com.vn">technical@dsquare.com.vn</a>
      </Typography>
    </div>
  )
}
Login.propTypes = {
  responseFromGoogle: func.isRequired,
  authenticationIsLoading: bool.isRequired,
}

export default Login
