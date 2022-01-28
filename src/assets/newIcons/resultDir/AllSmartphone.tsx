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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M9.45654 2.92871C8.07583 2.92871 6.95654 4.048 6.95654 5.42871V18.5716C6.95654 19.9523 8.07583 21.0716 9.45654 21.0716H15.5C16.8807 21.0716 18 19.9523 18 18.5716V5.42871C18 4.048 16.8807 2.92871 15.5 2.92871H9.45654ZM12.4971 17.9998C13.3296 17.9998 14.0001 17.3296 14.0001 16.5005C14.0001 15.67 13.3296 14.9998 12.4971 14.9998C11.6676 14.9998 11.0001 15.67 11.0001 16.5005C11.0001 17.3296 11.6676 17.9998 12.4971 17.9998Z' fill='#8A96A8'/></svg> );
};
