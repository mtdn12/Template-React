import React from 'react'
import PropTypes from 'prop-types'

import { Modal, Button } from 'semantic-ui-react'

class ConfirmationDialog extends React.PureComponent {
  render() {
    const {
      title,
      content,
      handleClose,
      onConfirm,
      isLoadingAction,
    } = this.props
    return (
      <Modal size="tiny" open onClose={handleClose}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          <p>{content}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            primary
            content="Ok"
            loading={isLoadingAction}
            disabled={isLoadingAction}
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

ConfirmationDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isLoadingAction: PropTypes.bool,
}

export default ConfirmationDialog
