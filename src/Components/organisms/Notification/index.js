import React from 'react'
import { bool, string, func, number } from 'prop-types'
import { Snackbar, IconButton } from '@material-ui/core'
import Close from '@material-ui/icons/Close'

const Notification = ({ isOpen, message, duration, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isOpen}
      autoHideDuration={duration}
      onClose={onClose}
      message={message}
      action={
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClose}>
          <Close />
        </IconButton>
      }
    />
  )
}

Notification.propTypes = {
  isOpen: bool,
  message: string.isRequired,
  duration: number.isRequired,
  onClose: func.isRequired,
}

export default Notification
