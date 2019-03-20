import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Product from 'src/Components/pages/Product'
import { ProductActions } from '../Stores/Product/Actions'
import { ModalActions } from '../Stores/Modal/Actions'
import {
  getFilter,
  getItems,
  getLoadingItem,
  getTotalCount,
  getTotalPages,
} from '../Stores/Product/Selectors'

class ProductContainer extends Component {
  componentDidMount() {
    this.props.handleGetListProduct(this.props.filter.toJS())
  }
  componentWillUnmount() {
    this.props.handleClearProducts()
  }
  handleDeleteProduct = id => () => {
    this.props.handleOpenModal('ConfirmationDialog', {
      title: 'Delete Product',
      content: 'Do You want to delete Product',
      onConfirm: () => this.props.deleteProduct(id),
    })
  }
  handleSetFilter = async (name, value) => {
    await this.props.setFilter(name, value)
    this.props.handleGetListProduct(this.props.filter.toJS())
  }
  render() {
    return (
      <Product
        handleDeleteProduct={this.handleDeleteProduct}
        handleSetFilter={this.handleSetFilter}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  items: getItems(state),
  filter: getFilter(state),
  isLoadingItem: getLoadingItem(state),
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
