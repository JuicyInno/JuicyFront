import React, {
  FC, ReactNode, useCallback, useEffect, useMemo, useState, useRef, useLayoutEffect
} from 'react';
import './Tooltip.scss';
import { createPortal } from 'react-dom';
import { TooltipPosition } from '../../../types/projects.types';
import { Close } from '../../../index';

interface ITooltipContentProps {
  rect: DOMRect;
  children: ReactNode | ReactNode[];
  position: TooltipPosition;
  /** Дополнительный класс */
  className?: string;
  portal: boolean;
  disposable: boolean;
  withClosing: boolean;
  onClose: () => void;
}

const TooltipContent: FC<ITooltipContentProps> = ({
  rect,
  children,
  position,
  className,
  portal,
  onClose,
  disposable,
  withClosing
}: ITooltipContentProps) => {
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

  const closingClass = withClosing ? 'rf-tooltip__inner--closing' : '';

  const tooltip = (
    <div
      className='rf-tooltip__content-wrapper'
      onWheel={stopPropagationWheel}
      style={{
        ...styles[position],
        [padding[position]]: '8px'
      }}>
      <div className={`rf-tooltip__content ${className}`}>
        <div className={`rf-tooltip__inner rf-tooltip__inner--${position} ${closingClass}`}>
          {children}

          {withClosing && <Close onClick={onClose} className={'rf-tooltip__close'} />}
        </div>

      </div>
    </div >
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
  background?: 'default' | 'white' | 'primary';
  /** Изначально открытый тултип*/
  disposable?: boolean,
  /** Показывать иконку закрытия*/
  withClosing?: boolean,
}

const Tooltip: FC<ITooltipProps> = ({
  children,
  position = 'right',
  isVisible = true,
  className = '',
  portal = false,
  background = 'default',
  disposable = false,
  withClosing = false
}: ITooltipProps) => {
  const [tooltipRect, setTooltipRect] = useState<DOMRect | null>(null);
  const tooltipRef = useRef<HTMLHeadingElement>(null);

  const onScrollElementScroll = useCallback(() => {
    if (!disposable) {
      setTooltipRect(null);
    }
  }, []);

  useLayoutEffect(() => {
    if (disposable && !!tooltipRef.current) {
      setTooltipRect(tooltipRef.current.getBoundingClientRect());
    }

  }, [tooltipRef]);

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

    if (tooltipRef.current) {
      addListener(true);
      setTooltipRect(tooltipRef.current.getBoundingClientRect());
    }
  };

  const onMouseLeave = () => {
    if (!disposable) {
      addListener(false);
      setTooltipRect(null);
    }
  };

  const onClose = () => {
    addListener(false);
    setTooltipRect(null);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      ref={tooltipRef}
      className={`rf-tooltip rf-tooltip--${background}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={stopPropagation}
      onMouseUp={stopPropagation}>
      {children[0]}
      {((tooltipRect && isVisible && !disposable) || (tooltipRect && disposable)) && (
        <TooltipContent
          className={className}
          disposable={disposable}
          position={position}
          rect={tooltipRect}
          portal={portal}
          withClosing={withClosing}
          onClose={onClose}>
          {children[1]}
        </TooltipContent>
      )
      }
    </div >
  );
};

export default Tooltip;
