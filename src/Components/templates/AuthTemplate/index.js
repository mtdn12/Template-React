import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dimmer } from 'semantic-ui-react'
import Drawer from '../../organisms/Drawer'
import AppBar from '../../organisms/AppBar'
import Notification from 'src/Containers/Notification'
import styles from './styles.module.scss'
import Modal from 'src/Containers/ModalManager'

class AuthTemplateV1 extends Component {
  state = {
    isOpenDrawer: false,
  }
  handleShowDrawer = () => {
    this.setState({ isOpenDrawer: true })
  }
  handleHideDrawer = () => {
    this.setState({ isOpenDrawer: false })
  }
  render() {
    const { children, doLogout } = this.props
    return (
      <div className={styles.wrapper}>
        <AppBar handleShowDrawer={this.handleShowDrawer} />
        <Drawer
          isOpenDrawer={this.state.isOpenDrawer}
          handleHideDrawer={this.handleHideDrawer}
          handleSignOut={doLogout}
        />
        <main className={styles.contentWrapper}>{children}</main>
        <Dimmer active={this.state.isOpenDrawer} page />
        <Notification />
        <Modal />
      </div>
    )
  }
}
AuthTemplateV1.propTypes = {
  children: PropTypes.node,
  doLogout: PropTypes.func,
}

export default AuthTemplateV1
