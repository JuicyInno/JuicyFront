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
        d='M10.5482 7.08342C10.5482 7.52273 10.1921 7.87887 9.7528 7.87887C9.31349 7.87887 8.95736 7.52273 8.95736 7.08342C8.95736 6.64411 9.31349 6.28798 9.7528 6.28798C10.1921 6.28798 10.5482 6.64411 10.5482 7.08342Z'
        fill='#E052BD'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM14.4321 5.64737C14.822 5.99555 14.7459 6.59978 14.3301 6.9166L11.1137 9.3672C10.6959 9.68554 10.6959 10.3143 11.1137 10.6326L14.3301 13.0832C14.7459 13.4001 14.822 14.0043 14.4321 14.3525C13.4007 15.2734 12.0399 15.8332 10.5484 15.8332C7.3268 15.8332 4.71517 13.2215 4.71517 9.99992C4.71517 6.7783 7.3268 4.16667 10.5484 4.16667C12.0399 4.16667 13.4007 4.72645 14.4321 5.64737Z'
        fill='#E052BD'
      />
    </svg>
  );
};
