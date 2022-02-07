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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M9.72862 13.1888C9.61002 12.5721 10.0826 12 10.7106 12H31.2874C33.0617 12 34.5 13.4383 34.5 15.2126C34.5 16.5684 33.6489 17.7783 32.3728 18.2363L29.0729 19.4209L28.2041 23.9388C28.1135 24.4097 27.7015 24.75 27.2221 24.75H12.7779C12.2985 24.75 11.8865 24.4097 11.7959 23.9388L9.72862 13.1888ZM29.5118 17.1384L30.1154 14H31.2874C31.9571 14 32.5 14.5429 32.5 15.2126C32.5 15.7244 32.1787 16.1811 31.6971 16.354L29.5118 17.1384Z'
        fill='currentColor'
      /><path d='M32.5 26.5H7.5V27C7.5 28.1046 8.39543 29 9.5 29H30.5C31.6046 29 32.5 28.1046 32.5 27V26.5Z'
        fill='currentColor'
      /></svg> );
};
