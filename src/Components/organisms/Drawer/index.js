/* eslint-disable prettier/prettier */
import React from 'react'
import { bool, func, object } from 'prop-types'
import { Icon, Menu, Sidebar, Image, Dimmer } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import styles from './styles.module.scss'

const list = [
  {
    url: '/product',
    icon: 'star',
    text: 'Product',
  },
  {
    url: '/modalExample',
    icon: 'star',
    text: 'Modal Example',
  },
]

function Drawer({ isOpenDrawer, handleHideDrawer, match, history, handleSignOut }) {
  return (
    <React.Fragment>
      <Sidebar
        id={styles.drawer}
        as={Menu}
        animation="overlay"
        vertical
        inverted
        color="blue"
        onHide={handleHideDrawer}
        visible={isOpenDrawer}
      >
        <Menu.Item>
          <Menu.Menu>
            {list.map((item, index) => (
              <Menu.Item key={index}
                onClick={handleHideDrawer}
                exact
                activeClassName={styles.activeItem} as={NavLink} to={item.url}
                className={styles.drawerItem} >
                <Icon name={item.icon} />
                <span>{item.text}</span>
              </Menu.Item>
        ))}
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item
          position="right"
          onClick={() => {
            handleHideDrawer()
            handleSignOut()
            }
          }
          className={styles.drawerItem} >
          <Icon name='sign out' />
          <span>Sign Out</span>
        </Menu.Item>
      </Sidebar>
    </React.Fragment>
  )
}

Drawer.propTypes = {
  isOpenDrawer: bool,
  handleHideDrawer: func,
  match: object,
  history: object,
  handleSignOut: func,
}

export default withRouter(Drawer)
