import React, { PureComponent } from 'react'
import { node } from 'prop-types'
import { Typography } from '@material-ui/core'

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
          <Typography variant="h5" align="center">
            Something is wrong here! Please try refresh.
          </Typography>
        </AnnouncementTemplate>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
