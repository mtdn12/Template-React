import React from 'react'
import { object } from 'prop-types'
import { Header, Button } from 'semantic-ui-react'

import NonAuthTemplate from '../../templates/NonAuthTemplate'

const NotFound = ({ classes }) => {
  return (
    <NonAuthTemplate>
      <Header as="h2">Not Found</Header>
      <Button as="a" href="/" primary>
        Go back to homepage
      </Button>
    </NonAuthTemplate>
  )
}
NotFound.propTypes = {
  classes: object.isRequired,
}
export default NotFound
