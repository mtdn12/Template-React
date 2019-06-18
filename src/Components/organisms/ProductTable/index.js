import React from 'react'
import { object, func, number } from 'prop-types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Checkbox,
  CircularProgress,
} from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Pagination from '../../molecules/Pagination'

const RefLink = React.forwardRef((props, ref) => <Link ref={ref} {...props} />)

const ProductTable = ({
  items,
  totalCount,
  filter,
  handleSetFilter,
  // Delete product
  handleDeleteProduct,
  handleCheckProduct,
  loadingItems,
}) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {items && items.length === 0 ? (
            <TableRow>
              <TableCell>No infomation</TableCell>
            </TableRow>
          ) : (
            items &&
            items.map(item => (
              <TableRow key={item.get('id')}>
                <TableCell>{item.get('id')}</TableCell>
                <TableCell>{item.get('name')}</TableCell>
                <TableCell>{item.get('amount')}</TableCell>
                <TableCell>
                  {!loadingItems.get(item.get('id')) && (
                    <Checkbox
                      checked={item.get('isDone')}
                      disabled={loadingItems.get(item.get('id'))}
                      onChange={handleCheckProduct(item.get('id'))}
                    />
                  )}
                  {loadingItems.get(item.get('id')) && (
                    <CircularProgress size={28} />
                  )}
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    component={RefLink}
                    to={`/product/edit/${item.get('id')}`}>
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={handleDeleteProduct(item.get('id'))}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <Pagination
        options={[5, 10, 15]}
        page={filter.get('page')}
        rowsPerPage={filter.get('limit')}
        count={totalCount}
        handleChangePage={(e, activePage) =>
          handleSetFilter('page', activePage)
        }
        handleChangeRowsPerPage={e => handleSetFilter('limit', +e.target.value)}
      />
    </div>
  )
}

ProductTable.propTypes = {
  items: object.isRequired,
  totalCount: number.isRequired,
  filter: object.isRequired,
  handleSetFilter: func.isRequired,
  // Delete product
  handleDeleteProduct: func.isRequired,
  handleCheckProduct: func.isRequired,
  loadingItems: object.isRequired,
}
export default ProductTable
