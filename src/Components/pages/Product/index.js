import React from 'react'
import styles from './styles.module.scss'
import { object, bool, number, func } from 'prop-types'
import { Loader, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import ProductTable from '../../organisms/ProductTable'
const Product = ({
  items,
  filter,
  totalCount,
  isLoadingItems,
  totalPages,
  handleSetFilter,
  // Delete product
  handleDeleteProduct,
}) => {
  return (
    <div id={styles.productWrap}>
      <div className={styles.btnWrap}>
        <Button primary as={Link} to="/product/create">
          Create New Product
        </Button>
      </div>
      {isLoadingItems && <Loader active size="medium" inline="centered" />}
      {!isLoadingItems && (
        <ProductTable
          items={items}
          filter={filter}
          totalPages={totalPages}
          handleSetFilter={handleSetFilter}
          handleDeleteProduct={handleDeleteProduct}
        />
      )}
    </div>
  )
}

Product.propTypes = {
  items: object.isRequired,
  filter: object.isRequired,
  totalCount: number.isRequired,
  isLoadingItems: bool.isRequired,
  totalPages: number.isRequired,
  handleSetFilter: func.isRequired,
  // Delete product
  handleDeleteProduct: func.isRequired,
}

export default Product
