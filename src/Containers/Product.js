import React, { useEffect } from 'react'
import { func, object } from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Product from 'Components/pages/Product'
import '../Stores/Product/Sagas'
import '../Stores/Product/Reducers'
import { ProductActions } from '../Stores/Product/Actions'
import { LoadingSelectors } from '../Stores/Loading/Selectors'
import { ModalActions } from '../Stores/Modal/Actions'
import { ProductSelectors } from '../Stores/Product/Selectors'
const ProductContainer = ({
  setFilter,
  deleteProduct,
  filter,
  handleGetListProduct,
  handleClearProducts,
  handleOpenModal,
  checkProduct,
  ...props
}) => {
  useEffect(() => {
    handleGetListProduct()
    return () => {
      handleClearProducts()
    }
  }, [filter, handleGetListProduct, handleClearProducts])
  // handle delete product
  const handleDeleteProduct = id => () => {
    handleOpenModal('ConfirmationDialog', {
      title: 'Delete Product',
      content: 'Do You want to delete Product',
      type: 'deleteProduct',
      id,
    })
  }
  // handle check product
  const handleCheckProduct = id => () => {
    checkProduct(id)
  }
  const handleSetFilter = (name, value) => {
    setFilter(name, value)
  }
  return (
    <Product
      handleDeleteProduct={handleDeleteProduct}
      handleSetFilter={handleSetFilter}
      handleCheckProduct={handleCheckProduct}
      filter={filter}
      {...props}
    />
  )
}

const mapStateToProps = state => ({
  items: ProductSelectors.getItems(state),
  filter: ProductSelectors.getFilter(state),
  isLoadingList: LoadingSelectors.getLoadingList(state),
  totalCount: ProductSelectors.getTotalCount(state),
  totalPages: ProductSelectors.getTotalPages(state),
  loadingItems: LoadingSelectors.getLoadingItems(state),
})

const mapDispatchToProps = dispatch => ({
  handleGetListProduct: () => dispatch(ProductActions.getItemsRequest()),
  // Clear list product when component unmount
  handleClearProducts: () => dispatch(ProductActions.clearItems()),
  // Hanlde change filter
  setFilter: (name, value) => dispatch(ProductActions.setFilter(name, value)),
  // Open modal
  handleOpenModal: (type, props) =>
    dispatch(ModalActions.setModal(type, props)),
  // Check Product
  checkProduct: id => dispatch(ProductActions.checkItemRequest(id)),
})

ProductContainer.propTypes = {
  handleClearProducts: func,
  filter: object,
  handleOpenModal: func,
  deleteProduct: func,
  setFilter: func,
  handleGetListProduct: func,
  checkProduct: func,
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(ProductContainer)
