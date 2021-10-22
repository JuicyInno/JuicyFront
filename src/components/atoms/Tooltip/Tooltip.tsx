import React, {
  FC, ReactNode, useMemo, useState, useRef, useLayoutEffect
} from 'react';
import './Tooltip.scss';
import { createPortal } from 'react-dom';
import { TooltipPosition } from '../../../types/projects.types';
import { sizeClass } from '../../../utils/helpers';
import { Size } from '../../../types';
import { classnames } from '../../../utils/classnames';

interface ITooltipContentProps {
  rect: DOMRect;
  /** Тело тултипа */
  children: ReactNode | ReactNode[];
  /** Позиция тултипа */
  position: TooltipPosition;
  /** Дополнительный класс */
  className?: string;
  /** Размер тултипа */
  size?: Size;
  /** Цвет тултипа */
  color?: 'default' | 'white' | 'primary';
  /** Кастомный контейнер для тултипа */
  getPopupContainer: () => HTMLElement;
}

const TooltipContent: FC<ITooltipContentProps> = ({
  rect,
  children,
  position,
  className,
  size = 'm',
  color,
  getPopupContainer,
}: ITooltipContentProps) => {
  const currentRectY = useMemo(() => (rect.y || rect.top), []);
  const currentRectX = useMemo(() => (rect.x || rect.left), []);

  const styles =
  {
    'top': {
      top: `${currentRectY}px`,
      left: `${currentRectX + rect.width / 2}px`,
      transform: 'translate(-50%, -100%)'
    },
    'top-start': {
      top: `${currentRectY - 10}px`,
      left: `${currentRectX - 20}px`,
      transform: 'translate(0, -100%)'
    },
    'top-end': {
      top: `${currentRectY - 10}px`,
      left: `${currentRectX + rect.width}px`,
      transform: 'translate(-100%, -100%)'
    },
    'right': {
      top: `${currentRectY + rect.height / 2}px`,
      left: `${currentRectX + rect.width}px`,
      transform: 'translate(0, -50%)'
    },
    'right-start': {
      top: `${currentRectY - 10}px`,
      left: `${currentRectX + rect.width}px`,
    },
    'right-end': {
      top: `${currentRectY - rect.height + 20}px`,
      left: `${currentRectX + rect.width}px`,
      transform: 'translate(0, -50%)'
    },
    'bottom': {
      top: `${currentRectY + rect.height}px`,
      left: `${currentRectX + rect.width / 2}px`,
      transform: 'translate(-50%, 0)'
    },
    'bottom-start': {
      top: `${currentRectY + rect.height}px`,
      left: `${currentRectX - 20}px`,
    },
    'bottom-end': {
      top: `${currentRectY + rect.height}px`,
      left: `${currentRectX + rect.width}px`,
      transform: 'translate(-100%, 0)'
    },
    'left': {
      top: `${currentRectY + rect.height / 2}px`,
      left: `${currentRectX - 12}px`,
      transform: 'translate(-100%, -50%)'
    },
    'left-start': {
      top: `${currentRectY - 10}px`,
      left: `${currentRectX - 12}px`,
      transform: 'translate(-100%, 0%)'
    },
    'left-end': {
      top: `${currentRectY}px`,
      left: `${currentRectX - 12}px`,
      transform: 'translate(-100%,-70%)'
    }
  };

  const padding = {
    'top': 'paddingBottom',
    'top-start': 'paddingBottom',
    'top-end': 'paddingBottom',
    'right': 'paddingLeft',
    'right-start': 'paddingLeft',
    'right-end': 'paddingLeft',
    'bottom': 'paddingTop',
    'bottom-start': 'paddingTop',
    'bottom-end': 'paddingTop',
    'left': 'paddingRight',
    'left-start': 'paddingRight',
    'left-end': 'paddingRight',
  };

  const stopPropagationWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
  };

  const tooltip = (
    <div
      className={classnames('rf-tooltip__content-wrapper', `rf-tooltip--${color}`)}
      data-testid='tooltip__content-wrapper'
      onWheel={stopPropagationWheel}
      style={{
        ...styles[position],
        [padding[position]]: '8px'
      }}
    >
      <div className={`rf-tooltip__content ${className}`} data-testid='tooltip__content'>
        <div
          data-testid='tooltip__inner'
          className={
            `rf-tooltip__inner rf-tooltip__inner--${position} ${sizeClass[size]}`
          }>
          {children}
        </div>

      </div>
    </div >
  );

  return createPortal(tooltip, getPopupContainer());
};

// ---------------------------------------------------------------------------------------------------------------------
/** Основной компонент на экспорт. */
// ---------------------------------------------------------------------------------------------------------------------

export interface ITooltipProps {
  /** Состояние тултипа (открыт/закрыт) */
  open?: boolean;
  /** Вызывается при закрытии тултипа */
  onClose?: (e: React.MouseEvent) => void;
  /** Вызывается при открытии тултипа */
  onOpen?: (e: React.MouseEvent) => void;
  /** Кастомный контейнер для тултипа */
  getPopupContainer?: () => HTMLElement;
  /** [1] Элемент, на который наводим, [2] Элемент с подсказкой */
  children: [ReactNode, ReactNode];
  /** Позиция тултипа */
  position?: TooltipPosition;
  /** Дополнительный класс */
  className?: string;
  /** Цвет тултипа */
  color?: 'default' | 'white' | 'primary';
  /** Размер тултипа */
  size?: 'm' | 'l'
}


const Tooltip: FC<ITooltipProps> = ({
  open: openProp,
  onOpen,
  onClose,
  children,
  position = 'right',
  className = '',
  color = 'default',
  size = 'm',
  getPopupContainer = () => document.body,
}: ITooltipProps) => {
  const isControlled = typeof openProp !== 'undefined';
  const [open, setOpen] = useState(isControlled ? openProp : false);
  const [tooltipRect, setTooltipRect] = useState<DOMRect | null>(null);
  const anchorRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!!anchorRef.current) {
      setTooltipRect(anchorRef.current.getBoundingClientRect());
    }
  }, []);

  const onMouseEnter = (e: React.MouseEvent) => {
    const child = e.currentTarget.firstElementChild;

    if (onOpen) {
      onOpen(e);
    }

    setOpen(true);
  };

  const onMouseLeave = (e: React.MouseEvent) => {
    if (onClose) {
      onClose(e);
    }

    setOpen(false);
  };

  const isOpen = !!tooltipRect && (isControlled ? openProp : open);

  const tooltipContent = isOpen && (
    <TooltipContent
      className={className}
      position={position}
      rect={tooltipRect}
      size={size}
      color={color}
      getPopupContainer={getPopupContainer}
    >
      {children[1]}
    </TooltipContent>
  );

  return (
    <div
      // @ts-ignore
      ref={anchorRef}
      className='rf-tooltip'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children[0]}
      {tooltipContent}
    </div >
  );
};

export default Tooltip;
