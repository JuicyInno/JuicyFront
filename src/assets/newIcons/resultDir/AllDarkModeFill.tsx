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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M10.5874 4.75145C10.9976 4.66827 11.2731 5.1339 11.0952 5.51278C10.7322 6.28588 10.5294 7.14905 10.5294 8.05956C10.5294 11.3732 13.2156 14.0594 16.5293 14.0594C17.172 14.0594 17.7911 13.9583 18.3715 13.7713C18.7699 13.6429 19.1969 13.9748 19.0623 14.3711C18.0724 17.2858 15.3128 19.3828 12.0637 19.3828C7.98268 19.3828 4.67432 16.0745 4.67432 11.9934C4.67432 8.41797 7.21368 5.43552 10.5874 4.75145Z' fill='#8A96A8'/></svg> );
};
