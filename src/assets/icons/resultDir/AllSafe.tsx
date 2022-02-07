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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 4H6.07005C6.02485 4.18052 6 4.37733 6 4.58333V20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z'
        fill='currentColor'
      /><path fillRule='evenodd' clipRule='evenodd' d='M8 20V4.58333C8 4.37733 7.97515 4.18052 7.92995 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H8ZM18.4718 12.2359C18.4718 12.9184 17.9184 13.4718 17.2359 13.4718C16.5533 13.4718 16 12.9184 16 12.2359C16 11.5533 16.5533 11 17.2359 11C17.9184 11 18.4718 11.5533 18.4718 12.2359Z'
        fill='currentColor'
      /></svg> );
};
