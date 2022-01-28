import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M8.32172 4.7652C7.9159 5.13981 7.8906 5.77246 8.2652 6.17829L13.6391 12L8.2652 17.8217C7.8906 18.2275 7.9159 18.8602 8.32172 19.2348C8.72755 19.6094 9.3602 19.5841 9.73481 19.1783L15.7348 12.6783C16.0884 12.2952 16.0884 11.7048 15.7348 11.3217L9.73481 4.82172C9.3602 4.4159 8.72755 4.3906 8.32172 4.7652Z' fill='#8A96A8'/></svg> );
};
