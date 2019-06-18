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

const RegisterModal = ({
  handleClose,
  isLoadingAction,
  item,
  handleAction,
}) => {
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
          Register
        </Typography>
      </DialogTitle>
      <Formik
        initialValues={item}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .required('Please input your email')
            .email('Invalid email'),
          name: Yup.string().required('Please input your name'),
          password: Yup.string()
            .required('Please input password')
            .min(6, 'Password must have atleast 6 character'),
          confirmPassword: Yup.string()
            .required('Please input confirm password')
            .oneOf([Yup.ref('password')], 'Password must match'),
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
                id="name"
                required
                className={classes.textField}
                fullWidth
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Name"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                placeholder="name"
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
              <TextField
                id="confirmPassword"
                required
                fullWidth
                value={values.confirmPassword}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                label="confirm Password"
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                placeholder="confirm Password"
                variant="outlined"
                // InputProps={{
                //   disableUnderline: true,
                // }}
              />
            </DialogContent>
            <DialogActions>
              <Button
                type="button"
                onClick={handleClose}
                variant="contained"
                fullWidth>
                Cancel
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isLoadingAction}
                // loading={isLoadingAction}
              >
                Register
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

RegisterModal.propTypes = {
  handleClose: func.isRequired,
  isLoadingAction: bool.isRequired,
  item: object.isRequired,
  handleAction: func.isRequired,
}

export default RegisterModal
