import React, {
  CSSProperties, FC, ReactNode
} from 'react';
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
  background?: 'black' | 'white';
  /** Расстояние от контента до тултипа
   * @default 8
   */
  offset?: number;
}

const getOffsetPadding = (offset: number, placement: TooltipPosition): CSSProperties => {
  const offsetPadding = {
    top: { paddingBottom: `${offset}px`, },
    bottom: { paddingTop: `${offset}px`, },
    left: { paddingRight: `${offset}px`, },
    right: { paddingLeft: `${offset}px`, },
  };
  return offsetPadding[placement];
};

const TooltipContent: FC<ITooltipContentProps> = ({
  children, position = 'right', className = '', background = 'white', offset = 8
}: ITooltipContentProps) => createPortal(
  <Popper
    placement={position}
    modifiers={[
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
        style={{
          ...dropdownStyle,
          ...getOffsetPadding(offset, placement as TooltipPosition)
        }}
      >
        <div className={`rf-tooltip__content rf-tooltip__content--${background} ${className}`}>
          <div className={`rf-tooltip__inner rf-tooltip__inner--${placement}`}>
            {children}
          </div>
        </div>
      </div>
    )}
  </Popper>,
  document.body
);

export default TooltipContent;
