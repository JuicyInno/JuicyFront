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
        d='M14.6783 4.7652C15.0841 5.13981 15.1094 5.77246 14.7348 6.17829L9.36091 12L14.7348 17.8217C15.1094 18.2275 15.0841 18.8602 14.6783 19.2348C14.2725 19.6094 13.6398 19.5841 13.2652 19.1783L7.2652 12.6783C6.9116 12.2952 6.9116 11.7048 7.2652 11.3217L13.2652 4.82172C13.6398 4.4159 14.2725 4.3906 14.6783 4.7652Z'
        fill='currentColor'
      />
    </svg>
  );
};
