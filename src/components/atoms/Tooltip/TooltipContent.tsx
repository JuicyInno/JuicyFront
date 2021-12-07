import React, { FC, ReactNode } from 'react';
import { Popper } from 'react-popper';

import './Tooltip.scss';
import { createPortal } from 'react-dom';
import { TooltipPosition } from '../../../types/projects.types';
import { ArrowTooltipIcon } from './ArrowTooltipIcon';

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
    ]}
  >
    {({ ref, style: dropdownStyle, placement }) => (
      <div
        ref={ref}
        className='rf-tooltip__content-wrapper'
        style={dropdownStyle}
      >
        <div className={`rf-tooltip__content rf-tooltip__content--${background} ${className}`}>
          <div className={`rf-tooltip__inner rf-tooltip__inner--${placement}`}>
            {children}
            <ArrowTooltipIcon color={background} position={placement as TooltipPosition} />
          </div>
        </div>
      </div>
    )}
  </Popper>,
  document.body
);

export default TooltipContent;
