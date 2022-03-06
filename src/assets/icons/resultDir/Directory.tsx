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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M15.3444 8.88867H24.6567C28.0889 8.88867 30 10.8664 30 14.2553V25.7331C30 29.1776 28.0889 31.1109 24.6567 31.1109H15.3444C11.9667 31.1109 10 29.1776 10 25.7331V14.2553C10 10.8664 11.9667 8.88867 15.3444 8.88867ZM15.6444 14.0664V14.0553H18.9655C19.4444 14.0553 19.8333 14.4442 19.8333 14.9209C19.8333 15.4109 19.4444 15.7998 18.9655 15.7998H15.6444C15.1655 15.7998 14.7778 15.4109 14.7778 14.9331C14.7778 14.4553 15.1655 14.0664 15.6444 14.0664ZM15.6444 20.822H24.3555C24.8333 20.822 25.2222 20.4331 25.2222 19.9553C25.2222 19.4776 24.8333 19.0876 24.3555 19.0876H15.6444C15.1655 19.0876 14.7778 19.4776 14.7778 19.9553C14.7778 20.4331 15.1655 20.822 15.6444 20.822ZM15.6444 25.8998H24.3555C24.7989 25.8553 25.1333 25.4764 25.1333 25.0331C25.1333 24.5776 24.7989 24.1998 24.3555 24.1553H15.6444C15.3111 24.122 14.9889 24.2776 14.8111 24.5665C14.6333 24.8442 14.6333 25.2109 14.8111 25.4998C14.9889 25.7776 15.3111 25.9442 15.6444 25.8998Z'
        fill='currentColor'
      /></svg> );
};