import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={Number(size) + 1}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M30.5 13C30.5 11.6193 29.3807 10.5 28 10.5H13C11.6193 10.5 10.5 11.6193 10.5 13V27C10.5 28.3807 11.6193 29.5 13 29.5H28C29.3807 29.5 30.5 28.3807 30.5 27L30.5 13ZM14 27C13.4477 27 13 26.5523 13 26V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V26C15 26.5523 14.5523 27 14 27ZM28 20C28 20.9665 27.2165 21.75 26.25 21.75C25.2835 21.75 24.5 20.9665 24.5 20C24.5 19.0335 25.2835 18.25 26.25 18.25C27.2165 18.25 28 19.0335 28 20Z'
        fill='currentColor'
      />
    </svg>
  );
};
