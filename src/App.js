import React from 'react';
import { connect } from 'react-redux';
import ComponentButton from './components/Button';
import { initialRequest } from './actions';

class App extends React.Component {
  componentDidMount() {
    const { initialRequest } = this.props;
    initialRequest();
  }

  render() {
    return (
      <div>
        <ComponentButton variant="contained" />
      </div>
    )
  }
}

const mapDispatchToProps = {
  initialRequest,
}

export default connect(null, mapDispatchToProps)(App);
