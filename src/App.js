import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import MainContainer from './Containers/MainContainer';
import TypeContainer from './Containers/TypeContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/:type" component={TypeContainer} />
      </Switch>
    </Router>
  )
}

export default App;
