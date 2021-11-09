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
        d='M4.7652 8.32172C5.1398 7.9159 5.77246 7.89059 6.17828 8.2652L12 13.6391L17.8217 8.2652C18.2275 7.89059 18.8602 7.9159 19.2348 8.32172C19.6094 8.72754 19.5841 9.3602 19.1783 9.7348L12.6783 15.7348C12.2952 16.0884 11.7048 16.0884 11.3217 15.7348L4.82172 9.7348C4.4159 9.3602 4.3906 8.72754 4.7652 8.32172Z'
        fill='currentColor'
      />
    </svg>
  );
};
