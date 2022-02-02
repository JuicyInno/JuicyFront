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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11.7501 4.75C12.4404 4.75 13.0001 5.30964 13.0001 6V10.5735L16.7449 5.50696C17.1553 4.9518 17.938 4.8344 18.4931 5.24474C19.0483 5.65509 19.1657 6.43779 18.7554 6.99295L15.0544 12L18.7552 17.007C19.1656 17.5621 19.0481 18.3448 18.493 18.7552C17.9378 19.1655 17.1551 19.0481 16.7448 18.4929L13.0001 13.4266V18C13.0001 18.6904 12.4404 19.25 11.7501 19.25C11.0597 19.25 10.5001 18.6904 10.5001 18V13.3575L6.2138 18.5461C5.77413 19.0784 4.98624 19.1534 4.454 18.7137C3.92176 18.2741 3.84673 17.4862 4.2864 16.9539L8.37875 12L4.28634 7.04614C3.84666 6.51391 3.92169 5.72602 4.45393 5.28634C4.98616 4.84666 5.77405 4.92169 6.21373 5.45393L10.5001 10.6426V6C10.5001 5.30964 11.0597 4.75 11.7501 4.75Z' fill='#8A96A8'/></svg> );
};