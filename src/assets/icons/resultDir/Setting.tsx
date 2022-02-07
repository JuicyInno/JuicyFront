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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M21.9997 9.15455C20.7621 8.44002 19.2373 8.44002 17.9997 9.15455L11.6074 12.8451C10.3698 13.5597 9.60742 14.8802 9.60742 16.3093V23.6904C9.60742 25.1195 10.3698 26.44 11.6074 27.1546L17.9997 30.8451C19.2373 31.5597 20.7621 31.5597 21.9997 30.8451L28.392 27.1546C29.6296 26.44 30.392 25.1195 30.392 23.6904V16.3093C30.392 14.8802 29.6296 13.5597 28.392 12.8451L21.9997 9.15455ZM19.9997 24.4999C22.485 24.4999 24.4997 22.4851 24.4997 19.9999C24.4997 17.5146 22.485 15.4999 19.9997 15.4999C17.5144 15.4999 15.4997 17.5146 15.4997 19.9999C15.4997 22.4851 17.5144 24.4999 19.9997 24.4999Z'
        fill='currentColor'
      /></svg> );
};
