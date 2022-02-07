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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M3 7.28805V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 6.99152 20.9999 6.98305 20.9998 6.9746L12.2229 12.2775C11.887 12.5014 11.4494 12.5014 11.1135 12.2775L3 7.28805ZM19.9749 5.25328C19.6865 5.09196 19.354 5 19 5H5C4.53993 5 4.11614 5.15534 3.77823 5.41644L11.6682 10.2436L19.9749 5.25328Z'
        fill='currentColor'
      /></svg> );
};
