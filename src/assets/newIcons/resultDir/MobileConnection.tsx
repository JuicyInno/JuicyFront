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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M15.5 9C14.1193 9 13 10.1193 13 11.5V29.5C13 30.8807 14.1193 32 15.5 32H24.5C25.8807 32 27 30.8807 27 29.5V11.5C27 10.1193 25.8807 9 24.5 9H15.5ZM18 11.2501C17.4477 11.2501 17 11.6978 17 12.2501C17 12.8023 17.4477 13.2501 18 13.2501H22C22.5523 13.2501 23 12.8023 23 12.2501C23 11.6978 22.5523 11.2501 22 11.2501H18Z' fill='#8A96A8'/></svg> );
};
