import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from '@material-ui/core';

function DrawerMenu({
    menu,
    variant,
    anchor,
    className,
    showToolbar,
    handleListItemClick,
    selectedKey
  }) {
  return (
    <Drawer
      variant={variant}
      anchor={anchor}
      className={className}
    >
      {showToolbar && <div className="toolbar" />}
      <Divider />
      <List>
        {menu.map(item => (
          <ListItem
            selected={selectedKey === item.key}
            button
            key={item.key}
            onClick={handleListItemClick(item.key)}
          >
            {item.component && (
              <ListItemIcon><item.component /></ListItemIcon>
            )}
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

DrawerMenu.defaultProps = {
  menu: [],
  variant: 'permanent',
  anchor: 'left',
  className: 'drawer',
  showToolbar: true,
}

export default DrawerMenu;