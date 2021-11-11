import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
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
        d='M20 31C26.0751 31 31 26.0751 31 20C31 13.9249 26.0751 9 20 9C13.9249 9 9 13.9249 9 20C9 26.0751 13.9249 31 20 31ZM18.3 16.5C18.3 17.4941 17.4941 18.3 16.5 18.3C15.5058 18.3 14.7 17.4941 14.7 16.5C14.7 15.5058 15.5058 14.7 16.5 14.7C17.4941 14.7 18.3 15.5058 18.3 16.5ZM25.3 23.4999C25.3 24.4941 24.4941 25.3 23.5 25.3C22.5058 25.3 21.7 24.4941 21.7 23.4999C21.7 22.5058 22.5058 21.7 23.5 21.7C24.4941 21.7 25.3 22.5058 25.3 23.4999ZM24.2071 15.7929C24.5976 16.1834 24.5976 16.8166 24.2071 17.2071L17.2071 24.2071C16.8166 24.5976 16.1834 24.5976 15.7929 24.2071C15.4024 23.8166 15.4024 23.1834 15.7929 22.7929L22.7929 15.7929C23.1834 15.4024 23.8166 15.4024 24.2071 15.7929Z'
        fill='currentColor'
      />
    </svg>
  );
};
