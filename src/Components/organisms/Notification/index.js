import React, { Component } from 'react'
import { bool, string, func } from 'prop-types'
import { TransitionablePortal, Message } from 'semantic-ui-react'
import styles from './styles.module.scss'

class Notification extends Component {
  static propTypes = {
    onClose: func,
  }
  state = {
    animation: 'fade up',
    duration: 500,
  }
  componentDidMount() {
    /* setTimeout(() => {
      this.props.onClose()
    }, 1000) */
  }
  render() {
    const { open, onClose, color, message, title } = this.props
    const { animation, duration } = this.state
    return (
      <TransitionablePortal
        closeOnTriggerClick
        open={open}
        transition={{ animation, duration }}
        onClose={onClose}>
        <Message
          color={color}
          attached="top"
          className={styles.messageWrapper}
          onDismiss={onClose}
          header={title}
          content={message}
        />
      </TransitionablePortal>
    )
  }
}

Notification.propTypes = {
  open: bool,
  onClose: func,
  color: string,
  message: string,
  title: string,
}

export default Notification
