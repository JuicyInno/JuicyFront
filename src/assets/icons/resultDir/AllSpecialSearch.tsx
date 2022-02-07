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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.7341 3.41816L14.2765 3.95902C14.3999 4.0821 14.6001 4.0821 14.7235 3.95902L15.2659 3.41816C15.5344 3.15042 15.8986 3 16.2784 3C17.8091 3 18.5757 4.84541 17.4933 5.92469L14.947 8.46367C14.7001 8.70983 14.2999 8.70983 14.053 8.46367L11.5067 5.92469C10.4243 4.8454 11.1909 3 12.7216 3C13.1014 3 13.4656 3.15042 13.7341 3.41816Z'
        fill='currentColor'
      /><path d='M16 11.0001C16 10.5925 15.9512 10.1962 15.8592 9.8169C15.9406 9.75531 16.0188 9.68746 16.0931 9.61336L17.4455 8.26491C17.8025 9.10518 18 10.0296 18 11.0001C18 12.4659 17.5495 13.8265 16.7794 14.9509L20.364 18.5355C20.7545 18.926 20.7545 19.5592 20.364 19.9497C19.9735 20.3402 19.3403 20.3402 18.9498 19.9497L15.4247 16.4246C14.2188 17.4094 12.6784 18.0001 11 18.0001C7.13401 18.0001 4 14.8661 4 11.0001C4 7.67752 6.31492 4.89559 9.4199 4.1792C9.30834 4.83658 9.3902 5.53126 9.70547 6.16933C7.57157 6.73971 6 8.68639 6 11.0001C6 13.7615 8.23858 16.0001 11 16.0001C13.7614 16.0001 16 13.7615 16 11.0001Z'
        fill='currentColor'
      /></svg> );
};
