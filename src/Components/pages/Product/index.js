import React from 'react'
import { object, bool, number, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Button, CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ProductTable from '../../organisms/ProductTable'
import styles from './styles'

const RefLink = React.forwardRef((props, ref) => <Link ref={ref} {...props} />)

const Product = ({
  classes,
  items,
  filter,
  totalCount,
  isLoadingList,
  totalPages,
  handleSetFilter,
  // Delete product
  handleDeleteProduct,
  handleCheckProduct,
  loadingItems,
}) => {
  return (
    <div>
      <div className={classes.btnWrap}>
        <Button
          color="primary"
          variant="contained"
          component={RefLink}
          to="/product/create">
          Create New Product
        </Button>
      </div>
      {isLoadingList && (
        <div className={classes.loadingWrap}>
          <CircularProgress size={56} />
        </div>
      )}
      {!isLoadingList && (
        <ProductTable
          items={items}
          filter={filter}
          loadingItems={loadingItems}
          totalPages={totalPages}
          totalCount={totalCount}
          handleSetFilter={handleSetFilter}
          handleDeleteProduct={handleDeleteProduct}
          handleCheckProduct={handleCheckProduct}
        />
      )}
    </div>
  )
}

Product.propTypes = {
  classes: object.isRequired,
  items: object.isRequired,
  filter: object.isRequired,
  totalCount: number.isRequired,
  isLoadingList: bool.isRequired,
  totalPages: number.isRequired,
  handleSetFilter: func.isRequired,
  // Delete product
  handleDeleteProduct: func.isRequired,
  handleCheckProduct: func.isRequired,
  loadingItems: object.isRequired,
}

export default withStyles(styles)(Product)
