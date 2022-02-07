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
      viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M11.9999 12.667H19.0087V19.6757L11.9999 18.6244V12.667ZM11.9999 6.70954L18.8685 5.68159L18.9931 5.66602L19.0087 11.8882H11.9999V6.70954ZM4.99121 17.5731V12.667H11.2212V18.5076L4.99121 17.5731ZM4.99121 7.76085L11.2212 6.82635V11.8882H4.99121V7.76085Z'
        fill='currentColor'
      /></svg> );
};
