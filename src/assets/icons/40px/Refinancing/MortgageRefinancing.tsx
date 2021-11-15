import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.5 19.2857V26.5C9.5 27.8807 10.6193 29 12 29H28C29.3807 29 30.5 27.8807 30.5 26.5V19.2857C30.5 18.4647 30.1635 17.6795 29.569 17.1133L22.069 9.97044C20.9103 8.86699 19.0897 8.86699 17.931 9.97044L10.431 17.1133C9.83649 17.6795 9.5 18.4647 9.5 19.2857ZM24.182 19.6819C24.5725 19.2914 24.5725 18.6582 24.182 18.2677C23.7915 17.8772 23.1583 17.8772 22.7678 18.2677L19.2322 21.8032L17.4645 20.0355C17.0739 19.6449 16.4408 19.6449 16.0503 20.0355C15.6597 20.426 15.6597 21.0592 16.0503 21.4497L18.2423 23.6417C18.789 24.1884 19.6754 24.1884 20.2222 23.6417L24.182 19.6819Z'
        fill='currentColor'
      />
    </svg>
  );
};
