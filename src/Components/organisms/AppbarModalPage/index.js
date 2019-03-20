import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

function AppBarModalPage({ handleGoBack, title }) {
  return (
    <Menu
      borderless
      fixed="top"
      className={styles.appBar}
      color="blue"
      inverted>
      <Menu.Item onClick={handleGoBack}>
        <Icon name="arrow left" />
      </Menu.Item>
      <Menu.Item header as="h4">
        {title}
      </Menu.Item>
    </Menu>
  )
}

AppBarModalPage.propTypes = {
  handleGoBack: PropTypes.func,
  title: PropTypes.string,
}

export default AppBarModalPage
