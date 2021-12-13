import React, {
  FC, ReactNode, useMemo, useState
} from 'react';
import {
  Manager, Popper, Reference
} from 'react-popper';
import './Tooltip.scss';
import { extractTextFromHTML } from '../../../utils/helpers';
import { renderToStaticMarkup } from 'react-dom/server';

import { createPortal } from 'react-dom';
import { ArrowTooltipIcon } from './ArrowTooltipIcon';
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
export interface ITooltipProps extends Omit<ITooltipContentProps, 'children'> {
  /** [1] Элемент, на который наводим, [2] Элемент с подсказкой */
  children: [ReactNode, ReactNode];
  /** Отключить показ самого тултипа
   * @default true
   */
  isVisible?: boolean;
}
const HEIGHT_ARROW = 7;
const Tooltip: FC<ITooltipProps> = ({
  children,
  isVisible = true,
  background = 'default',
  offset = 8,
  className,
  position,
  ...props
}: ITooltipProps) => {
  const [content, contentTooltip] = children;
  const [visible, setVisible] = useState<boolean>(false);

  const text: string = useMemo(() => {
    try {
      // @ts-ignore
      return extractTextFromHTML(renderToStaticMarkup(contentTooltip));
    } catch {
      return '';
    }
  }, [contentTooltip]);

  return (
    <Manager>
      <div
        data-testid='rf-tooltip'
        className={`rf-tooltip rf-tooltip--${background}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <Reference>
          {(referenceProps) => <div className='rf-tooltip__reference' {...referenceProps}>{content}</div>}
        </Reference>

        {visible && isVisible && text.length > 0 && (

          createPortal(
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
                      {contentTooltip}
                      <ArrowTooltipIcon color={background} position={placement as TooltipPosition} />
                    </div>
                  </div>
                </div>
              )}
            </Popper>,
            document.body
          )

        )}
      </div>
    </Manager>
  );
};

export default Tooltip;
