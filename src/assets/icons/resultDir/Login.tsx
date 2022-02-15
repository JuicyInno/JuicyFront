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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M11.5874 21.7373C13.6438 23.7937 16.6613 24.3032 19.1939 23.2658C19.6033 23.0981 20.0821 23.1611 20.395 23.4739L22.0172 25.0961C22.3101 25.389 22.3101 25.8639 22.0172 26.1568L20.9565 27.2174C20.6636 27.5103 20.6636 27.9852 20.9565 28.2781L22.7243 30.0458C23.0172 30.3387 23.4921 30.3387 23.785 30.0458L24.8456 28.9852C25.1385 28.6923 25.6134 28.6923 25.9063 28.9852L26.9669 30.0458C27.2598 30.3387 27.7347 30.3387 28.0276 30.0458L29.7954 28.2781C30.0883 27.9852 30.0883 27.5103 29.7954 27.2174L23.2234 20.6455C22.9106 20.3326 22.8476 19.8538 23.0153 19.4444C24.0527 16.9118 23.5432 13.8942 21.4869 11.8379C18.7532 9.10418 14.321 9.10418 11.5874 11.8379C8.85369 14.5715 8.85369 19.0037 11.5874 21.7373ZM14.4158 18.9089C15.5874 20.0805 17.4869 20.0805 18.6584 18.9089C19.83 17.7373 19.83 15.8379 18.6584 14.6663C17.4869 13.4947 15.5874 13.4947 14.4158 14.6663C13.2442 15.8379 13.2442 17.7373 14.4158 18.9089Z'
        fill='currentColor'
      /></svg> );
};