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
        d='M14 9C12.6193 9 11.5 10.1193 11.5 11.5V27.5C11.5 28.8807 12.6193 30 14 30H26C27.3807 30 28.5 28.8807 28.5 27.5V11.5C28.5 10.1193 27.3807 9 26 9H14ZM15.5 12C14.9477 12 14.5 12.4477 14.5 13C14.5 13.5523 14.9477 14 15.5 14H24.5C25.0523 14 25.5 13.5523 25.5 13C25.5 12.4477 25.0523 12 24.5 12H15.5ZM14.5 17C14.5 16.4477 14.9477 16 15.5 16H22.25C22.8023 16 23.25 16.4477 23.25 17C23.25 17.5523 22.8023 18 22.25 18H15.5C14.9477 18 14.5 17.5523 14.5 17ZM24.1875 27.125C25.0504 27.125 25.75 26.4254 25.75 25.5625C25.75 24.6996 25.0504 24 24.1875 24C23.3246 24 22.625 24.6996 22.625 25.5625C22.625 26.4254 23.3246 27.125 24.1875 27.125Z'
        fill='currentColor'
      />
    </svg>
  );
};
