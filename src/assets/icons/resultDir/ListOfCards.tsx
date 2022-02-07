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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.5 15V13C13.5 11.8954 14.3954 11 15.5 11H30.5C31.6046 11 32.5 11.8954 32.5 13V21C32.5 22.1046 31.6046 23 30.5 23H28.5V17.8C28.5 16.2536 27.2464 15 25.7 15H13.5Z'
        fill='currentColor'
      /><path fillRule='evenodd' clipRule='evenodd' d='M8.5 19C8.5 17.8954 9.39543 17 10.5 17H24.5C25.6046 17 26.5 17.8954 26.5 19V27C26.5 28.1046 25.6046 29 24.5 29H10.5C9.39543 29 8.5 28.1046 8.5 27V19Z'
        fill='currentColor'
      /></svg> );
};
