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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M31.5 14.5C31.5 13.1193 30.3807 12 29 12H12C10.6193 12 9.5 13.1193 9.5 14.5V25.5C9.5 26.8807 10.6193 28 12 28H29C30.3807 28 31.5 26.8807 31.5 25.5V14.5ZM28.827 16.0787C29.2571 15.7323 29.3251 15.1028 28.9787 14.6726C28.6323 14.2425 28.0028 14.1745 27.5726 14.5209L21.127 19.7111C20.7608 20.0059 20.2388 20.0059 19.8726 19.7111L13.427 14.5211C12.9968 14.1747 12.3673 14.2427 12.0209 14.6728C11.6745 15.103 11.7425 15.7325 12.1726 16.0789L18.6183 21.2689C19.7167 22.1533 21.2829 22.1533 22.3813 21.2689L28.827 16.0787Z' fill='#8A96A8'/></svg> );
};
