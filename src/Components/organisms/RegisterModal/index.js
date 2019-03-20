import React from 'react'
import { Modal, Form, Button, Header } from 'semantic-ui-react'
import { Formik } from 'formik'
import { func, bool, object } from 'prop-types'
import * as Yup from 'yup'
import styles from './styles.module.scss'
import InputField from '../../atoms/InputField'

const RegisterModal = ({ handleClose, isLoadingAction, item }) => {
  return (
    <Modal onClose={handleClose} size="tiny" open id={styles.registerModal}>
      <Modal.Header>
        <Header as="h2" color="blue" inverted textAlign="center">
          Register
        </Header>
      </Modal.Header>
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
        onSubmit={values => console.log(values)}
        render={({
          values,
          errors,
          handleBlur,
          handleChange,
          touched,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Content className={styles.formContent}>
              <InputField
                name="email"
                value={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                inputProps={{
                  fluid: true,
                }}
                label="Email"
                error={touched.email && Boolean(errors.email)}
                message={errors.email}
              />
              <InputField
                name="name"
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                inputProps={{
                  fluid: true,
                }}
                label="Name"
                error={touched.name && Boolean(errors.name)}
                message={errors.name}
              />
              <InputField
                name="password"
                value={values.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                inputProps={{
                  fluid: true,
                  type: 'password',
                }}
                label="Password"
                error={touched.password && Boolean(errors.password)}
                message={errors.password}
              />
              <InputField
                name="confirmPassword"
                value={values.confirmPassword}
                handleChange={handleChange}
                handleBlur={handleBlur}
                inputProps={{
                  fluid: true,
                  type: 'password',
                }}
                label="Confirm Password"
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                message={errors.confirmPassword}
              />
            </Modal.Content>
            <Modal.Actions className={styles.formAction}>
              <Button type="button" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                primary
                disabled={isLoadingAction}
                loading={isLoadingAction}>
                Register
              </Button>
            </Modal.Actions>
          </Form>
        )}
      />
    </Modal>
  )
}

RegisterModal.propTypes = {
  handleClose: func.isRequired,
  isLoadingAction: bool.isRequired,
  item: object.isRequired,
}

export default RegisterModal
