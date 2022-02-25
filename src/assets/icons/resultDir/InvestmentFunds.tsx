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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19.1709 11.3C19.1709 10.4464 18.4125 9.7825 17.5952 10.0287C13.3454 11.3091 10.25 15.2534 10.25 19.9206C10.25 25.6254 14.8746 30.2501 20.5795 30.2501C25.2468 30.2501 29.191 27.1547 30.4714 22.9048C30.7176 22.0876 30.0537 21.3291 29.2001 21.3291H21.988C20.4323 21.3291 19.1709 20.0679 19.1709 18.512V11.3Z'
        fill='currentColor'
      /><path d='M29.4254 19.4511C30.2281 19.4511 30.8778 18.7776 30.7286 17.989C29.9425 13.8331 26.6671 10.5575 22.5111 9.77139C21.7224 9.62221 21.049 10.2719 21.049 11.0746V18.512C21.049 19.0306 21.4695 19.4511 21.988 19.4511H29.4254Z'
        fill='currentColor'
      /></svg> );
};
