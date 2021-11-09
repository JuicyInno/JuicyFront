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
        d='M11.9999 12.0009H19.0087V19.0097L11.9999 17.9584V12.0009ZM11.9999 6.04352L18.8685 5.01557L18.9931 5L19.0087 11.2222H11.9999V6.04352ZM4.99121 16.907V12.0009H11.2212V17.8415L4.99121 16.907ZM4.99121 7.09483L11.2212 6.16033V11.2222H4.99121V7.09483Z'
        fill='currentColor'
      />
    </svg>
  );
};
