import React, {
  FC, ReactNode, useMemo, useRef, useState
} from 'react';
import { Manager, Reference } from 'react-popper';
import './Tooltip.scss';
import { extractTextFromHTML } from '../../../utils/helpers';
import { renderToStaticMarkup } from 'react-dom/server';
import TooltipContent, { ITooltipContentProps } from './TooltipContent';

export interface ITooltipProps extends Omit<ITooltipContentProps, 'children'> {
  /** [1] Элемент, на который наводим, [2] Элемент с подсказкой */
  children: [ReactNode, ReactNode];
  /** Отключить показ самого тултипа
   * @default true
   */
  isVisible?: boolean;
  /** Задержка перед открытием тултипа
   * @default 0
   */
  closeDelay?: number;
  /** Класс */
  className?: string;
}

const Tooltip: FC<ITooltipProps> = ({
  children,
  isVisible = true,
  background = 'white',
  closeDelay = 0,
  className = '',
  ...props
}: ITooltipProps) => {
  const [content, contentTooltip] = children;
  const [visible, setVisible] = useState<boolean>(false);
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  const text: string = useMemo(() => {
    try {
      // @ts-ignore
      return extractTextFromHTML(renderToStaticMarkup(contentTooltip));
    } catch {
      return '';
    }
  }, [contentTooltip]);

  const onMouseEnter = () => {
    clearTimeout(timeoutId.current!);
    timeoutId.current = setTimeout(() => {
      setVisible(true);
    }, closeDelay);
  };

  const onMouseLeave = () => {
    clearTimeout(timeoutId.current!);
    setVisible(false);
  };

  return (
    <Manager>
      <div
        data-testid='rf-tooltip'
        className={`rf-tooltip rf-tooltip--${background} ${className}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Reference>
          {(referenceProps) => <div className='rf-tooltip__reference' {...referenceProps}>{content}</div>}
        </Reference>

        {visible && isVisible && text.length > 0 && (
          <TooltipContent background={background} {...props}>
            {contentTooltip}
          </TooltipContent>
        )}
      </div>
    </Manager>
  );
};

export default Tooltip;
