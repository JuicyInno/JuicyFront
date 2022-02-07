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
      viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.5215 12.6489C13.6678 12.2586 14.041 12 14.4578 12H31.49C31.9787 12 32.317 12.4882 32.1454 12.9458L31.3023 15.1943C31.1559 15.5846 30.7828 15.8431 30.3659 15.8431H13.3337C12.845 15.8431 12.5067 15.355 12.6783 14.8974L13.5215 12.6489Z'
        fill='currentColor'
      /><path d='M11.3597 18.4136C11.5061 18.0233 11.8792 17.7647 12.296 17.7647H29.3282C29.817 17.7647 30.1553 18.2529 29.9837 18.7105L29.1405 20.959C28.9941 21.3493 28.621 21.6078 28.2042 21.6078H11.172C10.6832 21.6078 10.3449 21.1197 10.5165 20.6621L11.3597 18.4136Z'
        fill='currentColor'
      /><path d='M9.19795 24.1783C9.34431 23.788 9.71744 23.5294 10.1343 23.5294H27.1665C27.6552 23.5294 27.9935 24.0176 27.8219 24.4752L26.9787 26.7237C26.8324 27.114 26.4592 27.3725 26.0424 27.3725H9.0102C8.52146 27.3725 8.18316 26.8844 8.35477 26.4268L9.19795 24.1783Z'
        fill='currentColor'
      /></svg> );
};
