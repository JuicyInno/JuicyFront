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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M18.5709 9.72664C18.5709 13.4417 15.5593 16.4533 11.8443 16.4533C8.12927 16.4533 5.11765 13.4417 5.11765 9.72664C5.11765 6.01162 8.12927 3 11.8443 3C15.5593 3 18.5709 6.01162 18.5709 9.72664Z'
        fill='currentColor'
      /><path d='M4 18.8824C3.44772 18.8824 3 19.3564 3 19.9412C3 20.5259 3.44772 21 4 21H20C20.5523 21 21 20.5259 21 19.9412C21 19.3564 20.5523 18.8824 20 18.8824H4Z'
        fill='currentColor'
      /></svg> );
};
