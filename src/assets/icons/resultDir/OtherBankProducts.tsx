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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9.64307 14.2369C9.64307 13.0015 10.6446 12 11.88 12H16.491C17.1164 12 17.7133 12.2619 18.1369 12.7221L19.6782 14.3967H28.657C29.8924 14.3967 30.8939 15.3982 30.8939 16.6336V25.4216C30.8939 26.657 29.8924 27.6585 28.657 27.6585H11.88C10.6446 27.6585 9.64307 26.657 9.64307 25.4216V14.2369Z'
        fill='currentColor'
      /></svg> );
};
