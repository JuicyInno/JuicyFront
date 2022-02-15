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
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M23.1042 23.9591V16.988C23.1042 11.8323 26.3033 10 28.8333 10V31.981C28.8333 32.5611 28.3631 33.0314 27.783 33.0314H27.592C27.0119 33.0314 26.5417 32.5611 26.5417 31.981V25.5346C26.5417 25.2445 26.3065 25.0094 26.0165 25.0094L24.1545 25.0095C23.5744 25.0095 23.1042 24.5392 23.1042 23.9591ZM16.9167 18.1339C17.4229 18.1339 17.8333 17.7235 17.8333 17.2173V11.0298C17.8333 10.5235 18.2437 10.1131 18.75 10.1131C19.2563 10.1131 19.6667 10.5235 19.6667 11.0298V18.4777C19.6667 20.2857 18.6259 21.8116 17.1822 22.3613C16.6667 22.5576 16.2292 22.9995 16.2292 23.5512V31.9794C16.2292 32.5595 15.7589 33.0298 15.1788 33.0298H14.9878C14.4078 33.0298 13.9375 32.5595 13.9375 31.9794V23.5512C13.9375 22.9995 13.5 22.5576 12.9844 22.3613C11.5407 21.8116 10.5 20.2857 10.5 18.4777V11.0298C10.5 10.5235 10.9104 10.1131 11.4167 10.1131C11.9229 10.1131 12.3333 10.5235 12.3333 11.0298V17.2173C12.3333 17.7235 12.7437 18.1339 13.25 18.1339C13.7563 18.1339 14.1667 17.7235 14.1667 17.2173V11.0298C14.1667 10.5235 14.5771 10.1131 15.0833 10.1131C15.5896 10.1131 16 10.5235 16 11.0298V17.2173C16 17.7235 16.4104 18.1339 16.9167 18.1339Z'
        fill='currentColor'
      /></svg> );
};