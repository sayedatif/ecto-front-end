import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ComponentCircularProgress } from '../components';
import { initialRequest } from '../actions';

class MainContainer extends React.Component {
  componentDidMount() {
    const { initialRequest } = this.props;
    initialRequest();
  }

  render() {
    const { initialLoading, menu } = this.props;
    return (
      <div className="ecto-container">
        <div className="full-height center-aligned">
          {!initialLoading && menu.length
            ? <Redirect to={`/${menu[0].key}`} />
            : <ComponentCircularProgress />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ init }) => {
  const { initialLoading, menu } = init;
  return {
    initialLoading,
    menu,
  }
}

const mapDispatchToProps = {
  initialRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);