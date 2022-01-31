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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M12 11.5C12 10.1193 13.1193 9 14.5 9H26.5C27.8807 9 29 10.1193 29 11.5V27.5C29 28.8807 27.8807 30 26.5 30H14.5C13.1193 30 12 28.8807 12 27.5V11.5ZM15 13C15 12.4477 15.4477 12 16 12H25C25.5523 12 26 12.4477 26 13C26 13.5523 25.5523 14 25 14H16C15.4477 14 15 13.5523 15 13ZM16 16C15.4477 16 15 16.4477 15 17C15 17.5523 15.4477 18 16 18H22.75C23.3023 18 23.75 17.5523 23.75 17C23.75 16.4477 23.3023 16 22.75 16H16Z' fill='#8A96A8'/></svg> );
};
