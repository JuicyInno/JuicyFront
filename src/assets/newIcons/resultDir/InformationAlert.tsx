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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M20 31C26.0751 31 31 26.0751 31 20C31 13.9249 26.0751 9 20 9C13.9249 9 9 13.9249 9 20C9 26.0751 13.9249 31 20 31ZM20 16.1135C20.9113 16.1135 21.65 15.3747 21.65 14.4635C21.65 13.5522 20.9113 12.8135 20 12.8135C19.0887 12.8135 18.35 13.5522 18.35 14.4635C18.35 15.3747 19.0887 16.1135 20 16.1135ZM18.625 25.8118C18.625 26.5712 19.2406 27.1868 20 27.1868C20.7594 27.1868 21.375 26.5712 21.375 25.8118V19.7008C21.375 18.9414 20.7594 18.3258 20 18.3258C19.2406 18.3258 18.625 18.9414 18.625 19.7008V25.8118Z' fill='#8A96A8'/></svg> );
};
