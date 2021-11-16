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
        d='M19.79 15.71L15.21 20.29C14.82 20.68 14.18 20.68 13.79 20.29C13.4 19.9 13.4 19.26 13.79 18.87L16.67 16H6.5C5.95 16 5.5 15.55 5.5 15V5C5.5 4.45 5.95 4 6.5 4C7.05 4 7.5 4.45 7.5 5V14H16.67L13.79 11.13C13.4 10.74 13.4 10.1 13.79 9.71C14.18 9.32 14.82 9.32 15.21 9.71L19.79 14.29C20.18 14.68 20.18 15.32 19.79 15.71Z'
        fill='currentColor'
      />
    </svg>
  );
};
