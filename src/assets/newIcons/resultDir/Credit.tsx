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
      viewBox='0 0 40 41' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M20 31.2551C26.0751 31.2551 31 26.3303 31 20.2551C31 14.18 26.0751 9.25513 20 9.25513C13.9249 9.25513 9 14.18 9 20.2551C9 26.3303 13.9249 31.2551 20 31.2551ZM18.3 16.7551C18.3 17.7492 17.4941 18.5551 16.5 18.5551C15.5058 18.5551 14.7 17.7492 14.7 16.7551C14.7 15.761 15.5058 14.9551 16.5 14.9551C17.4941 14.9551 18.3 15.761 18.3 16.7551ZM25.3 23.7551C25.3 24.7492 24.4941 25.5551 23.5 25.5551C22.5058 25.5551 21.7 24.7492 21.7 23.7551C21.7 22.761 22.5058 21.9551 23.5 21.9551C24.4941 21.9551 25.3 22.761 25.3 23.7551ZM24.2071 16.048C24.5976 16.4385 24.5976 17.0717 24.2071 17.4622L17.2071 24.4622C16.8166 24.8528 16.1834 24.8528 15.7929 24.4622C15.4024 24.0717 15.4024 23.4385 15.7929 23.048L22.7929 16.048C23.1834 15.6575 23.8166 15.6575 24.2071 16.048Z' fill='#8A96A8'/></svg> );
};
