import React from 'react'
import { bool } from 'prop-types'
import { LinearProgress } from '@material-ui/core'

import Template from '../../templates/NonAuthTemplate'

const LoadingPage = props => {
  if (props.error) {
    throw new Error(`Couldn't load LoadingPage`)
  }
  return (
    <Template>
      <LinearProgress />
    </Template>
  )
}

LoadingPage.propTypes = {
  error: bool,
}

export default LoadingPage
