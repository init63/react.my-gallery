import React from 'react';
import IconsSVG from './icons.svg';

function Icons({name, width, height, className}) {
  return (
    <svg className={className} width={width} height={height}>
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  );
}

export default Icons;
