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
        d='M3 6C3 4.34315 4.34315 3 6 3H9.84848V5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14H21V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM15.5 5C14.9477 5 14.5 4.55228 14.5 4C14.5 3.44772 14.9477 3 15.5 3H20C20.5523 3 21 3.44772 21 4V8.5C21 9.05228 20.5523 9.5 20 9.5C19.4477 9.5 19 9.05228 19 8.5V6.41421L11.7071 13.7071L10.2929 12.2929L17.5858 5H15.5Z'
        fill='currentColor'
      />
    </svg>
  );
};
