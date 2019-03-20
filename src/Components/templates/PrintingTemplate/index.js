import React from 'react'
import { node } from 'prop-types'

const PrintingTemplate = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

PrintingTemplate.propTypes = {
  children: node,
}

export default PrintingTemplate
