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
        d='M14.5 9.99988C13.1193 9.99988 12 11.1192 12 12.4999V28.4999C12 29.8806 13.1193 30.9999 14.5 30.9999H26.5C27.8807 30.9999 29 29.8806 29 28.4999V12.4999C29 11.1192 27.8807 9.99988 26.5 9.99988H14.5ZM15 13.9999C15 13.4476 15.4477 12.9999 16 12.9999H25C25.5523 12.9999 26 13.4476 26 13.9999C26 14.5522 25.5523 14.9999 25 14.9999H16C15.4477 14.9999 15 14.5522 15 13.9999ZM15 18C15 17.4477 15.4477 17 16 17H22.75C23.3023 17 23.75 17.4477 23.75 18C23.75 18.5523 23.3023 19 22.75 19H16C15.4477 19 15 18.5523 15 18ZM24.6875 28.1249C25.5504 28.1249 26.25 27.4253 26.25 26.5624C26.25 25.6994 25.5504 24.9999 24.6875 24.9999C23.8246 24.9999 23.125 25.6994 23.125 26.5624C23.125 27.4253 23.8246 28.1249 24.6875 28.1249Z'
        fill='currentColor'
      />
    </svg>
  );
};
