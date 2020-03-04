import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { DrawerMenu } from '../components';
import { fetchTypeRelatedData } from '../actions';
import { getRandomColor } from '../utils/getRandomColor';

class TypeContainer extends React.Component {
  componentDidMount() {
    const { fetchTypeRelatedData, match, menu } = this.props;
    if (menu.length) {
      fetchTypeRelatedData(match.params.type);
    }
  }

  handleListItemClick = val => () => {
    const { history } = this.props
    history.push(`/${val}`)
  }

  render() {
    const { menu, match, typeData } = this.props;
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
        <div className="list-container">
          {typeData.length && typeData.map((item, index) => (
            <div key={index} className="list-item">
              <div className="avatar" style={{ backgroundColor: getRandomColor() }}>{item.name.charAt(0).toUpperCase()}</div>
              <div className="ellipsis" style={{ maxWidth: '20%', width: '20%' }}>{item.name}</div>
              <div className="ellipsis" style={{ maxWidth: '15%', textTransform: 'capitalize' }}>{item.gender}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ init }) => {
  const { menu, typeData } = init;
  return {
    menu,
    typeData
  }
}

const mapDispatchToProps = {
  fetchTypeRelatedData
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TypeContainer)
);