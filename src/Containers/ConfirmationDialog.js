import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ProductActions } from '../Stores/Product/Actions'
import ConfirmationDialog from '../Components/molecules/ConfirmationDialog'

const ConfirmationDialogContainer = ({ type, id, deleteProduct, ...props }) => {
  const handleAction = () => {
    switch (type) {
      case 'deleteProduct':
        deleteProduct(id)
        break
      default:
        break
    }
  }
  return <ConfirmationDialog onConfirm={handleAction} {...props} />
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  deleteProduct: id => dispatch(ProductActions.deleteItemRequest(id)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

ConfirmationDialogContainer.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number,
  deleteProduct: PropTypes.func,
}

export default compose(withConnect)(ConfirmationDialogContainer)
