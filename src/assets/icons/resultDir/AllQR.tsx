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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M10.875 3V10.875H3V4.125C3 3.50368 3.50368 3 4.125 3H10.875ZM5.8125 5.8125V8.0625H8.0625V5.8125H5.8125ZM13.125 3V10.875H21V4.125C21 3.50368 20.4963 3 19.875 3H13.125ZM18.1875 5.8125V8.0625H15.9375V5.8125H18.1875ZM10.875 13.125V21H4.125C3.50368 21 3 20.4963 3 19.875V13.125H10.875ZM5.8125 15.9375V18.1875H8.0625V15.9375H5.8125ZM13.125 13.125H15.375V15.375H13.125V13.125ZM17.625 15.375H15.375V17.625H17.625V18.75H13.125V21H17.625V18.75H18.75V21H21V16.5H17.625V15.375ZM17.625 15.375V13.125H21V15.375H17.625Z'
        fill='currentColor'
      /></svg> );
};
