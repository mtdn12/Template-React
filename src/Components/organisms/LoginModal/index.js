import React from 'react'
import { Modal, Form, Button, Header, Divider } from 'semantic-ui-react'
import { Formik } from 'formik'
import { func, bool, object } from 'prop-types'
import * as Yup from 'yup'
import styles from './styles.module.scss'
import InputField from '../../atoms/InputField'
import SocialLogin from '../../molecules/SocialLogin'

const LoginModal = ({ handleClose, isLoadingAction, item }) => {
  return (
    <Modal onClose={handleClose} size="tiny" open id={styles.registerModal}>
      <Modal.Header>
        <Header as="h2" color="blue" inverted textAlign="center">
          Log In
        </Header>
      </Modal.Header>
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
            </Modal.Content>
            <Button
              fluid
              type="submit"
              primary
              disabled={isLoadingAction}
              loading={isLoadingAction}>
              Log In
            </Button>
            <Divider horizontal>OR</Divider>
            <SocialLogin />
          </Form>
        )}
      />
    </Modal>
  )
}

LoginModal.propTypes = {
  handleClose: func.isRequired,
  isLoadingAction: bool.isRequired,
  item: object.isRequired,
}

export default LoginModal
