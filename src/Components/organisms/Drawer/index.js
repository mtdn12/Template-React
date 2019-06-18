import React from 'react'
import { object, func, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Drawer as MuiDrawer, List } from '@material-ui/core'
import { Assessment, AssignmentInd } from '@material-ui/icons'
import styles from './styles'
import LinkDrawer from '../../molecules/LinkDrawer'

const Drawer = ({ classes, handleHideDrawer, isShowDrawer }) => {
  return (
    <MuiDrawer
      open={isShowDrawer}
      onClose={handleHideDrawer}
      classes={{ paper: classes.drawerPaper }}>
      <List>
        <LinkDrawer
          icon={<AssignmentInd />}
          handleClick={handleHideDrawer}
          path="/product"
          label="Product"
        />
        <LinkDrawer
          icon={<Assessment />}
          handleClick={handleHideDrawer}
          path="/modalExample"
          label="Modal example"
        />
      </List>
    </MuiDrawer>
  )
}

Drawer.propTypes = {
  classes: object.isRequired,
  handleHideDrawer: func.isRequired,
  isShowDrawer: bool.isRequired,
}

export default withStyles(styles)(Drawer)
