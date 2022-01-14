import React, { ReactNode } from 'react';
import './Hint.scss';
import { VariantClassic } from '../../../types';
import { Info } from '../../../indexIcon';

export interface IHintProps {
  /** Основное сообщение*/
  children?: ReactNode | string;
  /** Заголовок*/
  title?: ReactNode | string;
  /** Текст кнопки*/
  button?: ReactNode;
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
  variant = 'default',
  icon,
  title,
  maxWidth = '648px',
}: IHintProps) => {
  return (
    <div style={{ maxWidth }} className={`rf-hint__wrapper rf-hint__${variant}`}>
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
