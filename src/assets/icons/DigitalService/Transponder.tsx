import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '40';
  return (
    <svg
      width={Number(size) + 1}
      height={size}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M32.9403 11.9453C32.5034 12.3096 31.8154 12.2022 31.4369 11.7499C30.1864 10.2556 28.5523 9.01514 26.6061 8.19013C24.66 7.36519 22.6324 7.05346 20.689 7.19377C20.1009 7.23624 19.5454 6.81659 19.5033 6.24933C19.4566 5.61946 19.9074 5.07016 20.5612 5.02913C22.824 4.8871 25.1789 5.26139 27.4411 6.2203C29.7034 7.17929 31.6101 8.61157 33.0815 10.3367C33.5066 10.835 33.4253 11.5409 32.9403 11.9453Z'
        fill='currentColor'
      />
      <path
        d='M29.8027 14.5615C30.2672 14.1742 30.3643 13.5041 29.9682 13.0186C28.9156 11.7286 27.5246 10.6578 25.8593 9.95187C24.1943 9.24608 22.4577 8.991 20.799 9.13147C20.1746 9.18435 19.7605 9.72014 19.8052 10.3234C19.8492 10.9169 20.4558 11.3405 21.0699 11.2866C22.3655 11.1729 23.723 11.3701 25.0243 11.9217C26.3258 12.4734 27.4116 13.3121 28.2309 14.3224C28.6192 14.8012 29.3455 14.9427 29.8027 14.5615Z'
        fill='currentColor'
      />
      <path
        d='M26.6132 17.2209C27.0658 16.8436 27.2074 16.2058 26.8493 15.7138C26.2229 14.853 25.3485 14.1374 24.2775 13.6834C23.2069 13.2296 22.0851 13.0988 21.0313 13.2469C20.4285 13.3316 20.0685 13.877 20.1121 14.4647C20.1569 15.0698 20.8836 15.4568 21.506 15.3786C22.1364 15.2995 22.8043 15.3827 23.4425 15.6533C24.081 15.9239 24.6054 16.3462 24.9869 16.8545C25.3635 17.3563 26.1471 17.6095 26.6132 17.2209Z'
        fill='currentColor'
      />
      <path fillRule='evenodd'
        clipRule='evenodd'
        d='M8.5 22.8666V29.5C8.5 30.3284 9.17157 31 10 31H11.1667C11.903 31 12.5 30.403 12.5 29.6667C12.5 29.2985 12.7985 29 13.1667 29H26.8333C27.2015 29 27.5 29.2985 27.5 29.6667C27.5 30.403 28.097 31 28.8333 31H30C30.8284 31 31.5 30.3284 31.5 29.5V22.8666C31.5 22.2941 31.3908 21.7269 31.1781 21.1954L30.4153 19.1263C30.2089 18.5665 29.5198 18.366 29.0452 18.7277C28.8135 18.9043 28.5301 19 28.2387 19H13.6099C13.0639 19 12.6783 18.465 12.851 17.947L13.6581 15.5257C13.8623 14.9131 14.4355 14.5 15.0811 14.5H17.6865C18.0593 14.5 18.3009 14.1068 18.1326 13.7742L17.512 12.5484C17.3418 12.212 16.9968 12 16.6198 12H14.5311C13.3044 12 12.2013 12.7469 11.7457 13.8858L8.82185 21.1954C8.60924 21.7269 8.5 22.2941 8.5 22.8666ZM12.7 25.1998C13.6389 25.1998 14.4 24.4387 14.4 23.4998C14.4 22.5609 13.6389 21.7998 12.7 21.7998C11.7611 21.7998 11 22.5609 11 23.4998C11 24.4387 11.7611 25.1998 12.7 25.1998ZM29.0001 23.4998C29.0001 24.4387 28.239 25.1998 27.3001 25.1998C26.3612 25.1998 25.6001 24.4387 25.6001 23.4998C25.6001 22.5609 26.3612 21.7998 27.3001 21.7998C28.239 21.7998 29.0001 22.5609 29.0001 23.4998Z'
        fill='currentColor'
      />
    </svg>
  );
};
