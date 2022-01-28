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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M15 3.69986C13.1 2.69986 10.8 2.69986 8.90005 3.79986C5.60005 5.59986 4.40005 9.69986 6.30005 12.8999L10.5 20.1999C11.1 21.2999 12.7 21.2999 13.3 20.1999L17.6 13.0999C19.7 9.79986 18.4 5.49986 15 3.69986ZM12 11.9999C10.7 11.9999 9.70005 10.9999 9.70005 9.69986C9.70005 8.39986 10.7 7.39986 12 7.39986C13.3 7.39986 14.3 8.39986 14.3 9.69986C14.3 10.9999 13.3 11.9999 12 11.9999Z' fill='#8A96A8'/></svg> );
};
