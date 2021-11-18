import React from 'react';
import { IStatusIconProps } from './types';
import { statusIconSize } from './helpers';
/* eslint-disable max-len */

export default (props: IStatusIconProps) => {
  const size = props.size ? statusIconSize[props.size] : '20';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM4.75001 13.4999V9.96421C4.75001 9.34844 5.00238 8.75957 5.44829 8.3349L9.13794 4.82094C9.6207 4.36117 10.3793 4.36117 10.8621 4.82094L14.5517 8.3349C14.9976 8.75957 15.25 9.34844 15.25 9.96421V13.4999C15.25 14.0522 14.8023 14.4999 14.25 14.4999H5.75001C5.19773 14.4999 4.75001 14.0522 4.75001 13.4999ZM8.75001 9.62492C8.75001 9.41781 8.9179 9.24992 9.12501 9.24992H10.875C11.0821 9.24992 11.25 9.41781 11.25 9.62492V11.3749C11.25 11.582 11.0821 11.7499 10.875 11.7499H9.12501C8.9179 11.7499 8.75001 11.582 8.75001 11.3749V9.62492Z'
        fill='#0ABBFB'
      />
    </svg>
  );
};
