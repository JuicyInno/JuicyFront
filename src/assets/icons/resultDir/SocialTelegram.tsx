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
      viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.6704 15.2531L10.3891 19.2086C10.7915 19.2086 10.9658 19.0358 11.1747 18.8282L13.0611 17.0254L16.9699 19.888C17.6868 20.2875 18.1918 20.0771 18.3852 19.2285L20.9509 7.206L20.9516 7.20529C21.179 6.14557 20.5684 5.73117 19.87 5.99115L4.78876 11.7651C3.7595 12.1646 3.77508 12.7384 4.61379 12.9983L8.46945 14.1976L17.4254 8.5937C17.8469 8.3146 18.2301 8.46903 17.9149 8.74812L10.6704 15.2531Z'
        fill='currentColor'
      /></svg> );
};
