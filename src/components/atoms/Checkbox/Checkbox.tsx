import React, { forwardRef, InputHTMLAttributes } from 'react';
import './Checkbox.scss';
import { AllSuccess, AllReduce } from '../../../indexIcon';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Лейбл */
  label?: React.ReactNode;
  /** Значение */
  value?: string;
  /**
   * Отображение иконки
   * @default true
   *  */
  icon?: boolean;
  /**
   * Вертикальное выравнивание
   * @default 'flex-start'
   *  */
  align?: 'flex-start' | 'center' | 'flex-end';
  /**
   * Если дочерние чекбоксы чекнуты, флаг равен true
   * @default false
   *  */
  halfChecked?: boolean;
  /**
   * Положение чекбокса
   *  @default 'left'
   * */
  position?: 'left' | 'right';
  /**
   * Круглый чекбокс
   * @default false
   */
  round?: boolean;
  /**
   *  100% ширины
   * @default false
   *  */
  fullWidth?: boolean;
  /**
   * Лейбл - текст
   * @default '''
   *  */
  titleAtt?: string;
}

const Checkbox = forwardRef<HTMLLabelElement | null, ICheckboxProps>(({
  label,
  value,
  icon = true,
  align = 'flex-start',
  halfChecked = false,
  position = 'left',
  round = false,
  fullWidth = false,
  titleAtt = '',
  ...props
}: ICheckboxProps, ref) => {
  const roundClass = round ? 'rf-checkbox__check--round' : '';
  const fullWidthClass = fullWidth ? 'rf-checkbox__check--fullWidth' : '';

  const disabledClass = props.disabled ? 'disabled' : '';
  const alignClass: Record<string, string> = {
    'flex-start': 'rf-checkbox--flex-start',
    'center': 'rf-checkbox--center',
    'flex-end': 'rf-checkbox--flex-end',
  };
  const showIconClass = icon ? '' : 'rf-checkbox__label--no-icon';
  const positionClass = position === 'left' ? 'rf-checkbox--left' : 'rf-checkbox--right';

  return (
    <label
      ref={ref}
      className={`rf-checkbox ${props.className || ''} ${disabledClass} ${alignClass[align]} ${positionClass} ${fullWidthClass}`}
    >
      <input
        {...props}
        type='checkbox'
        className={`rf-checkbox__input ${halfChecked ? 'rf-checkbox__input--half-checked' : ''}`}
        value={value}
      />

      {!!icon && <span className={`rf-checkbox__check ${roundClass}`}>
        <span className='rf-checkbox__mark'>
          {halfChecked ? <AllReduce /> : <AllSuccess />}
        </span>
      </span>}

      {label && <div title={titleAtt} className={`rf-checkbox__label ${showIconClass}`} tabIndex={-1}>{label}</div>}
    </label>
  );
});

export default Checkbox;
