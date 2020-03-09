import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ComponentAvatar from '../Avatar';
import { ColumnMap } from '../../utils';

class ItemsRenderer extends React.Component {
  getValue = (obj, item, key) => {
    if (obj && Array.isArray(obj[item[key]])) {
      return obj[item[key]].length
    }
    return obj[item[key]]
  }

  renderSortArrows = () => {
    const { sortOrder } = this.props;
    if (sortOrder === 'desc') {
      return <ArrowDownwardIcon className="icon-font" />
    } else if (sortOrder === 'asc') {
      return <ArrowUpwardIcon className="icon-font" />
    }
  }

  render() {
    const {
      selectedKey,
      objKey,
      obj = null,
      sortKey,
      handleHeaderClick
    } = this.props;
    return (
      <React.Fragment>
        {ColumnMap[selectedKey].map((item, index) => (
          <span
            key={index}
            style={{ width: '20%', display: 'flex', alignItems: 'center' }}
            className={objKey === 'label' ? 'header-font' : 'row-font'}
            onClick={handleHeaderClick(item, objKey)}
          >
            {objKey !== 'label'
              && item.showAvatar
              && this.getValue(obj, item, objKey)
              && (
                <ComponentAvatar character={this.getValue(obj, item, objKey)} />
              )}
            {obj ? this.getValue(obj, item, objKey) : item[objKey]}
            {objKey === 'label' && sortKey === item.key && this.renderSortArrows()}
          </span>
        ))}
      </React.Fragment>
    )
  }
}

export default ItemsRenderer;