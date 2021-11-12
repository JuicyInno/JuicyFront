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
        d='M11.2496 13C11.2496 12.3096 11.8093 11.75 12.4996 11.75L29.4996 11.75C30.19 11.75 30.7496 12.3096 30.7496 13C30.7496 13.6904 30.19 14.25 29.4996 14.25L12.4996 14.25C11.8093 14.25 11.2496 13.6904 11.2496 13Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.0072 11.75C21.6976 11.75 22.2572 12.3096 22.2572 13V30.8199C22.2572 31.5103 21.6976 32.0699 21.0072 32.0699C20.3169 32.0699 19.7572 31.5103 19.7572 30.8199V13C19.7572 12.3096 20.3169 11.75 21.0072 11.75Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.788 31.1406C15.788 30.4503 16.3476 29.8906 17.038 29.8906H24.9471C25.6374 29.8906 26.1971 30.4503 26.1971 31.1406C26.1971 31.831 25.6374 32.3906 24.9471 32.3906H17.038C16.3476 32.3906 15.788 31.831 15.788 31.1406Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.5756 11.75C13.0867 11.753 13.5445 12.0669 13.7315 12.5426L17.4496 22H7.55701L11.4104 12.5289C11.603 12.0555 12.0645 11.747 12.5756 11.75ZM7.29297 24C7.47429 25.0309 8.20041 25.8226 9.00872 26.3278C9.96079 26.9228 11.1983 27.25 12.4996 27.25C13.801 27.25 15.0385 26.9228 15.9906 26.3278C16.7989 25.8226 17.525 25.0309 17.7063 24H7.29297Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M29.5756 11.75C30.0867 11.753 30.5445 12.0669 30.7315 12.5426L34.4496 22H24.557L28.4104 12.5289C28.603 12.0555 29.0645 11.747 29.5756 11.75ZM24.293 24C24.4743 25.0309 25.2004 25.8226 26.0087 26.3278C26.9608 26.9228 28.1983 27.25 29.4996 27.25C30.801 27.25 32.0385 26.9228 32.9906 26.3278C33.7989 25.8226 34.525 25.0309 34.7063 24H24.293Z'
        fill='currentColor'
      />
    </svg>
  );
};