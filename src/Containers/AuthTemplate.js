import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { compose } from 'redux'
import { GlobalActions } from 'src/Stores/Global/Actions'
import { AuthActions } from 'src/Stores/Authentication/Actions'

import AuthTemplateV1 from 'src/Components/templates/AuthTemplate'

class AuthTemplateV1Container extends React.Component {
  componentDidMount() {}

  render() {
    return <AuthTemplateV1 {...this.props} />
  }
}

AuthTemplateV1Container.propsTypes = {
  doLogout: PropTypes.func,
  doGoto: PropTypes.func,
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(AuthActions.doLogout()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(AuthTemplateV1Container)
