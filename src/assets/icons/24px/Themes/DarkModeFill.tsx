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
        d='M11.0874 4.75121C11.4976 4.66803 11.7731 5.13366 11.5952 5.51254C11.2322 6.28563 11.0294 7.1488 11.0294 8.05932C11.0294 11.3729 13.7156 14.0592 17.0293 14.0592C17.672 14.0592 18.2911 13.9581 18.8715 13.771C19.2699 13.6426 19.6969 13.9745 19.5623 14.3708C18.5724 17.2856 15.8128 19.3826 12.5637 19.3826C8.48268 19.3826 5.17432 16.0742 5.17432 11.9931C5.17432 8.41773 7.71368 5.43527 11.0874 4.75121Z'
        fill='currentColor'
      />
    </svg>
  );
};
