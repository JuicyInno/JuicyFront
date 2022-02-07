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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.9564 4.12432C17.2313 4.28603 17.4 4.58111 17.4 4.9V19.3C17.4 19.6189 17.2313 19.914 16.9564 20.0757C16.6816 20.2374 16.3417 20.2416 16.0629 20.0867L8.4 15.7H7.05V19.3C7.05 19.7971 6.64706 20.2 6.15 20.2C5.65294 20.2 5.25 19.7971 5.25 19.3V15.7H3.9C3.40294 15.7 3 15.2971 3 14.8V9.4C3 8.90294 3.40294 8.5 3.9 8.5H8.4L16.0629 4.11326C16.3417 3.95839 16.6816 3.9626 16.9564 4.12432Z'
        fill='currentColor'
      /><path d='M19.2 15.0936V9.3999C20.2642 9.90546 21 10.9902 21 12.2468C21 13.5033 20.2642 14.5881 19.2 15.0936Z'
        fill='currentColor'
      /></svg> );
};
