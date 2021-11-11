import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '24';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='12.5' cy='4.8' r='1.8' transform='rotate(90 12.5 4.8)' fill='currentColor'/>
      <circle cx='12.5' cy='12' r='1.8' transform='rotate(90 12.5 12)' fill='currentColor'/>
      <circle cx='12.5' cy='19.2' r='1.8' transform='rotate(90 12.5 19.2)' fill='currentColor'/>
    </svg>
  );
};
