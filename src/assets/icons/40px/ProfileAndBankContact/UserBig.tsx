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
        d='M20.5002 6.25C17.3936 6.25 14.8752 8.76839 14.8752 11.875C14.8752 14.9816 17.3937 17.5 20.5003 17.5C23.6068 17.5 26.1252 14.9816 26.1252 11.875C26.1252 8.76839 23.6068 6.25 20.5002 6.25Z'
        fill='currentColor'
      />
      <path
        d='M30.6161 29.4971C30.9651 29.0774 31.1253 28.5304 31.0472 27.9902C30.3725 23.3201 25.8128 20 20.5004 20C15.1921 20 10.6551 23.3396 9.95839 27.9834C9.87674 28.5276 10.0374 29.0796 10.389 29.5029C12.6166 32.1842 16.4471 34 20.5006 34C24.5425 34 28.4017 32.1602 30.6161 29.4971Z'
        fill='currentColor'
      />
    </svg>
  );
};
