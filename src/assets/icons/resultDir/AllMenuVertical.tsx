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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.0002 6.6C11.0061 6.6 10.2002 5.79411 10.2002 4.8C10.2002 3.80589 11.0061 3 12.0002 3C12.9943 3 13.8002 3.80589 13.8002 4.8C13.8002 5.79411 12.9943 6.6 12.0002 6.6Z'
        fill='currentColor'
      /><path d='M12.0002 13.8C11.0061 13.8 10.2002 12.9941 10.2002 12C10.2002 11.0059 11.0061 10.2 12.0002 10.2C12.9943 10.2 13.8002 11.0059 13.8002 12C13.8002 12.9941 12.9943 13.8 12.0002 13.8Z'
        fill='currentColor'
      /><path d='M12.0002 21C11.0061 21 10.2002 20.1941 10.2002 19.2C10.2002 18.2059 11.0061 17.4 12.0002 17.4C12.9943 17.4 13.8002 18.2059 13.8002 19.2C13.8002 20.1941 12.9943 21 12.0002 21Z'
        fill='currentColor'
      /></svg> );
};
