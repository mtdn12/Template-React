import React from 'react'
import { Formik } from 'formik'
import { func, bool, object } from 'prop-types'
import * as Yup from 'yup'
import {
  Slide,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core'
import useStyles from './styles'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const LoginModal = ({ handleClose, isLoadingAction, item, handleAction }) => {
  const classes = useStyles()
  return (
    <Dialog
      open
      TransitionComponent={Transition}
      onClose={handleClose}
      fullWidth
      maxWidth="sm">
      <DialogTitle disableTypography>
        <Typography gutterBottom variant="h5" align="center" color="primary">
          {' '}
          Log In
        </Typography>
      </DialogTitle>
      <Formik
        initialValues={item}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .required('Please input your email')
            .email('Invalid email'),
          password: Yup.string()
            .required('Please input password')
            .min(6, 'Password must have atleast 6 character'),
        })}
        onSubmit={values => handleAction(values)}
        render={({
          values,
          errors,
          handleBlur,
          handleChange,
          touched,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                id="email"
                required
                className={classes.textField}
                fullWidth
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                placeholder="email"
                variant="outlined"
                // InputProps={{
                //   disableUnderline: true,
                // }}
              />
              <TextField
                id="password"
                required
                fullWidth
                value={values.password}
                className={classes.textField}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                label="Password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                placeholder="Password"
                variant="outlined"
                // InputProps={{
                //   disableUnderline: true,
                // }}
              />
            </DialogContent>
            <DialogActions>
              <Button
                fullWidth
                variant="contained"
                type="button"
                // primary
                onClick={handleClose}>
                Cancel
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                // primary
                disabled={isLoadingAction}
                // loading={isLoadingAction}
              >
                Log In
              </Button>
              {isLoadingAction && (
                <CircularProgress size={32} className={classes.loadingItem} />
              )}
            </DialogActions>
          </form>
        )}
      />
    </Dialog>
  )
}

LoginModal.propTypes = {
  handleClose: func.isRequired,
  isLoadingAction: bool.isRequired,
  item: object.isRequired,
  handleAction: func.isRequired,
}

export default LoginModal
