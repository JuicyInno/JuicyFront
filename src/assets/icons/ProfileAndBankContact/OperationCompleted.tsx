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
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M32 20C32 26.3513 26.8513 31.5 20.5 31.5C14.1487 31.5 9 26.3513 9 20C9 13.6487 14.1487 8.5 20.5 8.5C26.8513 8.5 32 13.6487 32 20ZM26.7016 18.5124C27.0951 18.1249 27.1001 17.4917 26.7126 17.0982C26.3251 16.7047 25.6919 16.6998 25.2984 17.0872L19.4976 22.7988L15.6991 19.0848C15.3042 18.6987 14.6711 18.7058 14.285 19.1007C13.8989 19.4956 13.906 20.1287 14.3009 20.5148L18.8009 24.9148C19.1905 25.2958 19.8133 25.2947 20.2016 24.9124L26.7016 18.5124Z'
        fill='currentColor'
      />
    </svg>
  );
};
