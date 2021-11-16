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
      <path
        d='M17 9.5L19.864 12.4315L17 15'
        stroke='currentColor' strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.43246 12.4328L19.0001 12.4327'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='square'
      />
      <path
        d='M11.5 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H11.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='square'
        strokeLinejoin='round'
      />
    </svg>

  );
};
