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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M28.5 16C28.5 20.0103 25.5492 23.3315 21.7003 23.9106V30.8001C21.7003 31.4628 21.163 32.0001 20.5003 32.0001C19.8376 32.0001 19.3003 31.4628 19.3003 30.8001V23.9106C15.4511 23.3318 12.5 20.0105 12.5 16C12.5 11.5817 16.0817 8 20.5 8C24.9183 8 28.5 11.5817 28.5 16ZM24.5 17.2003V14.8003H16.5V17.2003H24.5Z'
        fill='currentColor'
      /></svg> );
};
