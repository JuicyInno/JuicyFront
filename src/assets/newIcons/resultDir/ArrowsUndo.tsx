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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M8.70711 4.29289C9.09763 4.68342 9.09763 5.31658 8.70711 5.70711L7.41421 7H14C17.7826 7 21 9.82957 21 13.5C21 17.1704 17.7826 20 14 20H9C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18H14C16.8454 18 19 15.9056 19 13.5C19 11.0944 16.8454 9 14 9H7.41421L8.70711 10.2929C9.09763 10.6834 9.09763 11.3166 8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289L7.29289 4.29289C7.68342 3.90237 8.31658 3.90237 8.70711 4.29289Z' fill='#8A96A8'/></svg> );
};
