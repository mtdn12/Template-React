import React from 'react'
import { number, func, array } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TablePagination } from '@material-ui/core'
import styles from './styles'

const Pagination = ({
  options,
  count,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TablePagination
      colSpan={3}
      component="div"
      rowsPerPageOptions={options}
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      backIconButtonProps={{
        'aria-label': 'Previous Page',
      }}
      nextIconButtonProps={{
        'aria-label': 'Next Page',
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  )
}

Pagination.propTypes = {
  options: array.isRequired,
  count: number.isRequired,
  rowsPerPage: number.isRequired,
  page: number.isRequired,
  handleChangePage: func.isRequired,
  handleChangeRowsPerPage: func.isRequired,
}

export default withStyles(styles)(Pagination)
