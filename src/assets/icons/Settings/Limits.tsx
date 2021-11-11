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
        d='M28.5 16C28.5 20.0104 25.5491 23.3315 21.7002 23.9106V30.7999C21.7002 31.4627 21.1629 31.9999 20.5002 31.9999C19.8374 31.9999 19.3002 31.4627 19.3002 30.7999V23.9106C15.4511 23.3317 12.5 20.0105 12.5 16C12.5 11.5817 16.0817 8 20.5 8C24.9183 8 28.5 11.5817 28.5 16ZM24.5002 14.8002H16.5002V17.2002H24.5002V14.8002Z'
        fill='currentColor'
      />
    </svg>
  );
};
