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
        d='M9.45654 2.92883C8.07583 2.92883 6.95654 4.04812 6.95654 5.42883V18.5717C6.95654 19.9524 8.07583 21.0717 9.45654 21.0717H15.5C16.8807 21.0717 18 19.9524 18 18.5717V5.42883C18 4.04812 16.8807 2.92883 15.5 2.92883H9.45654ZM12.4971 17.9999C13.3296 17.9999 14.0001 17.3297 14.0001 16.5007C14.0001 15.6701 13.3296 14.9999 12.4971 14.9999C11.6676 14.9999 11.0001 15.6701 11.0001 16.5007C11.0001 17.3297 11.6676 17.9999 12.4971 17.9999Z'
        fill='currentColor'
      />
    </svg>
  );
};
