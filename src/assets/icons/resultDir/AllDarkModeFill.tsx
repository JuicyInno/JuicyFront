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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M10.5874 4.75127C10.9976 4.66809 11.2731 5.13372 11.0952 5.5126C10.7322 6.28569 10.5294 7.14886 10.5294 8.05938C10.5294 11.373 13.2156 14.0592 16.5293 14.0592C17.172 14.0592 17.7911 13.9582 18.3715 13.7711C18.7699 13.6427 19.1969 13.9746 19.0623 14.3709C18.0724 17.2856 15.3128 19.3826 12.0637 19.3826C7.98268 19.3826 4.67432 16.0743 4.67432 11.9932C4.67432 8.41779 7.21368 5.43534 10.5874 4.75127Z'
        fill='currentColor'
      /></svg> );
};
