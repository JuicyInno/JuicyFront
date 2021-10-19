import React, {
  FC, ReactNode, useEffect, useMemo, useState, useRef, useLayoutEffect
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
  /** Портал в элемент - по умолчанию body */
  portal: boolean;
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
  portal,
  size = 'm',
  color,
  getPopupContainer
}: ITooltipContentProps) => {
  const div = useMemo<HTMLDivElement>(() => document.createElement('div'), []);

  /** При маунте добавляем модалку. При дестрое - удаляем. */
  useEffect(() => {
    const container = getPopupContainer();

    container.appendChild(div);

    return () => {
      container.removeChild(div);
    };
  }, [div]);

  rect.y = (rect.y || rect.top) + window.scrollY;
  rect.x = (rect.x || rect.left) + window.scrollX;

  const styles = portal ?
    {
      'top': {
        top: `${rect.y}px`,
        left: `${rect.x + rect.width / 2}px`,
        transform: 'translate(-50%, -100%)'
      },
      'top-start': {
        top: `${rect.y}px`,
        left: `${rect.x + rect.width / 2}px`,
        transform: 'translate(-50%, -100%)'
      },
      'top-end': {
        top: `${rect.y}px`,
        left: `${rect.x + rect.width / 2}px`,
        transform: 'translate(-50%, -100%)'
      },
      'right': {
        top: `${rect.y + rect.height / 2}px`,
        left: `${rect.x + rect.width}px`,
        transform: 'translate(0, -50%)'
      },
      'right-start': {
        top: `${rect.y + rect.height / 2}px`,
        left: `${rect.x + rect.width}px`,
        transform: 'translate(0, -50%)'
      },
      'right-end': {
        top: `${rect.y + rect.height / 2}px`,
        left: `${rect.x + rect.width}px`,
        transform: 'translate(0, -50%)'
      },
      'bottom': {
        top: `${rect.y + rect.height}px`,
        left: `${rect.x + rect.width / 2}px`,
        transform: 'translate(-50%, 0)'
      },
      'bottom-start': {
        top: `${rect.y + rect.height}px`,
        left: `${rect.x + rect.width / 2}px`,
        transform: 'translate(-50%, 0)'
      },
      'bottom-end': {
        top: `${rect.y + rect.height}px`,
        left: `${rect.x + rect.width / 2}px`,
        transform: 'translate(-50%, 0)'
      },
      'left': {
        top: `${rect.y + rect.height / 2}px`,
        left: `${rect.x}px`,
        transform: 'translate(-100%, -50%)'
      },
      'left-start': {
        top: `${rect.y + rect.height / 2}px`,
        left: `${rect.x}px`,
        transform: 'translate(-100%, -50%)'
      },
      'left-end': {
        top: `${rect.y + rect.height / 2}px`,
        left: `${rect.x}px`,
        transform: 'translate(-100%, -50%)'
      }
    } :
    {
      'top': {
        top: '0',
        left: '50%',
        transform: 'translate(-50%, -100%)'
      },
      'top-start': {
        bottom: '100%',
        left: '0',
        top: 'auto',
        paddingLeft: '0'
      },
      'top-end': {
        bottom: ' 100%',
        right: '0',
        top: 'auto',
        left: 'auto',
      },
      'right': {
        top: '50%',
        left: '100%',
        transform: 'translate(0, -50%)'
      },
      'right-start': {
        top: '10%',
        left: '100%',
        transform: 'translate(0, -4%)'
      },
      'right-end': {
        bottom: '0',
        top: 'auto',
        left: '100%'
      },
      'bottom': {
        top: '100%',
        left: '50%',
        transform: 'translate(-50%, 0)'
      },
      'bottom-start': {
        top: '100%',
        left: '0%',
        paddingLeft: '0'
      },
      'bottom-end': {
        right: '0',
        top: '100%',
        left: 'auto',
      },
      'left': {
        top: '50%',
        left: '0',
        transform: 'translate(-100%, -50%)'
      },
      'left-start': {
        top: '0',
        left: '0px',
        transform: 'translate(-100%, 0)'
      },
      'left-end': {
        bottom: '0px',
        top: 'auto',
        right: '100%',
        left: 'auto',
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

  const isPortal = portal ? 'rf-tooltip__inner--portal' : '';

  const tooltip = (
    <div
      className={classnames('rf-tooltip__content-wrapper', `rf-tooltip--${color}`)}
      onWheel={stopPropagationWheel}
      style={{
        ...styles[position],
        [padding[position]]: '8px'
      }}>
      <div className={`rf-tooltip__content ${className}`}>
        <div
          data-testid={portal ? 'portal' : ''}
          className={
            `rf-tooltip__inner rf-tooltip__inner--${position}
            ${isPortal} ${sizeClass[size]}`
          }>
          {children}
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
  /** Портал в элемент - по умолчанию body */
  portal?: boolean;
  /** Цвет тултипа */
  color?: 'default' | 'white' | 'primary';
  /** Размер тултипа */
  size?: 'm' | 'l'
}

function setRef<Instance = null>(ref: React.MutableRefObject<Instance> | React.RefCallback<Instance> | null, instance: Instance) {
  if (typeof ref === 'function') {
    ref(instance);
  } else if (ref) {
    ref.current = instance;
  }
}

const Tooltip: FC<ITooltipProps> = ({
  open: openProp,
  onOpen,
  onClose,
  children,
  position = 'right',
  className = '',
  portal = false,
  color = 'default',
  size = 'm',
  getPopupContainer = () => document.body
}: ITooltipProps) => {
  const isControlled = typeof openProp !== 'undefined';
  const isPortal = portal && React.isValidElement(children[0]);

  const [open, setOpen] = useState(isControlled ? openProp : false);
  const [tooltipRect, setTooltipRect] = useState<DOMRect | null>(null);
  const anchorRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!!anchorRef.current) {
      setTooltipRect(anchorRef.current.getBoundingClientRect());
    }

  }, [anchorRef.current]);

  const onMouseEnter = (e: React.MouseEvent) => {
    const child = isPortal ? e.currentTarget : e.currentTarget.firstElementChild;

    if (child) {
      setTooltipRect(child.getBoundingClientRect());
    }

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
      portal={portal}
      size={size}
      color={color}
      getPopupContainer={getPopupContainer}
    >
      {children[1]}
    </TooltipContent>
  );

  if (isPortal) {
    const child = children[0] as React.ReactElement;

    const childProps = {
      ...child.props,
      onMouseEnter: (event: React.MouseEvent) => {
        child.props?.onMouseEnter?.(event);
        onMouseEnter(event);
      },
      onMouseLeave: (event: React.MouseEvent) => {
        child.props?.onMouseLeave?.(event);
        onMouseLeave(event);
      },
      ref: (ref: HTMLElement) => {
        setRef(child.props.ref, ref);
        setRef(anchorRef, ref);
      }
    };

    return (
      <>
        {React.cloneElement(
          child,
          childProps
        )}
        {tooltipContent}
      </>
    );
  }

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
