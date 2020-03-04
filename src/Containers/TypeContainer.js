import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { DrawerMenu } from '../components';

class TypeContainer extends React.Component {
  handleListItemClick = val => () => {
    const { history } = this.props
    history.push(`/${val}`)
  }

  render() {
    const { menu, match } = this.props;
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
      </div>
    )
  }
}

const mapStateToProps = ({ init }) => {
  const { menu } = init;
  return {
    menu,
  }
}

export default withRouter(
  connect(mapStateToProps)(TypeContainer)
);