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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M20.2071 8.70711C20.5976 8.31658 20.5976 7.68342 20.2071 7.29289C19.8166 6.90237 19.1834 6.90237 18.7929 7.29289L10.5 15.5858L6.20711 11.2929C5.81658 10.9024 5.18342 10.9024 4.79289 11.2929C4.40237 11.6834 4.40237 12.3166 4.79289 12.7071L9.79289 17.7071C10.1834 18.0976 10.8166 18.0976 11.2071 17.7071L20.2071 8.70711Z'
        fill='currentColor'
      /></svg> );
};
