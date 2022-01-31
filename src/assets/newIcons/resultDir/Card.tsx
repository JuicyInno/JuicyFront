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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M28.5 12.7998H10.5C9.11929 12.7998 8 13.9191 8 15.2998V26.2998C8 27.6805 9.11929 28.7998 10.5 28.7998H28.5C29.8807 28.7998 31 27.6805 31 26.2998V15.2998C31 13.9191 29.8807 12.7998 28.5 12.7998ZM20.7299 16.8404C21.0631 16.5071 21.6034 16.5071 21.9367 16.8404L25.35 20.2537C25.6833 20.5869 25.6833 21.1272 25.35 21.4605L21.9368 24.8738C21.6036 25.2071 21.0633 25.2071 20.73 24.8738C20.3967 24.5406 20.3967 24.0003 20.73 23.667L22.6857 21.7112H13.6533C13.182 21.7112 12.8 21.3292 12.8 20.8579C12.8 20.3866 13.182 20.0046 13.6533 20.0046H22.6873L20.7299 18.0472C20.3966 17.7139 20.3966 17.1736 20.7299 16.8404Z' fill='#8A96A8'/></svg> );
};
