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
  /** Значение по умолчанию*/
  value?: boolean;
  /** залочен или нет*/
  disabled?: boolean;
  /** размер*/
  size?: 's' | 'm';

}

const Switch: FC<ISwitchProps> = ({
  label,
  helperText,
  value = false,
  disabled = false,
  onChange,
  size = 'm',

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
      className={classnames('rf-switch', disabled && 'rf-switch--disable', `rf-switch--${size}`)}
      onClick={changeState}
    >
      <div className={`rf-switch__toggle ${s ? 'on' : 'off'}`}>
        <div className='rf-switch__circle' />
      </div>
      {label && <p className='rf-switch__label'>{label}</p>}
      {helperText && <p className='rf-switch__helper-text'>{helperText}</p>}
    </div>
  );
};

export default Switch;
