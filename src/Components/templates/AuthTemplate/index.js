import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '../../organisms/Drawer'
import AppBar from '../../organisms/AppBar'
import Notification from 'Containers/Notification'
import useStyles from './styles'
import Modal from 'Containers/ModalManager'

const AuthTemplate = ({
  children,
  doLogout,
  handleShowDrawer,
  handleHideDrawer,
  isShowDrawer,
  userData,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <AppBar
        handleShowDrawer={handleShowDrawer}
        isShowDrawer={isShowDrawer}
        handleHideDrawer={handleHideDrawer}
        userData={userData}
        handleSignOut={doLogout}
      />
      <Drawer isShowDrawer={isShowDrawer} handleHideDrawer={handleHideDrawer} />
      <main className={classes.contentWrapper}>{children}</main>
      <Notification />
      <Modal />
    </div>
  )
}

AuthTemplate.propTypes = {
  children: PropTypes.node,
  doLogout: PropTypes.func,
  handleShowDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  isShowDrawer: PropTypes.bool,
  userData: PropTypes.object,
}

export default AuthTemplate
