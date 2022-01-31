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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M10.7437 13.9995C9.93547 13.9995 9.28027 14.6711 9.28027 15.4995V25.4995C9.28027 26.3279 9.93547 26.9995 10.7437 26.9995H30.2559C31.0641 26.9995 31.7193 26.3279 31.7193 25.4995V15.4995C31.7193 14.6711 31.0641 13.9995 30.2559 13.9995H10.7437ZM20.4993 22.9999C21.8463 22.9999 22.9383 21.8806 22.9383 20.4999C22.9383 19.1191 21.8463 17.9999 20.4993 17.9999C19.1522 17.9999 18.0603 19.1191 18.0603 20.4999C18.0603 21.8806 19.1522 22.9999 20.4993 22.9999Z' fill='#8A96A8'/></svg> );
};
