import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Button, CircularProgress } from '@material-ui/core'
import { object, func, bool, string } from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styles from './styles'

const ProductForm = ({
  classes,
  item,
  handleAction,
  isLoadingAction,
  btnContent,
}) => {
  const formItem = item.toJS()
  return (
    <div>
      <Formik
        initialValues={formItem}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Please input your product name'),
          amount: Yup.number().required('Please input amount of product'),
        })}
        onSubmit={values => handleAction(values)}
        enableReinitialize
        render={({
          values,
          errors,
          handleBlur,
          handleChange,
          touched,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
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
              helperText={errors.name}
              placeholder="name"
              variant="outlined"
              // InputProps={{
              //   disableUnderline: true,
              // }}
            />
            <TextField
              id="amount"
              required
              className={classes.textField}
              fullWidth
              value={values.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Amount"
              error={touched.amount && Boolean(errors.amount)}
              helperText={errors.amount}
              placeholder="amount"
              variant="outlined"
              // InputProps={{
              //   disableUnderline: true,
              // }}
            />
            <div className={classes.loadingWrap}>
              <Button
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                disabled={isLoadingAction}>
                {btnContent}
              </Button>
              {isLoadingAction && (
                <CircularProgress size={32} className={classes.loadingItem} />
              )}
            </div>
          </form>
        )}
      />
    </div>
  )
}

ProductForm.propTypes = {
  classes: object.isRequired,
  item: object.isRequired,
  handleAction: func.isRequired,
  isLoadingAction: bool.isRequired,
  btnContent: string,
}

export default withStyles(styles)(ProductForm)
