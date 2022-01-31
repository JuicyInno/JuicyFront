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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M6.6 12.0002C6.6 12.9943 5.79411 13.8002 4.8 13.8002C3.80589 13.8002 3 12.9943 3 12.0002C3 11.0061 3.80589 10.2002 4.8 10.2002C5.79411 10.2002 6.6 11.0061 6.6 12.0002Z' fill='#8A96A8'/><path d='M13.8 12.0002C13.8 12.9943 12.9941 13.8002 12 13.8002C11.0059 13.8002 10.2 12.9943 10.2 12.0002C10.2 11.0061 11.0059 10.2002 12 10.2002C12.9941 10.2002 13.8 11.0061 13.8 12.0002Z' fill='#8A96A8'/><path d='M21 12.0002C21 12.9943 20.1941 13.8002 19.2 13.8002C18.2059 13.8002 17.4 12.9943 17.4 12.0002C17.4 11.0061 18.2059 10.2002 19.2 10.2002C20.1941 10.2002 21 11.0061 21 12.0002Z' fill='#8A96A8'/></svg> );
};
