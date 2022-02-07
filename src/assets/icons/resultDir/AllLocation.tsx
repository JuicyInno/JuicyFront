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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19.6357 3.06731C20.4418 2.76156 21.2311 3.55089 20.9254 4.35696L14.4807 21.3473C14.1493 22.2212 12.9068 22.2032 12.6008 21.32L10.0462 13.9465L2.67264 11.3918C1.7895 11.0859 1.77146 9.84341 2.64535 9.51193L19.6357 3.06731Z'
        fill='currentColor'
      /></svg> );
};
