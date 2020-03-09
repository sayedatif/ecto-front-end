import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { DrawerMenu, ListContainer, ComponentCircularProgress } from '../components';
import {
  fetchTypeRelatedData,
  setSelectedPage,
  setSearchText,
  setTypeData,
  setSortOrder,
  setSortKey,
} from '../actions';
import Header from './Header';
import { sortedArrayByKey } from '../utils';

class TypeContainer extends React.Component {
  componentDidMount() {
    const { fetchTypeRelatedData, match, menu } = this.props;
    if (menu.length) {
      fetchTypeRelatedData({ type: match.params.type });
    }
  }

  componentDidUpdate(prevProps) {
    const { match, menu, fetchTypeRelatedData } = this.props;
    const { match: prevMatch } = prevProps;
    if (prevMatch.params.type !== match.params.type && menu.length) {
      fetchTypeRelatedData({ type: match.params.type });
    }
  }

  handleListItemClick = val => () => {
    const {
      history,
      setSelectedPage,
      setSearchText,
      setSortOrder,
      setSortKey
    } = this.props
    setSelectedPage(1);
    setSearchText('');
    setSortOrder('asc');
    setSortKey('');
    history.push(`/${val}`)
  }

  handlePagination = (e, num) => {
    const { match, fetchTypeRelatedData } = this.props;
    fetchTypeRelatedData({ type: match.params.type, page: num });
  }

  handleHeaderClick = (item, key) => () => {
    const {
      typeData,
      setTypeData,
      sortOrder,
      setSortOrder,
      setSortKey
    } = this.props;
    if (key === 'label' && item.label.indexOf('#') === -1) {
      let sortOrderToUpdate = 'asc';
      if (sortOrder === 'desc') {
        sortOrderToUpdate = 'asc'
      } else if (sortOrder === 'asc') {
        sortOrderToUpdate = 'desc';
      }
      const sortedData = sortedArrayByKey(typeData, item.key, sortOrderToUpdate);
      setSortOrder(sortOrderToUpdate);
      setSortKey(item.key);
      setTypeData(sortedData);
    }
  }

  render() {
    const {
      menu,
      match,
      typeData,
      showListLoading,
      totalCount,
      selectedPage,
      sortOrder,
      sortKey,
    } = this.props;
    if (!menu.length) {
      return <Redirect to="/" />
    }
    return (
      <div className="ecto-container">
        <Header />
        <DrawerMenu
          menu={menu}
          handleListItemClick={this.handleListItemClick}
          selectedKey={match.params.type}
        />
        <div className="list-container">
          {showListLoading && (
            <div className="flex-center">
              <ComponentCircularProgress />
            </div>
          )}
          {!showListLoading && (
            <ListContainer
              selectedKey={match.params.type}
              typeData={typeData}
              totalPage={Math.ceil(totalCount / 10)}
              page={selectedPage}
              handlePagination={this.handlePagination}
              handleHeaderClick={this.handleHeaderClick}
              sortOrder={sortOrder}
              sortKey={sortKey}
            />
          )}
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({ init }) => {
  const {
    menu,
    typeData,
    showListLoading,
    totalCount,
    selectedPage,
    sortOrder,
    sortKey,
  } = init;
  return {
    menu,
    typeData,
    showListLoading,
    totalCount,
    selectedPage,
    sortOrder,
    sortKey
  }
}

const mapDispatchToProps = {
  fetchTypeRelatedData,
  setSelectedPage,
  setSearchText,
  setTypeData,
  setSortOrder,
  setSortKey,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TypeContainer)
);