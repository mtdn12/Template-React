import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import CreateEditProduct from 'src/Components/pages/CreateEditProduct'
import { ProductActions, ProductTypes } from '../Stores/Product/Actions'
import { getFormItem, getLoadingAction } from '../Stores/Product/Selectors'

class CreateEditProductContainer extends Component {
  componentDidMount() {
    const { match, handleGetItemDetail } = this.props
    if (match.path === '/product/edit/:id') {
      handleGetItemDetail(+match.params.id)
    }
  }
  componentWillUnmount() {
    this.props.handleResetItem()
  }
  handleAction = values => {
    console.log(values)
    if (this.props.match.path === '/product/edit/:id') {
      const { id, ...rest } = values
      this.props.handleEditItem(id, rest)
    } else {
      this.props.handleCreateItem(values)
    }
  }
  handleGoBack = () => {
    this.props.history.push('/product')
  }
  render() {
    let title =
      this.props.match.path === '/product/create'
        ? 'Create Product'
        : 'Edit Product'
    let btnContent =
      this.props.match.path === '/product/create' ? 'Create' : 'Update'
    return (
      <CreateEditProduct
        title={title}
        handleAction={this.handleAction}
        handleGoBack={this.handleGoBack}
        btnContent={btnContent}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  item: getFormItem(state),
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

export default compose(withConnect)(CreateEditProductContainer)
