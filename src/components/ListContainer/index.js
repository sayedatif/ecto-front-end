import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import ItemsRenderer from './ItemsRenderer';


class ListContainer extends React.Component {

  render() {
    const {
      selectedKey,
      typeData,
      handlePagination,
      totalPage,
      page,
      sortKey,
      handleHeaderClick,
      sortOrder,
    } = this.props;
    return (
      <React.Fragment>
        <div className="list-item">
          <ItemsRenderer 
            selectedKey={selectedKey}
            objKey="label"
            sortKey={sortKey}
            sortOrder={sortOrder}
            handleHeaderClick={handleHeaderClick}
          />
        </div>
        {typeData.length > 0 && typeData.map((item, index) => (
          <div className="list-item" key={index}>
            <ItemsRenderer 
              selectedKey={selectedKey}
              objKey="key"
              sortKey={sortKey}
              obj={item}
              handleHeaderClick={handleHeaderClick}
            />
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