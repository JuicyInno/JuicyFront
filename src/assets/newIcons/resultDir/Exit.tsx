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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.5 13.6979C13.5 11.6556 15.1556 9.99999 17.1979 10L21.7402 10C22.5257 10 23.1624 10.6368 23.1624 11.4223C23.1624 12.2078 22.5257 12.8446 21.7402 12.8446L17.1979 12.8446C16.7266 12.8446 16.3446 13.2266 16.3446 13.6979V26.1913C16.3446 26.6626 16.7266 27.0447 17.1979 27.0447H21.602C22.3875 27.0447 23.0243 27.6815 23.0243 28.467C23.0243 29.2525 22.3875 29.8892 21.602 29.8892H17.1979C15.1556 29.8892 13.5 28.2336 13.5 26.1913V13.6979Z' fill='#8A96A8'/><path d='M25.1242 21.3668L24.7112 21.7798C24.1558 22.3353 24.1558 23.2358 24.7113 23.7912C25.2667 24.3467 26.1672 24.3467 26.7227 23.7912L29.5634 20.9504C30.1189 20.395 30.1189 19.4945 29.5634 18.9391L26.7226 16.0983C26.1672 15.5428 25.2667 15.5428 24.7112 16.0983C24.1558 16.6537 24.1558 17.5542 24.7112 18.1097L25.1238 18.5223H20.6039C19.8184 18.5223 19.1816 19.1591 19.1816 19.9446C19.1816 20.7301 19.8184 21.3668 20.6039 21.3668H25.1242Z' fill='#8A96A8'/></svg> );
};
