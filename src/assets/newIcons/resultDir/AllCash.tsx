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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M4.56522 7C3.70077 7 3 7.70077 3 8.56522V15.6087C3 16.4731 3.70077 17.1739 4.56522 17.1739H19.4348C20.2992 17.1739 21 16.4731 21 15.6087V8.56522C21 7.70077 20.2992 7 19.4348 7H4.56522ZM12 14.0431C13.0806 14.0431 13.9566 13.1672 13.9566 12.0866C13.9566 11.006 13.0806 10.1301 12 10.1301C10.9195 10.1301 10.0435 11.006 10.0435 12.0866C10.0435 13.1672 10.9195 14.0431 12 14.0431Z' fill='#8A96A8'/></svg> );
};
