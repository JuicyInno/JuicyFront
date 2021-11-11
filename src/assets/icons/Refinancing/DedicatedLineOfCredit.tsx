import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={Number(size) + 1}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.5 12H29.5C30.8807 12 32 13.1193 32 14.5V25.5C32 26.8807 30.8807 28 29.5 28H11.5C10.1193 28 9 26.8807 9 25.5V14.5C9 13.1193 10.1193 12 11.5 12ZM24.2071 16.2929C24.5976 16.6834 24.5976 17.3166 24.2071 17.7071L18.2071 23.7071C17.8166 24.0976 17.1834 24.0976 16.7929 23.7071C16.4024 23.3166 16.4024 22.6834 16.7929 22.2929L22.7929 16.2929C23.1834 15.9024 23.8166 15.9024 24.2071 16.2929ZM18.7 17.5C18.7 18.3284 18.0284 19 17.2 19C16.3715 19 15.7 18.3284 15.7 17.5C15.7 16.6716 16.3715 16 17.2 16C18.0284 16 18.7 16.6716 18.7 17.5ZM25.3 22.5C25.3 23.3284 24.6285 24 23.8 24C22.9716 24 22.3 23.3284 22.3 22.5C22.3 21.6716 22.9716 21 23.8 21C24.6285 21 25.3 21.6716 25.3 22.5Z'
        fill='currentColor'
      />
    </svg>
  );
};
