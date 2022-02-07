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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M20.9999 12C20.9999 16.9706 16.9705 21 12 21C7.02942 21 3 16.9706 3 12C3 7.02944 7.02942 3 12 3C16.9705 3 20.9999 7.02944 20.9999 12ZM11.9768 6.99982C12.5163 6.99982 12.9536 7.43715 12.9536 7.97662V13.4467C12.9536 13.9862 12.5163 14.4235 11.9768 14.4235C11.4373 14.4235 11 13.9862 11 13.4467V7.97662C11 7.43715 11.4373 6.99982 11.9768 6.99982ZM11.9773 17.7444C12.5167 17.7444 12.954 17.3071 12.954 16.7676C12.954 16.2281 12.5167 15.7908 11.9773 15.7908C11.4378 15.7908 11.0005 16.2281 11.0005 16.7676C11.0005 17.3071 11.4378 17.7444 11.9773 17.7444Z' fill='#FF8C19'/></svg> );
};
