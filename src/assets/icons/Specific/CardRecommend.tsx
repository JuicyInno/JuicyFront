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
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.4564 4.12432C17.7313 4.28603 17.9 4.58111 17.9 4.9V19.3C17.9 19.6189 17.7313 19.914 17.4564 20.0757C17.1816 20.2374 16.8417 20.2416 16.5629 20.0867L8.9 15.7H7.55V19.3C7.55 19.7971 7.14706 20.2 6.65 20.2C6.15294 20.2 5.75 19.7971 5.75 19.3V15.7H4.4C3.90294 15.7 3.5 15.2971 3.5 14.8V9.4C3.5 8.90294 3.90294 8.5 4.4 8.5H8.9L16.5629 4.11326C16.8417 3.95839 17.1816 3.9626 17.4564 4.12432Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.7 15.0936V9.3999C20.7642 9.90546 21.5 10.9902 21.5 12.2468C21.5 13.5033 20.7642 14.5881 19.7 15.0936Z'
        fill='currentColor'
      />
    </svg>
  );
};
