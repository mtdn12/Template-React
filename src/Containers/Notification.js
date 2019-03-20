import React from 'react'
import { connect } from 'react-redux'
// import { PropTypes } from 'prop-types'
import { compose } from 'redux'
import { NotificationActions } from 'src/Stores/Notification/Actions'

import Notification from 'src/Components/organisms/Notification'

class NotificationContainer extends React.Component {
  componentDidMount() {}

  render() {
    return <Notification {...this.props} />
  }
}

NotificationContainer.propsTypes = {}

const mapStateToProps = state => ({
  open: state.notification.get('open'),
  title: state.notification.get('title'),
  message: state.notification.get('message'),
  color: state.notification.get('color'),
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(NotificationActions.hideNotification()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(NotificationContainer)
