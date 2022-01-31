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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M3 6C3 4.34315 4.34315 3 6 3H12.5V5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H12.5V21H6C4.34315 21 3 19.6569 3 18V6ZM16.3012 8.78472C16.6962 8.39878 17.3294 8.40616 17.7153 8.80121L20.5793 11.7327C20.7698 11.9277 20.8724 12.1921 20.8634 12.4645C20.8544 12.737 20.7346 12.994 20.5316 13.176L17.6677 15.7445C17.2565 16.1132 16.6243 16.0788 16.2555 15.6677C15.8868 15.2565 15.9212 14.6243 16.3323 14.2556L17.2498 13.4327L8.43231 13.4328L8.43231 11.4328L17.4902 11.4327L16.2847 10.1988C15.8988 9.80379 15.9061 9.17067 16.3012 8.78472Z' fill='#8A96A8'/></svg> );
};
