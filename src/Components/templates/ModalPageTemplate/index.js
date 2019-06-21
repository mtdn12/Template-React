import React from 'react'
import { node, string, func } from 'prop-types'
import Notification from 'Containers/Notification'
import useStyles from './styles'
import Modal from 'Containers/ModalManager'
import AppBarModalPage from '../../organisms/AppbarModalPage'
import { withRouter } from 'react-router-dom'

const ModalPageTemplate = ({ title, handleGoBack, children }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <AppBarModalPage title={title} handleGoBack={handleGoBack} />
      <main className={classes.contentWrapper}>{children}</main>
      <Notification />
      <Modal />
    </div>
  )
}

ModalPageTemplate.propTypes = {
  children: node,
  title: string,
  handleGoBack: func,
}

export default withRouter(ModalPageTemplate)
