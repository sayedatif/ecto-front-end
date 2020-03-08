import React from 'react';
import { ColumnMap } from '../../utils';
import Pagination from '@material-ui/lab/Pagination';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ComponentAvatar from '../Avatar';

class ListContainer extends React.Component {
  getValue = (obj, item, key) => {
    if (Array.isArray(obj[item[key]])) {
      return obj[item[key]].length
    }
    return obj[item[key]]
  }

  renderSortArrows = () => {
    const { sortOrder } = this.props;
    if (sortOrder === 'desc') {
      return <ArrowDownwardIcon style={{ fontSize: '18px' }} />
    } else if (sortOrder === 'asc') {
      return <ArrowUpwardIcon style={{ fontSize: '18px' }} />
    }
  }

  renderItems = (selectedKey, key, obj = null) => {
    const { handleHeaderClick, sortKey } = this.props;
    return ColumnMap[selectedKey].map((item, index) => (
      <span
        key={index}
        style={{ width: '20%', display: 'flex', alignItems: 'center' }}
        className={key === 'label' ? 'header-font' : 'row-font'}
        onClick={handleHeaderClick(item, key)}
      >
        {key !== 'label'
          && item.showAvatar
          && this.getValue(obj, item, key)
          && (
            <ComponentAvatar character={this.getValue(obj, item, key)} />
          )}
        {obj ? this.getValue(obj, item, key) : item[key]}
        {key === 'label' && sortKey === item.key && this.renderSortArrows()}
      </span>
    ))
  }

  render() {
    const {
      selectedKey,
      typeData,
      handlePagination,
      totalPage,
      page
    } = this.props;
    return (
      <React.Fragment>
        <div className="list-item">
          {this.renderItems(selectedKey, 'label')}
        </div>
        {typeData.length > 0 && typeData.map((item, index) => (
          <div className="list-item" key={index}>
            {this.renderItems(selectedKey, 'key', item)}
          </div>
        ))}
        {typeData.length === 0 && (
          <div className="list-item justify-center">
            No Data
          </div>
        )}
        {totalPage > 1 && (
          <div className="flex-end">
            <Pagination
              count={totalPage}
              color="primary"
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={(e, num) => handlePagination(e, num)}
            />
          </div>
        )}
      </React.Fragment>
    )
  }
}

ListContainer.defaultProps = {
  selectedKey: 'people',
  typeData: [],
  totalPage: 10,
  page: 1,
  sortOrder: 'default'
}

export default ListContainer;