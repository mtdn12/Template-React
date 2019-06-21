import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { compose } from 'redux'
import { AuthActions } from 'Stores/Authentication/Actions'
import { AuthSelectors } from '../Stores/Authentication/Selectors'

import AuthTemplate from 'Components/templates/AuthTemplate'

const AuthTemplateContainer = props => {
  const [isShowDrawer, setShowDrawer] = useState(false)
  const handleShowDrawer = () => setShowDrawer(true)
  const handleHideDrawer = () => setShowDrawer(false)
  return (
    <AuthTemplate
      isShowDrawer={isShowDrawer}
      handleShowDrawer={handleShowDrawer}
      handleHideDrawer={handleHideDrawer}
      {...props}
    />
  )
}

AuthTemplateContainer.propsTypes = {
  doLogout: PropTypes.func,
  doGoto: PropTypes.func,
}

const mapStateToProps = state => ({
  userData: AuthSelectors.getUserData(state),
})

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(AuthActions.doLogout()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(AuthTemplateContainer)
