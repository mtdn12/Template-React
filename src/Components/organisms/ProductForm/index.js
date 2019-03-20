import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { object, func, bool, string } from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import InputField from '../../atoms/InputField'

const ProductForm = ({ item, handleAction, isLoadingAction, btnContent }) => {
  return (
    <div>
      <Formik
        initialValues={item.toJS()}
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
          <Form onSubmit={handleSubmit}>
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
              name="amount"
              value={values.amount}
              handleChange={handleChange}
              handleBlur={handleBlur}
              inputProps={{
                fluid: true,
                type: 'number',
              }}
              label="Amount"
              error={touched.amount && Boolean(errors.amount)}
              message={errors.amount}
            />
            <Button
              type="submit"
              primary
              fluid
              loading={isLoadingAction}
              disabled={isLoadingAction}>
              {btnContent}
            </Button>
          </Form>
        )}
      />
    </div>
  )
}

ProductForm.propTypes = {
  item: object.isRequired,
  handleAction: func.isRequired,
  isLoadingAction: bool.isRequired,
  btnContent: string.required,
}

export default ProductForm
