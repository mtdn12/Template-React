import React from 'react'
import styles from './styles.module.scss'
import { object, bool, number, func } from 'prop-types'
import { Button, Header } from 'semantic-ui-react'

const ModalExample = ({ handleOpenLoginModal, handleOpenRegisterModal }) => {
  return (
    <div id={styles.modalExampleWrap}>
      <Header as="h1" textAlign="center" color="blue">
        Modal Example
      </Header>
      <div className={styles.btnWrap}>
        <Button onClick={handleOpenLoginModal} color="blue">
          Open Login Modal Example
        </Button>
        <Button onClick={handleOpenRegisterModal} color="blue">
          Open Register Modal Example
        </Button>
      </div>
    </div>
  )
}

ModalExample.propTypes = {
  handleOpenRegisterModal: func,
  handleOpenLoginModal: func,
}

export default ModalExample
