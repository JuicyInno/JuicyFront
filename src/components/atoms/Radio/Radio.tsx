import React, {
  FC, InputHTMLAttributes, ReactNode
} from 'react';
import './Radio.scss';
import { Variant } from '../../../types';

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Лейбл */
  label: ReactNode;
  /** Значение */
  value: string;
  /** Отображение иконки */
  icon?: boolean;
  /**
   * Вариант
   * @deprecated
   */
  variant?: Variant;
  /**
   * 100% ширины
   * @default true
   */
  fullWidth?: boolean;
}

const Radio: FC<IRadioProps> = ({
  label, value, icon = true, fullWidth = true, ...props
}: IRadioProps) => {
  return (
    <label
      className={`
        rf-radio ${props.className || ''} 
        ${props.disabled ? 'disabled' : ''} 
        ${fullWidth ? 'rf-radio--fullwidth' : ''}
      `}
    >
      <input {...props} type='radio' className='rf-radio__input' value={value} />

      {!!icon && (
        <span className='rf-radio__circle'>
          <span className='rf-radio__mark'/>
        </span>
      )}

      <span className='rf-radio__label'>{label}</span>
    </label>
  );
};

export default Radio;
