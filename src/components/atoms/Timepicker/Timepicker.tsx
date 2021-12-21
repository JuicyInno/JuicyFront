import React, {
  ChangeEvent, FC, HTMLProps, useEffect, useState, useCallback
} from 'react';
import './Timepicker.scss';
import InputMask from 'react-input-mask';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import TimeElement, { getTime } from './TimeElement';
import Menu from '../Menu';
import Close from '../../../assets/icons/Close';
import { classnames } from '../../../utils/classnames';
import Pending from '../../../assets/icons/24px/Status/Pending';

export interface ITimepickerProps extends Omit<HTMLProps<HTMLInputElement>, 'ref'> {
  /** Css класс */
  className?: string;
  /** Заблокирован выбор или нет
   * @default false
   */
  disabled?: boolean;
  /** Переводит инпут в невалидный статус
   * @default false
   */
  invalid?: boolean;
  /** Начальное значение
   * @example 12:00
   */
  initialValue?: string;
  /** Функция при изменении значения */
  onChangeValue?: (value: string, id: string) => void;
  /** Минимальное значение
   * @default 00:00
   */
  min?: string;
  /** Максимальное значение
   * @default 24:00
   */
  max?: string;
  /**
   *  Безрамочный укороченый вариант
   * @default false
   */
  isMinified?: boolean

}

const Timepicker: FC<ITimepickerProps> = ({
  className,
  initialValue = '',
  disabled = false,
  invalid = false,
  onChangeValue,
  min = '00:00',
  max = '24:00',
  isMinified = false,
  ...props
}: ITimepickerProps) => {
  const [time, setTime] = useState(initialValue);

  useEffect(() => {
    setTime(initialValue);
  }, [initialValue]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTime(val);

    if (val && !~val.indexOf('_')) {
      onChangeValue && onChangeValue(val, props.id || '');
    }
  }, [onChangeValue, props.id]);

  const updateTime = useCallback((newTime: string) => {
    setTime(newTime);
    onChangeValue && onChangeValue(newTime, props.id || '');
  }, [onChangeValue, props.id]);

  const onClearValue = useCallback(() => setTime(''), []);

  const content = <TimeElement updateTime={updateTime} value={time} min={min} max={max} />;
  const emptyValue = !time || time === '' || time === '__:__';

  const getMask = useCallback(() => {
    const [hours] = getTime(time);
    const startsWithTwo = hours?.startsWith('2');

    return [
      /[0-2]/,
      startsWithTwo ? /[0-3]/ : /[0-9]/,
      ':',
      /[0-5]/,
      /[0,5,8]/
    ];
  }, [time]);

  return (
    <div className={
      classnames('rf-timepicker__wrapper', className, disabled && 'rf-timepicker--disabled', emptyValue && 'rf-timepicker--empty', isMinified && 'rf-timepicker-minified')
    }>
      <Menu position='right' content={content} >
        <InputMask mask={getMask()} value={time} disabled={disabled} alwaysShowMask={true} readOnly={props.readOnly} onChange={onChange}>
          <Input isBorder={!isMinified} data-testid='rf-timepicker__input' disabled={disabled} invalid={invalid} {...props} />
        </InputMask>

        <div className='rf-timepicker__menu'>
          <Button buttonType='text' className='rf-timepicker__btn' disabled={disabled}>
            {emptyValue ? (
              <Pending className='rf-timepicker__icon rf-timepicker__icon-time' />
            ) : (
              <Close className='rf-timepicker__icon rf-timepicker__icon-close' onClick={onClearValue} />
            )}
          </Button>
        </div>
      </Menu>
    </div>
  );
};

export default Timepicker;
