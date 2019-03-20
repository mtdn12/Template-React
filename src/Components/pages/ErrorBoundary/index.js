import React, { PureComponent } from 'react'
import { node } from 'prop-types'

import AnnouncementTemplate from '../../templates/AnnouncementTemplate'

class ErrorBoundary extends PureComponent {
  static propTypes = {
    children: node,
  }

  state = {
    hasError: false,
  }

  // eslint-disable-next-line
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <AnnouncementTemplate>
          Something is wrong here! Please try refresh.
        </AnnouncementTemplate>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
