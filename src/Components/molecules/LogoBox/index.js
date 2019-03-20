import React from 'react'
import { object } from 'prop-types'
import { Header } from 'semantic-ui-react'
import styles from './styles.module.scss'

const LogoBox = ({ ...props }) => {
  return (
    <div id={styles.LogoBoxWrap}>
      <Header as="h2" textAlign="center" color="white" inverted>
        Template Pro
      </Header>
      <Header as="h4" textAlign="center" color="white" inverted>
        A product of Square Communication
      </Header>
    </div>
  )
}

LogoBox.propTypes = {
  classes: object.isRequired,
}

export default LogoBox
