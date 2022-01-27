import React, { FC, ReactNode } from 'react';
import { Popper } from 'react-popper';

import './Tooltip.scss';
import { createPortal } from 'react-dom';
import { TooltipPosition } from '../../../types/projects.types';

export interface ITooltipContentProps {
  /** Содержимое tooltip */
  children: ReactNode | ReactNode[];
  /** Позиция tooltip */
  position?: TooltipPosition;
  /** Дополнительный класс */
  className?: string;
  /**
   * Цвет тултипа
   * @default default
   *
   */
  background?: 'default' | 'white';
  /** Расстояние от контента до тултипа
   * @default 8
   */
  offset?: number;
}

const HEIGHT_ARROW = 7;

const TooltipContent: FC<ITooltipContentProps> = ({
  children, position = 'right', className = '', background = 'default', offset = 8
}: ITooltipContentProps) => createPortal(
  <Popper
    placement={position}
    modifiers={[
      {
        name: 'offset',
        options: { offset: [0, offset + HEIGHT_ARROW] },
      },
      {
        name: 'flip',
        options: {
          allowedAutoPlacements: [
            'right',
            'left',
            'top',
            'bottom'
          ],
        },
      },
      {
        name: 'arrow',
        options: { padding: 9 }
      }
    ]}
  >
    {({ ref, style: dropdownStyle, placement, arrowProps }) => (
      <div
        ref={ref}
        className='rf-tooltip__content-wrapper'
        style={dropdownStyle}
      >
        <div className={`rf-tooltip__content rf-tooltip__content--${background} ${className}`}>
          <div className={`rf-tooltip__inner rf-tooltip__inner--${placement}`}>
            {children}
            <div
              className={`rf-tooltip__content-union rf-tooltip__content-union--${placement} rf-tooltip__content-union--${background}`}
              ref={arrowProps.ref}
              style={arrowProps.style}
            >
              <svg width='30' height='13' viewBox='0 0 30 13' xmlns='http://www.w3.org/2000/svg'>
                <g filter='url(#filter0_d_1829_24280)'>
                  <path
                    // eslint-disable-next-line max-len
                    d='M27 0H3C3.90829 0 5.3864 0.290891 6.09566 0.824826L13.7506 6.58759C14.481 7.13747 15.519 7.13747 16.2494 6.58759L23.9043 0.824826C24.6136 0.290891 26.0917 0 27 0Z'
                    fill='currentColor'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_d_1829_24280'
                    x='0'
                    y='0'
                    width='30'
                    height='13'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                  >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                    <feOffset dy='3' />
                    <feGaussianBlur stdDeviation='1.5' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0.54 0 0 0 0 0.588387 0 0 0 0 0.66 0 0 0 0.28 0' />
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1829_24280' />
                    <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1829_24280' result='shape' />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    )}
  </Popper>,
  document.body
);

export default TooltipContent;
