import React from 'react'
import { node } from 'prop-types'

import Notification from 'Containers/Notification'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  boxSizing: 'border-box',
  padding: 20,
}

const NonAuthTemplate = ({ children, ...props }) => {
  return (
    <div {...props} style={styles}>
      {children}
      <Notification />
    </div>
  )
}

NonAuthTemplate.propTypes = {
  children: node.isRequired,
}

export default NonAuthTemplate
