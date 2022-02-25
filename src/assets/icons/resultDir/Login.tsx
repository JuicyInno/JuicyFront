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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M11.5874 21.7375C13.6438 23.7939 16.6613 24.3033 19.1939 23.2659C19.6033 23.0982 20.0821 23.1612 20.395 23.474L22.0172 25.0962C22.3101 25.3891 22.3101 25.864 22.0172 26.1569L20.9565 27.2175C20.6636 27.5104 20.6636 27.9853 20.9565 28.2782L22.7243 30.046C23.0172 30.3389 23.4921 30.3389 23.785 30.046L24.8456 28.9853C25.1385 28.6924 25.6134 28.6924 25.9063 28.9853L26.9669 30.046C27.2598 30.3389 27.7347 30.3389 28.0276 30.046L29.7954 28.2782C30.0883 27.9853 30.0883 27.5104 29.7954 27.2175L23.2234 20.6456C22.9106 20.3328 22.8476 19.8539 23.0153 19.4445C24.0527 16.9119 23.5433 13.8944 21.4869 11.838C18.7532 9.1043 14.321 9.1043 11.5874 11.838C8.85369 14.5716 8.85369 19.0038 11.5874 21.7375ZM14.4158 18.909C15.5874 20.0806 17.4869 20.0806 18.6584 18.909C19.83 17.7375 19.83 15.838 18.6584 14.6664C17.4869 13.4948 15.5874 13.4948 14.4158 14.6664C13.2442 15.838 13.2442 17.7375 14.4158 18.909Z'
        fill='currentColor'
      /></svg> );
};
