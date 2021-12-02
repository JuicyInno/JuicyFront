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
        d='M19.2603 16.0184L17.6238 14.3866C16.8137 13.5788 15.7149 13.125 14.5692 13.125C9.95092 13.125 7.63808 18.6926 10.9037 21.9488L18.586 29.609C19.3308 30.3517 20.5384 30.3517 21.2832 29.609L28.9655 21.9489C32.2311 18.6926 29.9182 13.125 25.3 13.125C24.1543 13.125 23.0555 13.5788 22.2454 14.3866L20.6089 16.0184C20.2365 16.3897 19.6327 16.3897 19.2603 16.0184Z'
        fill='currentColor'
      />
    </svg>
  );
};
