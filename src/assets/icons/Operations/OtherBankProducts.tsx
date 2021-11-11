import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
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
        d='M9.64258 14.2369C9.64258 13.0015 10.6441 12 11.8795 12H16.4905C17.116 12 17.7129 12.2619 18.1364 12.7221L19.6777 14.3967H28.6565C29.8919 14.3967 30.8934 15.3982 30.8934 16.6336V25.4216C30.8934 26.657 29.8919 27.6585 28.6565 27.6585H11.8795C10.6441 27.6585 9.64258 26.657 9.64258 25.4216V14.2369Z'
        fill='currentColor'
      />
    </svg>
  );
};
