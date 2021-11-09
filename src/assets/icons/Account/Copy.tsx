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
        d='M7 4C7 2.89543 7.89543 2 9 2H20C21.1046 2 22 2.89543 22 4V15C22 16.1046 21.1046 17 20 17H9C7.89543 17 7 16.1046 7 15V4ZM9.5 4C9.22386 4 9 4.22386 9 4.5V14.5C9 14.7761 9.22386 15 9.5 15H19.5C19.7761 15 20 14.7761 20 14.5V4.5C20 4.22386 19.7761 4 19.5 4H9.5Z'
        fill='currentColor'
      />
      <path
        d='M4 7H5V9H4.5C4.22386 9 4 9.22386 4 9.5V19.5C4 19.7761 4.22386 20 4.5 20H14.5C14.7761 20 15 19.7761 15 19.5V19H17V20C17 21.1046 16.1046 22 15 22H4C2.89543 22 2 21.1046 2 20V9C2 7.89543 2.89543 7 4 7Z'
        fill='currentColor'
      />
      <path
        d='M17 17V15H15V17H17Z'
        fill='currentColor'
      />
      <path
        d='M9 9H7V7H9V9Z'
        fill='currentColor'
      />
    </svg>
  );
};
