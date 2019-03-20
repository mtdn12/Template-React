import React from 'react'
import { bool } from 'prop-types'
import { Loader } from 'semantic-ui-react'

import AnnouncementTemplate from '../../templates/AnnouncementTemplate'

const LoadingPage = props => {
  if (props.error) {
    throw new Error(`Couldn't load LoadingPage`)
  }
  return (
    <AnnouncementTemplate>
      <Loader active inline="centered" />
    </AnnouncementTemplate>
  )
}

LoadingPage.propTypes = {
  error: bool,
}

export default LoadingPage
