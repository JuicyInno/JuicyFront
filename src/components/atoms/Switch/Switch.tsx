import React, {
  FC, ReactNode, useState, useEffect
} from 'react';
import './Switch.scss';
import { Size } from '../../../types';
import { classnames } from '../../../utils/classnames';

export interface ISwitchProps {
  onChange?: (f: boolean) => void;
  label?: ReactNode;
  helperText?: ReactNode;
  className?: string;
  value?: boolean;
  disabled?: boolean;
  size?: Size;
  style?: React.CSSProperties
}

const Switch: FC<ISwitchProps> = ({
  label,
  helperText,
  className = '',
  value = false,
  disabled = false,
  onChange,
  size = 'm',
  style
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
      className={classnames('rf-switch', disabled && 'rf-switch--disable', `rf-switch--${size}`, className)}
      onClick={changeState}
      style={style}
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
