import React, { PureComponent } from 'react'
import { number, func, array } from 'prop-types'
import styles from './styles.module.scss'

import {
  Pagination as PaginationSemantic,
  Segment,
  Form,
} from 'semantic-ui-react'

class Pagination extends PureComponent {
  state = {
    boundaryRange: 1,
    siblingRange: 1,
  }
  render() {
    const { boundaryRange, siblingRange } = this.state
    const {
      activePage,
      totalPages,
      handleChangePage,
      options,
      handleChangeLimit,
      limit,
    } = this.props
    return (
      <div className={styles.wrapper}>
        <Form.Field width={5} className={styles.slectWrapper}>
          <Form.Select
            label="Limit"
            options={options}
            onChange={handleChangeLimit}
            value={limit}
            className={styles.selectLimit}
          />
        </Form.Field>
        <PaginationSemantic
          activePage={activePage}
          boundaryRange={boundaryRange}
          onPageChange={handleChangePage}
          size="mini"
          siblingRange={siblingRange}
          totalPages={totalPages}
          ellipsisItem={undefined}
          firstItem={undefined}
          lastItem={undefined}
          prevItem={undefined}
          nextItem={undefined}
        />
      </div>
    )
  }
}
Pagination.propTypes = {
  activePage: number,
  totalPages: number,
  handleChangePage: func,
  options: array,
  handleChangeLimit: func,
  limit: number,
}

export default Pagination
