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
        d='M11.5 16C14.2614 16 16.5 13.7614 16.5 11C16.5 8.23858 14.2614 6 11.5 6C8.73858 6 6.5 8.23858 6.5 11C6.5 13.7614 8.73858 16 11.5 16ZM11.5 18C15.366 18 18.5 14.866 18.5 11C18.5 7.13401 15.366 4 11.5 4C7.63401 4 4.5 7.13401 4.5 11C4.5 14.866 7.63401 18 11.5 18Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.2072 14.2929C15.5977 13.9024 16.2309 13.9024 16.6214 14.2929L20.8641 18.5356C21.2546 18.9261 21.2546 19.5593 20.8641 19.9498C20.4735 20.3403 19.8404 20.3403 19.4498 19.9498L15.2072 15.7071C14.8167 15.3166 14.8167 14.6834 15.2072 14.2929Z'
        fill='currentColor'
      />
    </svg>
  );
};
