import React from 'react';

function BaseIcon(props) {
  return (
    <svg height={props.height} width={props.width} fill={props.color} stroke={props.stroke}>
      <use xlinkHref={props.path} />
    </svg>
  );
}

export default BaseIcon;
