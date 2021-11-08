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
  /** Портал в элемент - по умолчанию body */
  portal?: boolean;
}

const TooltipContent: FC<ITooltipContentProps> = ({
  rect,
  children,
  position,
  className,
  size = 'm',
  color,
  getPopupContainer,
  portal
}: ITooltipContentProps) => {
  const currentRectY = useMemo(() => (rect.y || rect.top), []);
  const currentRectX = useMemo(() => (rect.x || rect.left), []);

  const styles = portal ?
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

  const tooltip = (
    <div
      className={classnames('rf-tooltip__content-wrapper', `rf-tooltip__content--${color}`)}
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

          <svg className='rf-tooltip__arrow' width='26' height='10' viewBox='0 0 26 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clip-path='url(#clip0_1:2)'>
              <g filter='url(#filter0_d_1:2)'>
                <path d='M25 -8H1V0H1.59688C2.50516 0 3.3864 0.290891 4.09566 0.824826L11.7506 6.58759C12.481 7.13747 13.519 7.13747 14.2494 6.58759L21.9043 0.824826C22.6136 0.290891 23.4948 0 24.4031 0H25V-8Z' fill='currentColor' />
                <path fillRule='evenodd' clipRule='evenodd' d='M2 -1V-0.984499C2.97712 -0.909226 3.91703 -0.561341 4.69709 0.0259066L12.352 5.78867C12.7263 6.07044 13.2737 6.07044 13.648 5.78867L21.3029 0.0259066C22.083 -0.561341 23.0229 -0.909226 24 -0.984499V-1L25 -1V0H24.4031C23.4948 0 22.6136 0.290891 21.9043 0.824826L14.2494 6.58759C13.519 7.13747 12.481 7.13747 11.7506 6.58759L4.09566 0.824826C3.3864 0.290891 2.50516 0 1.59688 0H1V-1L2 -1Z' fill='currentColor' />
              </g>
            </g>
            <defs>
              <filter id='filter0_d_1:2' x='-1' y='-10' width='28' height='19' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                <feOffset />
                <feGaussianBlur stdDeviation='3' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1:2' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1:2' result='shape' />
              </filter>
              <clipPath id='clip0_1:2'>
                <rect width='26' height='10' fill='currentColor' />
              </clipPath>
            </defs>
          </svg>


          {/* <svg className='rf-tooltip__arrow' width='25' height='15' viewBox='0 0 25 15' fill='none' xmlns='http://www.w3.org/2000/svg'>*/}
          {/*  <path d='M24.5 0H0.5V8H1.09688C2.00516 8 2.8864 8.29089 3.59566 8.82483L11.2506 14.5876C11.981 15.1375 13.019 15.1375 13.7494 14.5876L21.4043 8.82483C22.1136 8.29089 22.9948 8 23.9031 8H24.5V0Z' fill='currentColor'/>*/}
          {/*  <path fillRule='evenodd' clipRule='evenodd' d='M1.5 7V7.0155C2.47712 7.09077 3.41703 7.43866 4.19709 8.02591L11.852 13.7887C12.2263 14.0704 12.7737 14.0704 13.148 13.7887L20.8029 8.02591C21.583 7.43866 22.5229 7.09077 23.5 7.0155V7H24.5V8H23.9031C22.9948 8 22.1136 8.29089 21.4043 8.82483L13.7494 14.5876C13.019 15.1375 11.981 15.1375 11.2506 14.5876L3.59566 8.82483C2.8864 8.29089 2.00516 8 1.09688 8H0.5V7H1.5Z' fill='currentColor'/>*/}
          {/* </svg>*/}
        </div>
      </div>
    </div >
  );

  return portal ? createPortal(tooltip, getPopupContainer()) : tooltip;
};

// ---------------------------------------------------------------------------------------------------------------------
/** Основной компонент на экспорт. */
// ---------------------------------------------------------------------------------------------------------------------

export interface ITooltipProps {
  /** Если false - тултип отключен. Если true | undefined - тултип работает как обычно */
  isVisible?: boolean;
  /** Состояние тултипа (открыт/закрыт) */
  open?: boolean;
  /** Вызывается при закрытии тултипа */
  onClose?: (e: React.MouseEvent) => void;
  /** Вызывается при открытии тултипа */
  onOpen?: (e: React.MouseEvent) => void;
  /** [1] Элемент, на который наводим, [2] Элемент с подсказкой */
  children: [ReactNode, ReactNode];
  /** Позиция тултипа */
  position?: TooltipPosition;
  /** Дополнительный класс */
  className?: string;
  /** Цвет тултипа */
  color?: 'default' | 'white' | 'primary';
  /** Размер тултипа */
  size?: 'm' | 'l';
  /** Портал в элемент - по умолчанию body */
  portal?: boolean;
  /** Кастомный контейнер для портала */
  getPopupContainer?: () => HTMLElement;
}


const Tooltip: FC<ITooltipProps> = ({
  isVisible,
  open: openProp,
  onOpen,
  onClose,
  children,
  position = 'right',
  className = '',
  color = 'default',
  size = 'm',
  getPopupContainer = () => document.body,
  portal,
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

  const tooltipContent = isOpen && isVisible !== false && (
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
      portal={portal}
    >
      {children[0]}
      {tooltipContent}
    </div >
  );
};

export default Tooltip;
