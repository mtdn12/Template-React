import React from 'react'
import PropTypes from 'prop-types'
import {
  Slide,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core'
import useStyles from './styles'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ConfirmationDialog = ({
  title,
  content,
  handleClose,
  onConfirm,
  isLoadingAction,
}) => {
  const classes = useStyles()
  return (
    <Dialog
      maxWidth={'xs'}
      fullWidth
      open
      onClose={handleClose}
      TransitionComponent={Transition}>
      <DialogTitle disableTypography>
        <Typography gutterBottom variant="h5" align="center" color="primary">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <p>{content}</p>
      </DialogContent>
      <DialogActions className={classes.actionWrap}>
        <Button
          color="default"
          variant="contained"
          onClick={handleClose}
          fullWidth>
          Cancel
        </Button>
        <Button
          fullWidth
          onClick={onConfirm}
          disabled={isLoadingAction}
          color="primary"
          variant="contained">
          Ok{' '}
        </Button>
        {isLoadingAction && (
          <CircularProgress size={32} className={classes.loadingItem} />
        )}
      </DialogActions>
    </Dialog>
  )
}

ConfirmationDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isLoadingAction: PropTypes.bool,
}

export default ConfirmationDialog
