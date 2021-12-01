/* eslint-disable max-len */
import { TooltipPosition } from '../../../types/projects.types';
import React from 'react';
export const SvgImageUnion = (color: 'default' | 'white' = 'default', position: TooltipPosition = 'bottom') => {

  return <div className={`rf-tooltip__content-union--${position}`}>
    {color === 'white' ? <svg width='30' height='13' viewBox='0 0 30 13' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d_1829_24280)'>
        <path d='M27 0H3C3.90829 0 5.3864 0.290891 6.09566 0.824826L13.7506 6.58759C14.481 7.13747 15.519 7.13747 16.2494 6.58759L23.9043 0.824826C24.6136 0.290891 26.0917 0 27 0Z' fill='white' />
      </g>
      <defs>
        <filter id='filter0_d_1829_24280' x='0' y='0' width='30' height='13' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dy='3' />
          <feGaussianBlur stdDeviation='1.5' />
          <feColorMatrix type='matrix' values='0 0 0 0 0.54 0 0 0 0 0.588387 0 0 0 0 0.66 0 0 0 0.28 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1829_24280' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1829_24280' result='shape' />
        </filter>
      </defs>
    </svg> :
      <svg width='30' height='13' viewBox='0 0 30 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_d_1829_26167)'>
          <path d='M27 0H3C3.90829 0 5.3864 0.290891 6.09566 0.824826L13.7506 6.58759C14.481 7.13747 15.519 7.13747 16.2494 6.58759L23.9043 0.824826C24.6136 0.290891 26.0917 0 27 0Z' fill='#8A96A8' />
        </g>
        <defs>
          <filter id='filter0_d_1829_26167' x='0' y='0' width='30' height='13' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
            <feOffset dy='3' />
            <feGaussianBlur stdDeviation='1.5' />
            <feColorMatrix type='matrix' values='0 0 0 0 0.54 0 0 0 0 0.588387 0 0 0 0 0.66 0 0 0 0.28 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1829_26167' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1829_26167' result='shape' />
          </filter>
        </defs>
      </svg>

    }
  </div>;
};
