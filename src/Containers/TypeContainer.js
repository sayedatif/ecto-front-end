import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { DrawerMenu, ListContainer, ComponentCircularProgress } from '../components';
import { fetchTypeRelatedData, setSelectedPage } from '../actions';

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
    const { history, setSelectedPage } = this.props
    setSelectedPage(1);
    history.push(`/${val}`)
  }

  handlePagination = (e, num) => {
    const { match, fetchTypeRelatedData } = this.props;
    fetchTypeRelatedData({ type: match.params.type, page: num });
  }

  render() {
    const {
      menu,
      match,
      typeData,
      showListLoading,
      totalCount,
      selectedPage
    } = this.props;
    if (!menu.length) {
      return <Redirect to="/" />
    }
    return (
      <div className="ecto-container">
        <DrawerMenu
          menu={menu}
          handleListItemClick={this.handleListItemClick}
          selectedKey={match.params.type}
        />
        {typeData.length > 0 && (
          <React.Fragment>
            <div className="list-container">
              {showListLoading && <div className="flex-center"><ComponentCircularProgress /></div>}
              {!showListLoading && (
                <ListContainer
                  selectedKey={match.params.type}
                  typeData={typeData}
                  totalPage={Math.ceil(totalCount / 10)}
                  page={selectedPage}
                  handlePagination={this.handlePagination}
                />
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ init }) => {
  const { menu, typeData, showListLoading, totalCount, selectedPage } = init;
  return {
    menu,
    typeData,
    showListLoading,
    totalCount,
    selectedPage,
  }
}

const mapDispatchToProps = {
  fetchTypeRelatedData,
  setSelectedPage,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TypeContainer)
);