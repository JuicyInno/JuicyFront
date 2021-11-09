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
        d='M19.0709 9.72664C19.0709 13.4417 16.0593 16.4533 12.3443 16.4533C8.62927 16.4533 5.61765 13.4417 5.61765 9.72664C5.61765 6.01162 8.62927 3 12.3443 3C16.0593 3 19.0709 6.01162 19.0709 9.72664ZM4.5 18.8824C3.94772 18.8824 3.5 19.3564 3.5 19.9412C3.5 20.5259 3.94772 21 4.5 21H20.5C21.0523 21 21.5 20.5259 21.5 19.9412C21.5 19.3564 21.0523 18.8824 20.5 18.8824H4.5Z'
        fill='currentColor'
      />
    </svg>
  );
};
