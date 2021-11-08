import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '24';
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='5.3' cy='12.0002' r='1.8' fill='currentColor'/>
      <circle cx='12.5' cy='12.0002' r='1.8' fill='currentColor'/>
      <circle cx='19.6999' cy='12.0002' r='1.8' fill='currentColor'/>
    </svg>
  );
};
