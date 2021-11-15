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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12C21.5 16.9706 17.4706 21 12.5 21C7.52944 21 3.5 16.9706 3.5 12ZM12.5 6.375C9.3934 6.375 6.875 8.8934 6.875 12C6.875 15.1066 9.3934 17.625 12.5 17.625C15.6066 17.625 18.125 15.1066 18.125 12C18.125 8.8934 15.6066 6.375 12.5 6.375Z'
        fill='#E2E5E9'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.8125 4.6875C10.8125 3.75552 11.568 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12C21.5 16.9706 17.4706 21 12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 11.068 4.25552 10.3125 5.1875 10.3125C6.11948 10.3125 6.875 11.068 6.875 12C6.875 15.1066 9.3934 17.625 12.5 17.625C15.6066 17.625 18.125 15.1066 18.125 12C18.125 8.8934 15.6066 6.375 12.5 6.375C11.568 6.375 10.8125 5.61948 10.8125 4.6875Z'
        fill='#0D69F2'
      />
    </svg>
  );
};
