import React from 'react'

import { Table, Button, Icon } from 'semantic-ui-react'
import { object, func, bool, number } from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import Pagination from '../../molecules/Pagination'

const ProductTable = ({
  items,
  totalPages,
  filter,
  handleSetFilter,
  // Delete product
  handleDeleteProduct,
}) => {
  return (
    <div id={styles.tableWrap}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.length === 0 ? (
            <Table.Row>
              <Table.Cell>No infomation</Table.Cell>
            </Table.Row>
          ) : (
            items.map(item => (
              <Table.Row key={item.get('id')}>
                <Table.Cell>{item.get('id')}</Table.Cell>
                <Table.Cell>{item.get('name')}</Table.Cell>
                <Table.Cell>{item.get('amount')}</Table.Cell>
                <Table.Cell>
                  <Button
                    icon
                    primary
                    as={Link}
                    to={`/product/edit/${item.get('id')}`}>
                    <Icon name="edit" />
                  </Button>
                  <Button
                    icon
                    negative
                    onClick={handleDeleteProduct(item.get('id'))}>
                    <Icon name="delete" />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
      <Pagination
        activePage={filter.get('page')}
        totalPages={totalPages}
        handleChangePage={(e, { activePage }) =>
          handleSetFilter('page', activePage)
        }
        handleChangeLimit={(e, { value }) => handleSetFilter('limit', value)}
        limit={filter.get('limit')}
        options={[
          { text: '5', value: 5 },
          { text: '10', value: 10 },
          { text: '20', value: 20 },
        ]}
      />
    </div>
  )
}

ProductTable.propTypes = {
  items: object.isRequired,
  totalPages: number.isRequired,
  filter: object.isRequired,
  handleSetFilter: func.isRequired,
  isLoadingItem: bool.isRequired,
  // Delete product
  handleDeleteProduct: func.isRequired,
}
export default ProductTable
