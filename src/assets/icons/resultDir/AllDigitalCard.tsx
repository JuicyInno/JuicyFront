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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M18.1579 5H21V7.8421H18.1579V5Z'
        fill='currentColor'
      /><path d='M5 5.94737H15.3158V8.73691L3 8.73692V7.94737C3 6.8428 3.89543 5.94737 5 5.94737Z'
        fill='currentColor'
      /><path fillRule='evenodd' clipRule='evenodd' d='M20.0526 10.7369L3 10.7369V17.2105C3 18.3151 3.89543 19.2105 5 19.2105H18.0526C19.1572 19.2105 20.0526 18.3151 20.0526 17.2105V10.7369ZM6.10526 15.5001C5.55298 15.5001 5.10526 15.9478 5.10526 16.5001C5.10526 17.0524 5.55298 17.5001 6.10526 17.5001H8C8.55228 17.5001 9 17.0524 9 16.5001C9 15.9478 8.55228 15.5001 8 15.5001H6.10526Z'
        fill='currentColor'
      /></svg> );
};
