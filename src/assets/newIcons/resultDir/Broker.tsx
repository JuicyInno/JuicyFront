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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M29 12H11C9.61929 12 8.5 13.1193 8.5 14.5V25.5C8.5 26.8807 9.61929 28 11 28H29C30.3807 28 31.5 26.8807 31.5 25.5V14.5C31.5 13.1193 30.3807 12 29 12ZM26.8124 16.2929C26.9901 16.4706 27.0869 16.6986 27.1029 16.9311C27.1116 17.0574 27.0964 17.185 27.0573 17.3067L26.1552 20.3137C26.0541 20.6508 25.7831 20.91 25.4418 20.996C25.1005 21.082 24.7391 20.9823 24.4903 20.7334L24.1381 20.3813L21.0624 23.4571C20.6718 23.8476 20.0387 23.8476 19.6482 23.4571L17.6316 21.4405L14.7071 24.365C14.3166 24.7555 13.6834 24.7555 13.2929 24.365C12.9024 23.9745 12.9024 23.3413 13.2929 22.9508L16.9245 19.3192C17.112 19.1317 17.3664 19.0263 17.6316 19.0263C17.8968 19.0263 18.1511 19.1317 18.3387 19.3192L20.3553 21.3358L22.7239 18.9671L22.3718 18.615C22.123 18.3661 22.0232 18.0047 22.1093 17.6635C22.1953 17.3222 22.4545 17.0512 22.7916 16.9501L25.7971 16.0484C26.143 15.9367 26.5377 16.0182 26.8124 16.2929Z' fill='#8A96A8'/></svg> );
};
