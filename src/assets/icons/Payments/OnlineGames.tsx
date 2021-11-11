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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M28.1313 14.1857C28.9154 13.5882 29.0589 12.4488 28.3236 11.7922C26.3786 10.0556 23.8126 9 21 9C14.9249 9 10 13.9249 10 20C10 26.0751 14.9249 31 21 31C23.8126 31 26.3786 29.9444 28.3236 28.2078C29.0589 27.5512 28.9154 26.4118 28.1313 25.8143L22.066 21.1931C21.2781 20.5928 21.2781 19.4072 22.066 18.8069L28.1313 14.1857ZM19.5 16C20.3284 16 21 15.3284 21 14.5C21 13.6716 20.3284 13 19.5 13C18.6716 13 18 13.6716 18 14.5C18 15.3284 18.6716 16 19.5 16Z'
        fill='currentColor'
      />
    </svg>
  );
};
