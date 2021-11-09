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
        d='M11.3217 8.2652C11.7048 7.9116 12.2952 7.9116 12.6783 8.2652L19.1783 14.2652C19.5841 14.6398 19.6094 15.2725 19.2348 15.6783C18.8602 16.0841 18.2275 16.1094 17.8217 15.7348L12 10.3609L6.17829 15.7348C5.77246 16.1094 5.13981 16.0841 4.7652 15.6783C4.3906 15.2725 4.4159 14.6398 4.82172 14.2652L11.3217 8.2652Z'
        fill='currentColor'
      />
    </svg>
  );
};
