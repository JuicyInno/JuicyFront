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
      viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M10.2398 20.6832V13.1776H8.39941V10.473H10.2398V8.16052C10.1814 7.2014 10.5447 6.26459 11.2345 5.59559C11.9242 4.9266 12.8717 4.5921 13.8286 4.67977C14.417 4.67799 15.0049 4.71273 15.589 4.78379L15.5297 7.31233C15.5297 7.31233 14.7656 7.30433 13.9294 7.30433C13.0268 7.30433 12.882 7.75243 12.882 8.49659V10.473H15.601L15.4825 13.1776H12.8836V20.6832H10.2398Z'
        fill='currentColor'
      /></svg> );
};
