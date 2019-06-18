import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { node, func, string, object } from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './styles'

const Link = React.forwardRef((props, ref) => <NavLink {...props} />)

const LinkDrawer = ({ classes, icon, handleClick, path, label }) => (
  <ListItem
    onClick={handleClick}
    component={Link}
    strict
    to={path}
    activeClassName={classes.linkActive}
    className={classes.linkItem}>
    <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
    <ListItemText>{label}</ListItemText>
  </ListItem>
)

LinkDrawer.propTypes = {
  classes: object,
  icon: node,
  handleClick: func,
  path: string,
  label: string,
}

export default withStyles(styles)(LinkDrawer)
