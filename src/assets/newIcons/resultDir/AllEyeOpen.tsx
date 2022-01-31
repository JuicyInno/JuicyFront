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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M12.1646 14.142C10.9376 14.2206 9.92379 13.1908 10.0045 11.9402C10.0669 10.9068 10.8899 10.0717 11.9036 10.0042C13.1307 9.92563 14.1445 10.9554 14.0638 12.206C13.9976 13.2434 13.1749 14.0784 12.1646 14.142Z' fill='#8A96A8'/><path fillRule='evenodd' clipRule='evenodd' d='M3.14048 12.8867C2.95317 12.632 2.95317 12.2762 3.14048 12.0217C5.43639 8.91349 8.54787 7 11.9788 7C15.41 7 18.5213 8.91349 20.8173 12.0253C21.0047 12.28 21.0047 12.6357 20.8173 12.8904C18.5213 15.9984 15.41 17.912 11.9788 17.912C8.54787 17.912 5.43639 15.9984 3.14048 12.8867ZM5.34795 12.4547C7.27179 14.7159 9.59985 15.912 11.9788 15.912C14.358 15.912 16.686 14.7159 18.6098 12.4574C16.686 10.196 14.358 9 11.9788 9C9.5998 9 7.27176 10.196 5.34795 12.4547Z' fill='#8A96A8'/></svg> );
};
