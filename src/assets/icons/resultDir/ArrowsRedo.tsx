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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M16.2929 4.29289C15.9024 4.68342 15.9024 5.31658 16.2929 5.70711L18.5858 8L16.2929 10.2929C15.9024 10.6834 15.9024 11.3166 16.2929 11.7071C16.6834 12.0976 17.3166 12.0976 17.7071 11.7071L20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L17.7071 4.29289C17.3166 3.90237 16.6834 3.90237 16.2929 4.29289Z'
        fill='currentColor'
      /><path fillRule='evenodd' clipRule='evenodd' d='M21 8C21 7.44772 20.5523 7 20 7H11C7.21742 7 4 9.82957 4 13.5C4 17.1704 7.21742 20 11 20H16C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18H11C8.15458 18 6 15.9056 6 13.5C6 11.0944 8.15458 9 11 9H20C20.5523 9 21 8.55228 21 8Z'
        fill='currentColor'
      /></svg> );
};
