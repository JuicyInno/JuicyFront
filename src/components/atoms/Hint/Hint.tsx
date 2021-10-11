import React, { ReactNode } from 'react';
import './Hint.scss';
import { VariantClassic } from '../../../types';
import { Info } from '../../../index';

export interface IHintProps {
  /** Основное сообщение*/
  children?: ReactNode | string;
  /** Заголовок*/
  title?: ReactNode | string;
  /** Текст кнопки*/
  button?: ReactNode;
  /** Дополнительный класс */
  className?: string;
  /** Цвет сообщения */
  variant?: VariantClassic;
  /** Иконка */
  icon?: 'info';
  /** Максимальная ширина */
  maxWidth?: string;
}

const Hint: React.FC<IHintProps> = ({
  children,
  button,
  className = '',
  variant = 'default',
  icon,
  title,
  maxWidth = '648px',
}: IHintProps) => {

  return (
    <div style={{ maxWidth }} className={`rf-hint__wrapper rf-hint__${variant} ${className} `}>
      {icon === 'info' &&
        <div className='rf-hint__icon'>
          <Info />
        </div>
      }
      <div className='rf-hint__body'>
        {title && <div className='rf-hint__title-text'> {title}</div>}
        {children && <div className='rf-hint__message'> {children} </div>}
        {button && <div className='rf-hint__button'> {button} </div>}
      </div>
    </div>
  );
};


export default Hint;
