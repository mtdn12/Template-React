import React from 'react'
import { node, string, func } from 'prop-types'
import Notification from 'src/Containers/Notification'
import styles from './styles.module.scss'
import Modal from 'src/Containers/ModalManager'
import AppBarModalPage from '../../organisms/AppbarModalPage'
import { withRouter } from 'react-router-dom'

const ModalPageTemplate = ({ title, handleGoBack, children, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <AppBarModalPage title={title} handleGoBack={handleGoBack} />
      <main className={styles.contentWrapper}>{children}</main>
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
