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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16 4C16.5523 4 17 4.44772 17 5V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V12.2263L12.6245 12.8394C9.77612 13.5744 7 11.4238 7 8.48211V5C7 4.44772 7.44772 4 8 4C8.55228 4 9 4.44772 9 5V8.48211C9 10.1164 10.5423 11.3112 12.1247 10.9028L15 10.1608V5C15 4.44772 15.4477 4 16 4ZM6 19C6 18.4477 6.44772 18 7 18H17C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19Z' fill='#8A96A8'/></svg> );
};
