import React, {
  ChangeEvent, FC, HTMLProps, useEffect, useState
} from 'react';
import './Timepicker.scss';
import InputMask from 'react-input-mask';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import TimeElement from '../../atoms/TimeElement';
import Menu from '../Menu';
import { Time } from '../../../index';

export interface ITimepickerProps extends Omit<HTMLProps<HTMLInputElement>, 'ref'> {
  /** Css класс */
  className?: string;
  /** Заблокирован выбор или нет */
  disabled?: boolean;
  /** Начальное значение */
  initialValue?: string;
  /** Функция при изменении значения */
  onChangeValue?: (value: string, id: string) => void;
  /** Минимальное значение 00:00 */
  min?: string;
  /** Максимальное значение 00:00 */
  max?: string;
}

const Timepicker: FC<ITimepickerProps> = ({
  className,
  initialValue,
  disabled,
  onChangeValue,
  min = '00:00',
  max = '24:00',
  ...props
}: ITimepickerProps) => {
  const [time, setTime] = useState(initialValue);

  useEffect(() => {
    setTime(initialValue);
  }, [initialValue]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTime(val);

    if (val && !~val.indexOf('_')) {
      onChangeValue && onChangeValue(val, props.id || '');
    }
  };

  const updateTime = (newTime: string) => {
    setTime(newTime);
    onChangeValue && onChangeValue(newTime, props.id || '');
  };

  const content = <TimeElement updateTime={updateTime} value={initialValue} min={min} max={max}/>;

  return (
    <div className={`rf-timepicker__wrapper ${className || ''} ${disabled ? 'rf-timepicker__disabled' : ''}`}>
      <InputMask
        mask={[
          /[0-2]/,
          /[0-9]/,
          ':',
          /[0-5]/,
          /[0,5,8]/
        ]}
        value={time}
        disabled={disabled}
        alwaysShowMask={true}
        readOnly={props.readOnly}
        onChange={onChange}>
        <Input {...props} />
      </InputMask>
      <div className='rf-timepicker__menu'>
        <Menu position='right' content={content}>
          <Button buttonType='text' disabled={disabled} >
            <Time className={'rf-timepicker__icon'}/>
          </Button>
        </Menu>
      </div>
    </div>
  );
};

export default Timepicker;
