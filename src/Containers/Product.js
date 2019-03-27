import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Product from 'src/Components/pages/Product'
import '../Stores/Product/Sagas'
import '../Stores/Product/Reducers'
import { ProductActions } from '../Stores/Product/Actions'
import { getLoadingList } from '../Stores/Loading/Selectors'
import { ModalActions } from '../Stores/Modal/Actions'
import {
  getFilter,
  getItems,
  getLoadingItem,
  getTotalCount,
  getTotalPages,
} from '../Stores/Product/Selectors'
const ProductContainer = props => {
  useEffect(() => {
    props.handleGetListProduct(props.filter.toJS())
    return () => {
      props.handleClearProducts()
    }
  }, [props.filter])
  // handle delete product
  const handleDeleteProduct = id => () => {
    props.handleOpenModal('ConfirmationDialog', {
      title: 'Delete Product',
      content: 'Do You want to delete Product',
      onConfirm: () => props.deleteProduct(id),
    })
  }
  const handleSetFilter = async (name, value) => {
    await props.setFilter(name, value)
    props.handleGetListProduct(props.filter.toJS())
  }

  return (
    <Product
      handleDeleteProduct={handleDeleteProduct}
      handleSetFilter={handleSetFilter}
      {...props}
    />
  )
}

const mapStateToProps = state => ({
  items: getItems(state),
  filter: getFilter(state),
  isLoadingItems: getLoadingList(state),
  totalCount: getTotalCount(state),
  totalPages: getTotalPages(state),
})

const mapDispatchToProps = dispatch => ({
  handleGetListProduct: filter =>
    dispatch(ProductActions.getItemsRequest(filter)),
  // Clear list product when component unmount
  handleClearProducts: () => dispatch(ProductActions.clearItems()),
  // Hanlde change filter
  setFilter: (name, value) => dispatch(ProductActions.setFilter(name, value)),
  // Delete product
  deleteProduct: id => dispatch(ProductActions.deleteItemRequest(id)),
  // Open modal
  handleOpenModal: (type, props) =>
    dispatch(ModalActions.setModal(type, props)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(ProductContainer)
