import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { NotificationActions } from 'Stores/Notification/Actions'
import '../Stores/Notification/Reducers'
import Notification from 'Components/organisms/Notification'
import { NotificationSelectors } from '../Stores/Notification/Selectors'

const NotificationContainer = props => {
  return <Notification {...props} />
}

NotificationContainer.propsTypes = {}

const mapStateToProps = state => ({
  isOpen: NotificationSelectors.getIsOpen(state),
  message: NotificationSelectors.getMessage(state),
  duration: NotificationSelectors.getDuration(state),
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(NotificationActions.hideNotification()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(NotificationContainer)
