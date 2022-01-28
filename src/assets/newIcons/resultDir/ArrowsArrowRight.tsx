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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M14.0663 6.31299C13.6868 6.71431 13.7046 7.34722 14.1059 7.72665L17.4867 10.9231H4C3.44771 10.9231 3 11.3708 3 11.9231C3 12.4754 3.44771 12.9231 4 12.9231H17.4867L14.1059 16.1195C13.7046 16.4989 13.6868 17.1319 14.0663 17.5332C14.4457 17.9345 15.0786 17.9522 15.4799 17.5728L20.687 12.6497C20.8868 12.4608 21 12.198 21 11.9231C21 11.6481 20.8868 11.3853 20.687 11.1964L15.4799 6.27336C15.0786 5.89393 14.4457 5.91168 14.0663 6.31299Z' fill='#8A96A8'/></svg> );
};
