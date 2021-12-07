import React, {
  FC, ReactNode, useMemo, useState
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
}

const Tooltip: FC<ITooltipProps> = ({
  children,
  isVisible = true,
  background = 'default',
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
        className={`rf-tooltip rf-tooltip--${background}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
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
