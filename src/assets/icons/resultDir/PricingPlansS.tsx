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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M25.8333 16.75L26.6667 17.4167C27.3333 18 27.75 18.8333 27.6667 19.75V25.5833C27.6667 26.5833 26.8333 27.4167 25.8333 27.4167H14.0833C13.0833 27.4167 12.25 26.5833 12.25 25.5833V19.6667C12.25 18.8333 12.6667 18 13.3333 17.4167L18.3333 13C19.1667 12.3333 20.3333 12.3333 21.1667 13L23.6667 15V13.9167C23.6667 13.5 24 13.25 24.3333 13.25H25.1667C25.5833 13.25 25.8333 13.5833 25.8333 13.9167V16.75ZM19.1667 23.3334H20.8333C21.1667 23.3334 21.4167 23.0001 21.5 22.6667V21.0834C21.5 20.6667 21.1667 20.4167 20.8333 20.4167H19.1667C18.75 20.4167 18.5 20.7501 18.5 21.0834V22.6667C18.5 23.0834 18.8333 23.3334 19.1667 23.3334Z'
        fill='currentColor'
      /></svg> );
};
