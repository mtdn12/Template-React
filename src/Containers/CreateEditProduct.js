import React, { useEffect } from 'react'
import { func, object } from 'prop-types'
import '../Stores/Product/Reducers'
import '../Stores/Product/Sagas'
import { connect } from 'react-redux'
import { compose } from 'redux'
import CreateEditProduct from 'Components/pages/CreateEditProduct'
import { ProductActions } from '../Stores/Product/Actions'
import { ProductSelectors } from '../Stores/Product/Selectors'
import { getLoadingAction } from '../Stores/Loading/Selectors'

const CreateEditProductContainer = ({
  match,
  handleGetItemDetail,
  handleResetItem,
  history,
  handleEditItem,
  handleCreateItem,
  ...props
}) => {
  // Check path and get item
  useEffect(() => {
    if (match.path === '/product/edit/:id') {
      handleGetItemDetail(+match.params.id)
    }
    return () => handleResetItem()
  }, [match.params.id, handleGetItemDetail, handleResetItem, match.path])
  // Hadle Action
  const handleAction = values => {
    if (match.path === '/product/edit/:id') {
      const { id, ...rest } = values
      handleEditItem(id, rest)
    } else {
      handleCreateItem(values)
    }
  }
  // Handle go back
  const handleGoBack = () => {
    history.push('/product')
  }
  let title =
    match.path === '/product/create' ? 'Create Product' : 'Edit Product'
  let btnContent = match.path === '/product/create' ? 'Create' : 'Update'
  return (
    <CreateEditProduct
      title={title}
      handleAction={handleAction}
      handleGoBack={handleGoBack}
      btnContent={btnContent}
      {...props}
    />
  )
}

const mapStateToProps = state => ({
  item: ProductSelectors.getFormItem(state),
  isLoadingAction: getLoadingAction(state),
})

const mapDispatchToProps = dispatch => ({
  handleGetItemDetail: id => dispatch(ProductActions.getItemRequest(id)),
  // Reset item when component unmount
  handleResetItem: () => dispatch(ProductActions.clearItem()),
  // Create Item
  handleCreateItem: values =>
    dispatch(ProductActions.createItemRequest(values)),
  // Edit Item
  handleEditItem: (id, values) =>
    dispatch(ProductActions.editItemRequest(id, values)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

CreateEditProductContainer.propTypes = {
  match: object.isRequired,
  handleGetItemDetail: func.isRequired,
  handleResetItem: func.isRequired,
  history: object.isRequired,
  handleEditItem: func.isRequired,
  handleCreateItem: func.isRequired,
}

export default compose(withConnect)(CreateEditProductContainer)
