import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.5 16.5V12.5C16.5 11.1193 17.6193 10 19 10H27C28.3807 10 29.5 11.1193 29.5 12.5V16.5H16.5Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.5764 14H13.5C11.8431 14 10.5 15.3431 10.5 17V27.5C10.5 29.1569 11.8431 30.5 13.5 30.5H28.5C30.1569 30.5 31.5 29.1569 31.5 27.5V19.3C31.5 18.8582 31.1418 18.5 30.7 18.5H14C13.4477 18.5 13 18.0523 13 17.5C13 16.9477 13.4477 16.5 14 16.5H14.5764V14ZM28.5 24.5C28.5 25.3284 27.8284 26 27 26C26.1716 26 25.5 25.3284 25.5 24.5C25.5 23.6716 26.1716 23 27 23C27.8284 23 28.5 23.6716 28.5 24.5Z'
        fill='currentColor'
      />
    </svg>
  );
};
