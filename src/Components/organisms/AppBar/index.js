import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { showTitle } from 'src/Utils/showTitle'

function AppBar({ match, handleShowDrawer }) {
  return (
    <Menu
      borderless
      fixed="top"
      className={styles.appBar}
      color="blue"
      inverted>
      <Menu.Item onClick={handleShowDrawer}>
        <Icon name="bars" />
      </Menu.Item>
      <Menu.Item header as="h4">
        {showTitle(match.path)}
      </Menu.Item>
    </Menu>
  )
}

AppBar.propTypes = {
  match: PropTypes.object,
  handleShowDrawer: PropTypes.func,
}

export default withRouter(AppBar)
