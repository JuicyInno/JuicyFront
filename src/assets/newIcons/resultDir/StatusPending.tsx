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
      viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21ZM11.3999 7.81854C11.3999 7.31144 11.811 6.90035 12.3181 6.90035C12.8252 6.90035 13.2363 7.31144 13.2363 7.81854V11.9547L16.1883 14.485C16.5734 14.8151 16.6179 15.3947 16.2879 15.7797C15.9579 16.1647 15.3783 16.2093 14.9933 15.8793L11.7205 13.0741C11.517 12.8997 11.3999 12.645 11.3999 12.377V7.81854Z' fill='#8A96A8'/></svg> );
};
