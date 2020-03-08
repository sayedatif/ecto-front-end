import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { setSearchText, fetchTypeRelatedData } from '../actions';

class Header extends React.Component {
  handleSearchChange = e => {
    const { setSearchText } = this.props;
    setSearchText(e.target.value)
  }

  handleEnter = e => {
    const { match, fetchTypeRelatedData, searchText } = this.props;
    if (e.keyCode === 13 && searchText.trim().length > 0) {
      fetchTypeRelatedData({ type: match.params.type });
    }
  }

  render() {
    const { searchText, showListLoading } = this.props;
    return (
      <div className="header">
        <Grid container spacing={1} alignItems="flex-end" style={{ margin: 0, marginLeft: '245px' }}>
          <Grid item>
            <SearchIcon color="primary" />
          </Grid>
          <Grid item>
            <TextField
              value={searchText}
              label="Search"
              onChange={this.handleSearchChange}
              onKeyDown={this.handleEnter}
              disabled={showListLoading}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ init }) => {
  const { searchText, showListLoading } = init;
  return {
    searchText,
    showListLoading
  }
};

const mapDispatchToProps = {
  setSearchText,
  fetchTypeRelatedData,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);