import React from 'react';
import Button from '@material-ui/core/Button';

function ComponentButton(props) {
  return (
    <Button {...props}>
      {props.label}
    </Button>
  )
}

ComponentButton.defaultProps = {
  variant: 'contained',
  disabled: false,
  label: 'Button',
  size: 'medium'
}

export default ComponentButton;