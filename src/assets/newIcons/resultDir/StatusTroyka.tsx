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
      viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.07019 7.16077L4.5 6.84444C4.5 6.84444 6.1 4 10.9007 4C20.5 4 20.5 15.3778 20.5 15.3778V19C20.5 19.5523 20.0523 20 19.5 20H11.134C10.564 20 10.1092 19.5242 10.1351 18.9547L10.4264 12.5333L8.31047 13.346C7.91428 13.4982 7.6573 13.8839 7.66943 14.3081L7.6706 14.3492C7.6867 14.9125 7.23449 15.3778 6.67101 15.3778H5.5C4.94772 15.3778 4.5 14.9301 4.5 14.3778V14.0479C4.5 13.9865 4.50566 13.9252 4.51689 13.8648L5.56817 8.21825C5.64691 7.79534 5.44636 7.36946 5.07019 7.16077Z' fill='#8A96A8'/></svg> );
};
