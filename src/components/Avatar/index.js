import React from 'react';
import { getRandomColor } from '../../utils/getRandomColor';

function ComponentAvatar({ character }) {
  return (
    <span className="avatar" style={{ backgroundColor: getRandomColor() }}>
      {character.charAt(0).toUpperCase()}
    </span>
  )
}

ComponentAvatar.defaultProps ={
  character: 'a'
}

export default ComponentAvatar