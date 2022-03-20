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
      viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.6428 2.26627C12.4723 2.09578 12.2411 2 12 2C11.7589 2 11.5277 2.09578 11.3572 2.26627C11.1867 2.43675 11.0909 2.66799 11.0909 2.90909V4.72727C11.0909 4.96838 11.1867 5.19961 11.3572 5.3701C11.5277 5.54058 11.7589 5.63636 12 5.63636C12.2411 5.63636 12.4723 5.54058 12.6428 5.3701C12.8133 5.19961 12.9091 4.96838 12.9091 4.72727V2.90909C12.9091 2.66799 12.8133 2.43675 12.6428 2.26627Z'
        fill='currentColor'
      /><path d='M12.6428 18.6299C12.8133 18.8004 12.9091 19.0316 12.9091 19.2727V21.0909C12.9091 21.332 12.8133 21.5632 12.6428 21.7337C12.4723 21.9042 12.2411 22 12 22C11.7589 22 11.5277 21.9042 11.3572 21.7337C11.1867 21.5632 11.0909 21.332 11.0909 21.0909V19.2727C11.0909 19.0316 11.1867 18.8004 11.3572 18.6299C11.5277 18.4594 11.7589 18.3636 12 18.3636C12.2411 18.3636 12.4723 18.4594 12.6428 18.6299Z'
        fill='currentColor'
      /><path d='M22 12C22 12.2411 21.9042 12.4723 21.7337 12.6428C21.5632 12.8133 21.332 12.9091 21.0909 12.9091H19.2727C19.0316 12.9091 18.8004 12.8133 18.6299 12.6428C18.4594 12.4723 18.3636 12.2411 18.3636 12C18.3636 11.7589 18.4594 11.5277 18.6299 11.3572C18.8004 11.1867 19.0316 11.0909 19.2727 11.0909H21.0909C21.332 11.0909 21.5632 11.1867 21.7337 11.3572C21.9042 11.5277 22 11.7589 22 12Z'
        fill='currentColor'
      /><path d='M5.3701 12.6428C5.19961 12.8133 4.96838 12.9091 4.72727 12.9091H2.90909C2.66799 12.9091 2.43675 12.8133 2.26627 12.6428C2.09578 12.4723 2 12.2411 2 12C2 11.7589 2.09578 11.5277 2.26627 11.3572C2.43675 11.1867 2.66799 11.0909 2.90909 11.0909H4.72727C4.96838 11.0909 5.19961 11.1867 5.3701 11.3572C5.54058 11.5277 5.63636 11.7589 5.63636 12C5.63636 12.2411 5.54058 12.4723 5.3701 12.6428Z'
        fill='currentColor'
      /><path d='M19.0709 4.92909C19.2413 5.09957 19.3371 5.33076 19.3371 5.57182C19.3371 5.81288 19.2413 6.04407 19.0709 6.21455L17.7855 7.5C17.7016 7.58683 17.6013 7.65608 17.4904 7.70373C17.3795 7.75137 17.2602 7.77645 17.1395 7.7775C17.0187 7.77855 16.899 7.75555 16.7873 7.70984C16.6756 7.66413 16.5741 7.59663 16.4887 7.51127C16.4034 7.42591 16.3359 7.32441 16.2902 7.21269C16.2445 7.10096 16.2214 6.98125 16.2225 6.86054C16.2235 6.73984 16.2486 6.62055 16.2963 6.50963C16.3439 6.39872 16.4132 6.29841 16.5 6.21455L17.7855 4.92909C17.9559 4.75866 18.1871 4.66292 18.4282 4.66292C18.6692 4.66292 18.9004 4.75866 19.0709 4.92909Z'
        fill='currentColor'
      /><path d='M7.70373 17.4904C7.65608 17.6013 7.58683 17.7016 7.5 17.7855L6.21455 19.0709C6.13068 19.1577 6.03037 19.227 5.91946 19.2746C5.80855 19.3223 5.68925 19.3474 5.56855 19.3484C5.44784 19.3495 5.32813 19.3265 5.21641 19.2807C5.10468 19.235 5.00318 19.1675 4.91782 19.0822C4.83247 18.9968 4.76496 18.8953 4.71925 18.7836C4.67354 18.6719 4.65054 18.5522 4.65159 18.4315C4.65264 18.3107 4.67772 18.1915 4.72536 18.0805C4.77301 17.9696 4.84226 17.8693 4.92909 17.7855L6.21455 16.5C6.29841 16.4132 6.39872 16.3439 6.50963 16.2963C6.62055 16.2486 6.73984 16.2235 6.86054 16.2225C6.98125 16.2214 7.10096 16.2445 7.21269 16.2902C7.32441 16.3359 7.42591 16.4034 7.51127 16.4887C7.59663 16.5741 7.66413 16.6756 7.70984 16.7873C7.75555 16.899 7.77855 17.0187 7.7775 17.1395C7.77645 17.2602 7.75137 17.3795 7.70373 17.4904Z'
        fill='currentColor'
      /><path d='M4.92909 4.92909C5.09957 4.75866 5.33076 4.66292 5.57182 4.66292C5.81288 4.66292 6.04407 4.75866 6.21455 4.92909L7.5 6.21455C7.58683 6.29841 7.65608 6.39872 7.70373 6.50963C7.75137 6.62055 7.77645 6.73984 7.7775 6.86054C7.77855 6.98125 7.75555 7.10096 7.70984 7.21269C7.66413 7.32441 7.59663 7.42591 7.51127 7.51127C7.42591 7.59663 7.32441 7.66413 7.21269 7.70984C7.10096 7.75555 6.98125 7.77855 6.86054 7.7775C6.73984 7.77645 6.62055 7.75137 6.50963 7.70373C6.39872 7.65608 6.29841 7.58683 6.21455 7.5L4.92909 6.21455C4.75866 6.04407 4.66292 5.81288 4.66292 5.57182C4.66292 5.33076 4.75866 5.09957 4.92909 4.92909Z'
        fill='currentColor'
      /><path d='M17.146 16.2448C17.3844 16.2428 17.614 16.3344 17.7855 16.5L19.0709 17.7855C19.2365 17.9569 19.3281 18.1866 19.3261 18.4249C19.324 18.6633 19.2284 18.8913 19.0598 19.0598C18.8913 19.2284 18.6633 19.324 18.4249 19.3261C18.1866 19.3281 17.9569 19.2365 17.7855 19.0709L16.5 17.7855C16.3344 17.614 16.2428 17.3844 16.2448 17.146C16.2469 16.9076 16.3425 16.6796 16.5111 16.5111C16.6796 16.3425 16.9076 16.2469 17.146 16.2448Z'
        fill='currentColor'
      /><path fillRule='evenodd' clipRule='evenodd' d='M12 16.5455C14.5104 16.5455 16.5455 14.5104 16.5455 12C16.5455 9.48961 14.5104 7.45455 12 7.45455C9.48961 7.45455 7.45455 9.48961 7.45455 12C7.45455 14.5104 9.48961 16.5455 12 16.5455ZM12 14.7273C13.5062 14.7273 14.7273 13.5062 14.7273 12C14.7273 10.4938 13.5062 9.27273 12 9.27273C10.4938 9.27273 9.27273 10.4938 9.27273 12C9.27273 13.5062 10.4938 14.7273 12 14.7273Z'
        fill='currentColor'
      /></svg> );
};
