import React, {
  FC, ReactNode, useState, useEffect
} from 'react';
import './Switch.scss';
import { classnames } from '../../../utils/classnames';

export interface ISwitchProps {
  /** Функция вызываемая при изменении значения*/
  onChange?: (f: boolean) => void;
  /** Основной текст*/
  label?: ReactNode;
  /** Второстепенный текст*/
  helperText?: ReactNode;
  /** Значение по умолчанию
   * @default false
  */
  value?: boolean;
  /** залочен или нет
   * @default false
  */
  disabled?: boolean;
  /** размер
   * @default m
  */
  size?: 's' | 'm';
  /** Перевернуть положение контента
   * @default false
   */
  reverse?: boolean;
  /** Устанавливает компонент во всю ширину и добавляет расстояние между текстом и иконкой
   * @default false
   */
  between?: boolean;
}

const Switch: FC<ISwitchProps> = ({
  label,
  helperText,
  value = false,
  disabled = false,
  onChange,
  size = 'm',
  reverse = false,
  between = false
}: ISwitchProps) => {
  const [s, toggle] = useState<boolean>(value);

  useEffect(() => {
    toggle(value);
  }, [value]);

  const changeState = () => {
    if (!disabled) {
      onChange && onChange(!s);
      toggle(!s);
    }
  };

  return (
    <div
      className={classnames(
        'rf-switch',
        `rf-switch--${size}`,
        disabled && 'rf-switch--disable',
        reverse && 'rf-switch--reverse',
        between && 'rf-switch--between'
      )}
      onClick={changeState}
    >
      <div className={`rf-switch__toggle ${s ? 'on' : 'off'}`}>
        <div className='rf-switch__circle' />
      </div>

      <div className='rf-switch__content'>
        {label && <p className='rf-switch__label'>{label}</p>}
        {helperText && <p className='rf-switch__helper-text'>{helperText}</p>}
      </div>
    </div>
  );
};

export default Switch;
