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
        d='M17.8188 30.7696L12.1937 21.1368C9.69353 16.8553 11.254 11.3536 15.6298 9.02228C18.1428 7.68344 21.1644 7.66041 23.7036 8.94881C28.301 11.2815 29.9588 17.0554 27.264 21.4504L21.5255 30.8094C20.672 32.2014 18.6422 32.1796 17.8188 30.7696ZM20 19.9298C21.6569 19.9298 23 18.5867 23 16.9298C23 15.273 21.6569 13.9298 20 13.9298C18.3432 13.9298 17 15.273 17 16.9298C17 18.5867 18.3432 19.9298 20 19.9298Z'
        fill='currentColor'
      />
    </svg>
  );
};
