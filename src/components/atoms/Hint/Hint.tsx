import React, { ReactNode } from 'react';
import './Hint.scss';
import { VariantClassic } from '../../../types';

import {
  AllClose, StatusInfoFill, StatusError, StatusRelease
} from '../../../indexIcon';

export interface IHintProps {
  /** Основное сообщение */
  children?: ReactNode | string;
  /** Заголовок */
  title?: ReactNode | string;
  /** Текст кнопки */
  button?: ReactNode;
  /** Цвет сообщения */
  variant?: Exclude<VariantClassic, 'white'>;
  /** Сопоставление цвета с иконкой по умолчанию. */
  iconMapping?: Record<Exclude<VariantClassic, 'white'>, ReactNode>;
  /** Использовать собственную иконку. Если передать `false` то иконка скроется. */
  icon?: ReactNode;
  /** Максимальная ширина */
  maxWidth?: string;
  onClose?: () => void;
}

const ICON_MAPPING: Record<Exclude<VariantClassic, 'white'>, ReactNode> = {
  'default': <StatusInfoFill />,
  'red': <StatusError />,
  'green': <StatusRelease />,
  'blue': <StatusInfoFill />,
  'yellow': <StatusInfoFill />,
};

// FIXME: Elements must have sufficient color contrast
const Hint: React.FC<IHintProps> = ({
  children,
  button,
  variant = 'default',
  iconMapping = ICON_MAPPING,
  icon,
  title,
  maxWidth = '648px',
  onClose
}: IHintProps) => {
  return (
    <div style={{ maxWidth }} className={`rf-hint rf-hint--${variant}`}>
      {icon !== false &&
        <div className='rf-hint__icon'>
          {icon || iconMapping[variant]}
        </div>
      }
      <div className='rf-hint__body'>
        {title && <div className='rf-hint__title'>{title}</div>}
        {children && <div className='rf-hint__message'> {children} </div>}
        {button && <div className='rf-hint__button'>{button}</div>}
      </div>
      {!!onClose && (
        <button className='rf-hint__close' onClick={onClose} aria-label='Закрыть'>
          <AllClose size='xxs' />
        </button>
      )}
    </div>
  );
};


export default Hint;
