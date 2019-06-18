import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import styles from './styles.js'
import { object, func } from 'prop-types'

const ModalExample = ({
  classes,
  handleOpenLoginModal,
  handleOpenRegisterModal,
}) => {
  return (
    <div>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Modal Example
      </Typography>
      <div className={classes.btnWrap}>
        <Button
          style={{ marginRight: 10 }}
          onClick={handleOpenLoginModal}
          variant="contained"
          color="primary">
          Open Login Modal Example
        </Button>
        <Button
          onClick={handleOpenRegisterModal}
          variant="contained"
          color="primary">
          Open Register Modal Example
        </Button>
      </div>
    </div>
  )
}

ModalExample.propTypes = {
  handleOpenRegisterModal: func,
  handleOpenLoginModal: func,
  classes: object.isRequired,
}

export default withStyles(styles)(ModalExample)
