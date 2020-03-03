import React from 'react';
import { connect } from 'react-redux';
import { initialRequest } from './actions';
import { ComponentCircularProgress } from './components';
import './styles/index.css';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from '@material-ui/core';

class App extends React.Component {
  componentDidMount() {
    const { initialRequest } = this.props;
    initialRequest();
  }

  render() {
    const { initialLoading, menu } = this.props;
    return (
      <div className="ecto-container">
        <div className="full-height center-aligned">
          {initialLoading && <ComponentCircularProgress />}
          {!initialLoading && (
            <Drawer
              variant="permanent"
              anchor="left"
              className="drawer"
            >
              <div className="toolbar" />
              <Divider />
              <List>
                {menu.map(item => (
                  <ListItem button key={item.key}>
                    <ListItemIcon><item.component /></ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
