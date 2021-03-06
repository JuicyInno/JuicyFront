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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M1.99609 5.99707C1.99609 5.44479 2.44381 4.99707 2.99609 4.99707H21.0036C21.5559 4.99707 22.0036 5.44479 22.0036 5.99707C22.0036 6.54935 21.5559 6.99707 21.0036 6.99707H2.99609C2.44381 6.99707 1.99609 6.54935 1.99609 5.99707ZM1.99609 12C1.99609 11.4477 2.44381 11 2.99609 11H17.0019C17.5542 11 18.0019 11.4477 18.0019 12C18.0019 12.5523 17.5542 13 17.0019 13H2.99609C2.44381 13 1.99609 12.5523 1.99609 12ZM1.99609 18.0024C1.99609 17.4502 2.44381 17.0024 2.99609 17.0024H13.0003C13.5525 17.0024 14.0003 17.4502 14.0003 18.0024C14.0003 18.5547 13.5525 19.0024 13.0003 19.0024H2.99609C2.44381 19.0024 1.99609 18.5547 1.99609 18.0024Z'
        fill='currentColor'
      /></svg> );
};
