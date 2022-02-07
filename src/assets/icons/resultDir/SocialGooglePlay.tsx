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
      viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M20.0739 13.2038C19.9572 13.266 18.7518 13.8882 17.1342 14.7281L15.0033 12.7061L17.1653 10.6296C18.6896 11.4151 19.8484 12.0217 20.0739 12.1383C20.8205 12.5272 20.4394 13.0094 20.0739 13.2038ZM7.57641 5.66797C7.60881 5.67758 7.64009 5.69062 7.66973 5.70685C8.12857 5.94016 15.0422 9.53309 16.5354 10.303L14.5134 12.2394L7.57641 5.66797ZM6.75984 19.6742C6.57453 19.481 6.48107 19.2176 6.5032 18.9509V6.4301C6.48461 6.19285 6.56643 5.95868 6.72873 5.78462L14.0312 12.7061L6.75984 19.6742ZM16.5121 15.0547C13.2535 16.7501 8.82071 19.0598 7.83305 19.5731L14.5134 13.1649L16.5121 15.0547Z'
        fill='currentColor'
      /></svg> );
};
