import React, {
  FC, ReactNode, useCallback, useEffect, useMemo, useState
} from 'react';
import './Tooltip.scss';
import { createPortal } from 'react-dom';
import { TooltipPosition } from '../../../types/projects.types';
import { extractTextFromHTML } from '../../../utils/helpers';
import { renderToStaticMarkup } from 'react-dom/server';

interface ITooltipContentProps {
  rect: DOMRect;
  children: ReactNode | ReactNode[];
  position: TooltipPosition;
  /** Дополнительный класс */
  className?: string;
  portal: boolean;

  /**
   * Цвет тултипа
   * @default default
   *
   */
  background: 'default' | 'white';
}

const TooltipContent: FC<ITooltipContentProps> = ({ rect, children, position, className, portal, background }: ITooltipContentProps) => {
  const div = useMemo<HTMLDivElement>(() => document.createElement('div'), []);

  /** При маунте добавляем модалку. При дестрое - удаляем. */
  useEffect(() => {
    /** Контейнер для модалки */
    document.body.appendChild(div);

    return () => {
      document.body.removeChild(div);
    };
  }, [div]);

  rect.y = (rect.y || rect.top) + window.scrollY;
  rect.x = (rect.x || rect.left) + window.scrollX;

  const styles = portal ?
    {
      top: {
        top: `${rect.y}px`,
        left: `${rect.x + rect.width / 2}px`,
        transform: 'translate(-50%, -100%)'
      },
      right: {
        top: `${rect.y + rect.height / 2}px`,
        left: `${rect.x + rect.width}px`,
        transform: 'translate(0, -50%)'
      },
      bottom: {
        top: `${rect.y + rect.height}px`,
        left: `${rect.x + rect.width / 2}px`,
        transform: 'translate(-50%, 0)'
      },
      left: {
        top: `${rect.y + rect.height / 2}px`,
        left: `${rect.x}px`,
        transform: 'translate(-100%, -50%)'
      }
    } :
    {
      top: {
        top: '0',
        left: '50%',
        transform: 'translate(-50%, -100%)'
      },
      right: {
        top: '50%',
        left: '100%',
        transform: 'translate(0, -50%)'
      },
      bottom: {
        top: '100%',
        left: '50%',
        transform: 'translate(-50%, 0)'
      },
      left: {
        top: '50%',
        left: '0',
        transform: 'translate(-100%, -50%)'
      }
    };

  const padding = {
    top: 'paddingBottom',
    right: 'paddingLeft',
    bottom: 'paddingTop',
    left: 'paddingRight'
  };

  const stopPropagationWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
  };
  const SvgImageUnion = (color: 'default' | 'white' = 'default', position: TooltipPosition = 'bottom') => {
    return <div className={`rf-tooltip__content-union--${position}`}>
      {color === 'white' ? <svg width='25' height='15' viewBox='0 0 25 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M24.5 0H0.5V8H1.09688C2.00516 8 2.8864 8.29089 3.59566 8.82483L11.2506 14.5876C11.981 15.1375 13.019 15.1375 13.7494 14.5876L21.4043 8.82483C22.1136 8.29089 22.9948 8 23.9031 8H24.5V0Z' fill='white' />
      </svg> : <svg width='25' height='15' viewBox='0 0 25 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M24.5 0H0.5V8H1.09688C2.00516 8 2.8864 8.29089 3.59566 8.82483L11.2506 14.5876C11.981 15.1375 13.019 15.1375 13.7494 14.5876L21.4043 8.82483C22.1136 8.29089 22.9948 8 23.9031 8H24.5V0Z' fill='#8A96A8' />
      </svg>
      }
    </div>;
  };


  const tooltip = (
    <div
      className='rf-tooltip__content-wrapper'
      onWheel={stopPropagationWheel}
      style={{
        ...styles[position],
        [padding[position]]: '8px'
      }}>
      <div className={`rf-tooltip__content rf-tooltip__content--${background} ${className}`}>
        <div className={`rf-tooltip__inner rf-tooltip__inner--${position}`}>
          {children}
          {SvgImageUnion(background, position)}
        </div>
      </div>
    </div>
  );

  return portal ? createPortal(tooltip, div) : tooltip;
};

// ---------------------------------------------------------------------------------------------------------------------
/** Основной компонент на экспорт. */
// ---------------------------------------------------------------------------------------------------------------------

export interface ITooltipProps {
  /** [1] Элемент, на который наводим, [2] Элемент с подсказкой */
  children: [ReactNode, ReactNode];
  /** Позиция тултипа */
  position?: TooltipPosition;
  /** Отключить показ самого тултипа */
  isVisible?: boolean;
  /** Дополнительный класс */
  className?: string;
  /** Портал в элемент - по умолчанию body */
  portal?: boolean;
  /** Цвет тултипа */
  background?: 'default' | 'white';
}

const Tooltip: FC<ITooltipProps> = ({
  children,
  position = 'right',
  isVisible = true,
  className = '',
  portal = false,
  background = 'default'
}: ITooltipProps) => {
  const [tooltipRect, setTooltipRect] = useState<DOMRect | null>(null);

  const onScrollElementScroll = useCallback(() => {
    setTooltipRect(null);
  }, []);

  const addListener = (add: boolean) => {
    if (add) {
      window.addEventListener('mousewheel', onScrollElementScroll);
    } else {
      window.removeEventListener('mousewheel', onScrollElementScroll);
    }
  };

  const onMouseEnter = (e: React.MouseEvent) => {
    const child = e.currentTarget.firstElementChild;

    if (child) {
      addListener(true);
      setTooltipRect(child.getBoundingClientRect());
    }
  };

  const onMouseLeave = () => {
    addListener(false);
    setTooltipRect(null);
  };
  // todo: отключил тк ломало сертификаты
  const stopPropagation = (_e: React.MouseEvent) => {
    // e.stopPropagation();
  };


  const text: string = useMemo(() => {
    try {
      // @ts-ignore
      return extractTextFromHTML(renderToStaticMarkup(children[1]));
    } catch {
      return '';
    }
  }, [children[1]]);
  return (
    <div
      className={`rf-tooltip rf-tooltip--${background}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={stopPropagation}
      onMouseUp={stopPropagation}>
      {children[0]}
      {tooltipRect && isVisible && text.length > 0 && (
        <TooltipContent className={className} position={position} rect={tooltipRect} portal={portal} background={background}>
          {children[1]}
        </TooltipContent>
      )}
    </div>
  );
};

export default Tooltip;
