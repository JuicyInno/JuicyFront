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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.4792 5.04814C10.8391 4.70531 11.4087 4.71915 11.7516 5.07906L17.7532 11.3796C18.0843 11.7272 18.0843 12.2735 17.7532 12.6211L11.7516 18.9217C11.4087 19.2816 10.8391 19.2954 10.4792 18.9526C10.1192 18.6098 10.1054 18.0401 10.4482 17.6802L15.8585 12.0004L10.4482 6.32055C10.1054 5.96065 10.1192 5.39097 10.4792 5.04814ZM5.67916 5.04814C6.03906 4.70531 6.60874 4.71915 6.95157 5.07906L12.9532 11.3796C13.2843 11.7272 13.2843 12.2735 12.9532 12.6211L6.95157 18.9217C6.60874 19.2816 6.03906 19.2954 5.67916 18.9526C5.31925 18.6098 5.30541 18.0401 5.64824 17.6802L11.0585 12.0004L5.64824 6.32055C5.30541 5.96065 5.31925 5.39097 5.67916 5.04814Z'
        fill='currentColor'
      /></svg> );
};
