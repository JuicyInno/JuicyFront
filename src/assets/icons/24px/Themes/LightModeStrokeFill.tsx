import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '24';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.1428 2.26627C12.9723 2.09578 12.7411 2 12.5 2C12.2589 2 12.0277 2.09578 11.8572 2.26627C11.6867 2.43675 11.5909 2.66799 11.5909 2.90909V4.72727C11.5909 4.96838 11.6867 5.19961 11.8572 5.3701C12.0277 5.54058 12.2589 5.63636 12.5 5.63636C12.7411 5.63636 12.9723 5.54058 13.1428 5.3701C13.3133 5.19961 13.4091 4.96838 13.4091 4.72727V2.90909C13.4091 2.66799 13.3133 2.43675 13.1428 2.26627Z'
        fill='currentColor'
      />
      <path
        d='M13.1428 18.6299C13.3133 18.8004 13.4091 19.0316 13.4091 19.2727V21.0909C13.4091 21.332 13.3133 21.5632 13.1428 21.7337C12.9723 21.9042 12.7411 22 12.5 22C12.2589 22 12.0277 21.9042 11.8572 21.7337C11.6867 21.5632 11.5909 21.332 11.5909 21.0909V19.2727C11.5909 19.0316 11.6867 18.8004 11.8572 18.6299C12.0277 18.4594 12.2589 18.3636 12.5 18.3636C12.7411 18.3636 12.9723 18.4594 13.1428 18.6299Z'
        fill='currentColor'
      />
      <path
        d='M22.2337 12.6428C22.4042 12.4723 22.5 12.2411 22.5 12C22.5 11.7589 22.4042 11.5277 22.2337 11.3572C22.0632 11.1867 21.832 11.0909 21.5909 11.0909H19.7727C19.5316 11.0909 19.3004 11.1867 19.1299 11.3572C18.9594 11.5277 18.8636 11.7589 18.8636 12C18.8636 12.2411 18.9594 12.4723 19.1299 12.6428C19.3004 12.8133 19.5316 12.9091 19.7727 12.9091H21.5909C21.832 12.9091 22.0632 12.8133 22.2337 12.6428Z'
        fill='currentColor'
      />
      <path
        d='M5.8701 12.6428C5.69961 12.8133 5.46838 12.9091 5.22727 12.9091H3.40909C3.16799 12.9091 2.93675 12.8133 2.76627 12.6428C2.59578 12.4723 2.5 12.2411 2.5 12C2.5 11.7589 2.59578 11.5277 2.76627 11.3572C2.93675 11.1867 3.16799 11.0909 3.40909 11.0909H5.22727C5.46838 11.0909 5.69961 11.1867 5.8701 11.3572C6.04058 11.5277 6.13636 11.7589 6.13636 12C6.13636 12.2411 6.04058 12.4723 5.8701 12.6428Z'
        fill='currentColor'
      />
      <path
        d='M19.8371 5.57182C19.8371 5.33076 19.7413 5.09957 19.5709 4.92909C19.4004 4.75866 19.1692 4.66292 18.9282 4.66292C18.6871 4.66292 18.4559 4.75866 18.2855 4.92909L17 6.21455C16.9132 6.29841 16.8439 6.39872 16.7963 6.50963C16.7486 6.62055 16.7235 6.73984 16.7225 6.86054C16.7214 6.98125 16.7445 7.10096 16.7902 7.21269C16.8359 7.32441 16.9034 7.42591 16.9887 7.51127C17.0741 7.59663 17.1756 7.66413 17.2873 7.70984C17.399 7.75555 17.5187 7.77855 17.6395 7.7775C17.7602 7.77645 17.8795 7.75137 17.9904 7.70373C18.1013 7.65608 18.2016 7.58683 18.2855 7.5L19.5709 6.21455C19.7413 6.04407 19.8371 5.81288 19.8371 5.57182Z'
        fill='currentColor'
      />
      <path
        d='M8.20373 17.4904C8.15608 17.6013 8.08683 17.7016 8 17.7855L6.71455 19.0709C6.63068 19.1577 6.53037 19.227 6.41946 19.2746C6.30855 19.3223 6.18925 19.3474 6.06855 19.3484C5.94784 19.3495 5.82813 19.3265 5.71641 19.2807C5.60468 19.235 5.50318 19.1675 5.41782 19.0822C5.33247 18.9968 5.26496 18.8953 5.21925 18.7836C5.17354 18.6719 5.15054 18.5522 5.15159 18.4315C5.15264 18.3107 5.17772 18.1915 5.22536 18.0805C5.27301 17.9696 5.34226 17.8693 5.42909 17.7855L6.71455 16.5C6.79841 16.4132 6.89872 16.3439 7.00963 16.2963C7.12055 16.2486 7.23984 16.2235 7.36054 16.2225C7.48125 16.2214 7.60096 16.2445 7.71269 16.2902C7.82441 16.3359 7.92591 16.4034 8.01127 16.4887C8.09663 16.5741 8.16413 16.6756 8.20984 16.7873C8.25555 16.899 8.27855 17.0187 8.2775 17.1395C8.27645 17.2602 8.25137 17.3795 8.20373 17.4904Z'
        fill='currentColor'
      />
      <path
        d='M6.07182 4.66292C5.83076 4.66292 5.59957 4.75866 5.42909 4.92909C5.25866 5.09957 5.16292 5.33076 5.16292 5.57182C5.16292 5.81288 5.25866 6.04407 5.42909 6.21455L6.71455 7.5C6.79841 7.58683 6.89872 7.65608 7.00963 7.70373C7.12055 7.75137 7.23984 7.77645 7.36054 7.7775C7.48125 7.77855 7.60096 7.75555 7.71269 7.70984C7.82441 7.66413 7.92591 7.59663 8.01127 7.51127C8.09663 7.42591 8.16413 7.32441 8.20984 7.21269C8.25555 7.10096 8.27855 6.98125 8.2775 6.86054C8.27645 6.73984 8.25137 6.62055 8.20373 6.50963C8.15608 6.39872 8.08683 6.29841 8 6.21455L6.71455 4.92909C6.54407 4.75866 6.31288 4.66292 6.07182 4.66292Z'
        fill='currentColor'
      />
      <path
        d='M17.646 16.2448C17.8844 16.2428 18.114 16.3344 18.2855 16.5L19.5709 17.7855C19.7365 17.9569 19.8281 18.1866 19.8261 18.4249C19.824 18.6633 19.7284 18.8913 19.5598 19.0598C19.3913 19.2284 19.1633 19.324 18.9249 19.3261C18.6866 19.3281 18.4569 19.2365 18.2855 19.0709L17 17.7855C16.8344 17.614 16.7428 17.3844 16.7448 17.146C16.7469 16.9076 16.8425 16.6796 17.0111 16.5111C17.1796 16.3425 17.4076 16.2469 17.646 16.2448Z'
        fill='currentColor'
      />
      <path
        d='M17.0455 12C17.0455 14.5104 15.0104 16.5455 12.5 16.5455C9.98961 16.5455 7.95455 14.5104 7.95455 12C7.95455 9.48961 9.98961 7.45455 12.5 7.45455C15.0104 7.45455 17.0455 9.48961 17.0455 12Z'
        fill='currentColor'
      />
    </svg>
  );
};
