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
        d='M17.6099 9.93375C17.2085 10.3132 16.5756 10.2954 16.1962 9.89411L12.9998 6.51327L12.9998 20C12.9998 20.5523 12.5521 21 11.9998 21C11.4475 21 10.9998 20.5523 10.9998 20L10.9998 6.51327L7.80334 9.89411C7.42392 10.2954 6.791 10.3132 6.38968 9.93375C5.98837 9.55432 5.97062 8.9214 6.35005 8.52009L11.2731 3.31299C11.462 3.1132 11.7248 3 11.9998 3C12.2747 3 12.5375 3.1132 12.7264 3.31299L17.6495 8.52009C18.0289 8.92141 18.0112 9.55432 17.6099 9.93375Z'
        fill='currentColor'
      />
    </svg>
  );
};
