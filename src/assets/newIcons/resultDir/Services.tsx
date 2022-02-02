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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M12.54 10H15.92C17.33 10 18.46 11.15 18.46 12.561V15.97C18.46 17.39 17.33 18.53 15.92 18.53H12.54C11.14 18.53 10 17.39 10 15.97V12.561C10 11.15 11.14 10 12.54 10ZM12.54 21.4697H15.92C17.33 21.4697 18.46 22.6107 18.46 24.0307V27.4397C18.46 28.8497 17.33 29.9997 15.92 29.9997H12.54C11.14 29.9997 10 28.8497 10 27.4397V24.0307C10 22.6107 11.14 21.4697 12.54 21.4697ZM27.4601 10H24.0801C22.6701 10 21.5401 11.15 21.5401 12.561V15.97C21.5401 17.39 22.6701 18.53 24.0801 18.53H27.4601C28.8601 18.53 30.0001 17.39 30.0001 15.97V12.561C30.0001 11.15 28.8601 10 27.4601 10ZM24.0801 21.4697H27.4601C28.8601 21.4697 30.0001 22.6107 30.0001 24.0307V27.4397C30.0001 28.8497 28.8601 29.9997 27.4601 29.9997H24.0801C22.6701 29.9997 21.5401 28.8497 21.5401 27.4397V24.0307C21.5401 22.6107 22.6701 21.4697 24.0801 21.4697Z' fill='#8A96A8'/></svg> );
};