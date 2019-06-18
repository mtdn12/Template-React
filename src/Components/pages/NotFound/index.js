import React from 'react'
import { any } from 'prop-types'
import { Typography, Button } from '@material-ui/core'

import NonAuthTemplate from '../../templates/NonAuthTemplate'

const Link = React.forwardRef((props, ref) => (
  <a ref={ref} {...props}>
    {props.children}
  </a>
))

const NotFound = () => {
  return (
    <NonAuthTemplate>
      <Typography variant="h5" align="center" gutterBottom>
        Not Found
      </Typography>
      <Button comment={Link} color="primary" href="/" variant="contained">
        Go back to homepage
      </Button>
    </NonAuthTemplate>
  )
}

Link.propTypes = {
  children: any,
}
export default NotFound
