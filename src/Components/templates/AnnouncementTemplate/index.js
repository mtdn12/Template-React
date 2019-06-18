import React from 'react'
import { node } from 'prop-types'

const AnnoucementTemplate = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

AnnoucementTemplate.propTypes = {
  children: node,
}

export default AnnoucementTemplate
