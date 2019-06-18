import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import styles from './styles'

function AppBarModalPage({ classes, handleGoBack, title }) {
  return (
    <AppBar position="fixed" onClick={handleGoBack}>
      <Toolbar>
        <IconButton>
          <ArrowBack color="inherit" className={classes.icon} />
        </IconButton>
        <Typography className={classes.title}>{title}</Typography>
      </Toolbar>
    </AppBar>
  )
}

AppBarModalPage.propTypes = {
  handleGoBack: PropTypes.func,
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppBarModalPage)
