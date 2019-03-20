import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import styles from './styles.module.scss'

const InputField = React.memo(
  ({
    name,
    value,
    handleChange,
    handleBlur,
    error,
    label,
    message,
    inputProps,
  }) => {
    return (
      <Form.Field>
        <Form.Input
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          label={label}
          error={error}
          {...inputProps}
        />
        {error && (
          <Label basic color="red" pointing className={styles.helperText}>
            {message}
          </Label>
        )}
      </Form.Field>
    )
  }
)

export default InputField
