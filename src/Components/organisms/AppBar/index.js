import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu as MuiMenu,
} from '@material-ui/core'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import { ArrowBack, Menu, AccountCircle } from '@material-ui/icons'
import PropTypes from 'prop-types'
import styles from './styles'
import { showTitle } from 'Utils/showTitle'

function NavBar({
  match,
  handleShowDrawer,
  isShowDrawer,
  classes,
  userData,
  handleSignOut,
}) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const doLogout = () => {
    handleClose()
    handleSignOut()
  }
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton onClick={handleShowDrawer} className={classes.icon}>
          {isShowDrawer ? <ArrowBack /> : <Menu />}
        </IconButton>
        <Typography
          variant="subtitle1"
          color="primary"
          className={classes.title}>
          {showTitle(match.path)}
        </Typography>
        {userData && (
          <div>
            <IconButton
              aria-haspopup="true"
              aria-label="Account of current user"
              onClick={handleMenu}
              color="inherit"
              aria-controls="show-profile">
              <AccountCircle />
            </IconButton>
            <MuiMenu
              id="show-profile"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={doLogout}>Logout</MenuItem>
            </MuiMenu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  match: PropTypes.object,
  handleShowDrawer: PropTypes.func,
  classes: PropTypes.object,
  isShowDrawer: PropTypes.bool,
  userData: PropTypes.object,
  handleSignOut: PropTypes.func,
}

export default compose(
  withRouter,
  withStyles(styles)
)(NavBar)
