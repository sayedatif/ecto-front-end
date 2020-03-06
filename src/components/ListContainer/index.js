import React from 'react';
import { ColumnMap } from '../../utils';
import { getRandomColor } from '../../utils/getRandomColor';
import Pagination from '@material-ui/lab/Pagination';

const getValue = (obj, item, key) => {
  if (Array.isArray(obj[item[key]])) {
    return obj[item[key]].length
  }
  return obj[item[key]]
}

function renderItems(selectedKey, key, obj = null) {
  return ColumnMap[selectedKey].map((item, index) => (
    <span
      key={index}
      style={{ width: '20%', display: 'flex', alignItems: 'center' }}
      className={key === 'label' ? 'header-font' : 'row-font'}
    >
      {key !== 'label'
        && item.showAvatar
        && getValue(obj, item, key)
        && (
          <span className="avatar" style={{ backgroundColor: getRandomColor() }}>
            {getValue(obj, item, key).charAt(0).toUpperCase()}
          </span>
        )}
      {obj ? getValue(obj, item, key) : item[key]}
    </span>
  ))
}

function ListContainer({
  selectedKey,
  typeData,
  handlePagination,
  totalPage,
  page
}) {
  return (
    <React.Fragment>
      <div className="list-item">
        {renderItems(selectedKey, 'label')}
      </div>
      {typeData.length > 0 && typeData.map((item, index) => (
        <div className="list-item" key={index}>
          {renderItems(selectedKey, 'key', item)}
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

ListContainer.defaultProps = {
  selectedKey: 'people',
  typeData: [],
  totalPage: 10,
  page: 1
}

export default ListContainer;