import React, {
  ReactNode, RefObject, useEffect, useRef, useState
} from 'react';
import './Datepicker.scss';
import { DateFormat, IDateVariants } from './DatepickerCalendar/datepicker.types';
import { DropdownPosition } from '../../../types';
import {
  formatDate, generateMask, getWeekDay, parseToFormat, stringToDate
} from '../../../utils/helpersDatePicker';
import { Manager, Reference } from 'react-popper';
import {
  AllCalendar, ArrowsChevronDown, AllClose
} from '../../../indexNewIcon';
import Input from '../Input';
import InputMask from 'react-input-mask';
import { classnames } from '../../../utils/classnames';
import Dropdown from '../Dropdown';
import DatepickerCalendar from './DatepickerCalendar';

export interface IDatepickerProps<T extends HTMLElement = HTMLDivElement> {
  /** Имя поля */
  name?: string;
  /** Текст Placeholder */
  placeholder?: string;
  /** Значение по умолчанию */
  defaultValue?: Date | string | number;
  /** Скрыть поле */
  disabled?: boolean;
  /** Только для просмотра */
  readOnly?: boolean;
  /** Минимальное значения даты */
  min?: Date | string | number;
  /** Максимальное значения даты */
  max?: Date | string | number;
  /** Функция измекнения значения даты */
  onChange?: (value: IDateVariants, name?: string) => void;
  /** Диапазон
   * @default false
  */
  range?: boolean;
  /** Показывать день недели в инпуте
   * @default false
  */
  showDayOfWeek?: boolean;
  /** Локализация
   * @default ru
   */
  locale?: 'ru' | 'en';
  /** Положение выпадающего меню */
  position?: DropdownPosition;
  /** Формат даты */
  format?: DateFormat;
  /** Ограничения на дни недели 0 - 6 */
  disableWeekDays?: number[];
  /** Кастомная кнопка */
  children?: ReactNode | ReactNode[];
  /** Переводит инпут в невалидный статус */
  invalid?: boolean;
  /**
   * Добавляет инпуту белый фон
   * @default true
   */
  filled?: boolean;
  /** Цвет tooltip */
  tooltipBackground?: 'default' | 'white';
  /** Сыылка на контейнер портала */
  containerRef?: RefObject<T>;
  /**
   *  Добавлять фокус при выборе дат
   * @default false
   *  */
  isFocusBorder?: boolean
}

const Datepicker: React.FC<IDatepickerProps> = ({
  name = 'datepicker',
  locale = 'ru',
  placeholder = locale === 'ru' ? 'Выберите дату' : 'Select date',
  defaultValue,
  min,
  max,
  invalid = false,
  filled = true,
  disabled = false,
  readOnly = false,
  onChange,
  range = false,
  showDayOfWeek = false,
  position = 'bottom-start',
  format = 'dd.mm.yyyy',
  disableWeekDays = [0, 6],
  children,
  tooltipBackground = 'default',
  containerRef,
  isFocusBorder = false
}: IDatepickerProps) => {
  const separator = format[2];

  const [dayOfWeek, setDayOfWeek] = useState<string[]>([]);

  const [minDate, setMinDate] = useState<Date | undefined>(undefined);
  const [maxDate, setMaxDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    setMinDate(min ? parseToFormat(format, min).date : undefined);
  }, [min]);

  useEffect(() => {
    setMaxDate(max ? parseToFormat(format, max).date : undefined);
  }, [max]);

  // -------------------------------------------------------------------------------------------------------------------

  const datepickerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const [showCalendar, toggleCalendar] = useState<boolean>(false);

  const onClose = () => toggleCalendar(false);

  // -------------------------------------------------------------------------------------------------------------------

  const [inputValue, setInputValue] = useState<string>('');

  const validate = (date: string): string => {
    let result = date;


    if (range) {
      let [from, to] = date.split(' - ');
      let fromD = 0;
      let toD = 0;


      if (from) {
        from = from.slice(0, 10);
      }

      if (to) {
        to = to.slice(0, 10);
      }

      if (from && !from.includes('_')) {
        fromD = stringToDate(from, format).getTime();

        if (minDate && fromD < minDate.getTime()) {
          fromD = minDate.getTime();
        }

        if (maxDate && fromD > maxDate.getTime()) {
          fromD = minDate ? minDate.getTime() : maxDate.getTime();
        }

        from = formatDate(fromD, format).date;
      }

      if (to && !to.includes('_')) {
        toD = stringToDate(to, format).getTime();

        if (toD < fromD) {
          toD = fromD + 24 * 3600 * 1000;
        }

        if (maxDate && toD > maxDate.getTime()) {
          toD = maxDate.getTime();
        }

        to = formatDate(toD, format).date;
      }

      if (from || to) {
        result = [from, to].join(' - ');
      }

      if (result === '__.__.____ - __.__.____') {

      }
    } else {
      const d = stringToDate(date, format);

      if (date !== '' && minDate && d.getTime() < minDate.getTime()) {
        result = formatDate(minDate.getTime(), format).date;
      }

      if (maxDate && d.getTime() > maxDate.getTime()) {
        result = formatDate(maxDate.getTime(), format).date;
      }
    }


    return result;
  };

  useEffect(() => {
    if (!defaultValue) {
      return;
    }

    let inputValue = parseToFormat(format, defaultValue).string;

    if (!inputValue.includes('_')) {
      inputValue = validate(parseToFormat(format, defaultValue).string);
    }

    setInputValue(inputValue);
  }, [defaultValue, minDate, maxDate]);

  // -------------------------------------------------------------------------------------------------------------------

  const getReturnValue = (value: string, range: boolean): IDateVariants => {

    if (range) {
      const [from, to] = value.split(' - ');
      const fromD = stringToDate(from, format).getTime();
      const toD = stringToDate(to, format).getTime();
      const fromUTCD = stringToDate(from, format, true).getTime();
      const toUTCD = stringToDate(to, format, true).getTime();

      return {
        value,
        date: {
          from: new Date(fromD),
          to: new Date(toD),
          value: new Date(fromD)
        },
        timestamp: {
          from: fromD,
          to: toD,
          value: fromD,
          utc: {
            from: fromUTCD,
            to: toUTCD,
            value: fromUTCD,
          }
        }
      };
    }

    const date = stringToDate(value, format);
    const dateUTC = stringToDate(value, format, true);

    return {
      date: {
        from: date,
        to: date,
        value: date
      },
      value,
      timestamp: {
        from: date.getTime(),
        to: date.getTime(),
        value: date.getTime(),
        utc: {
          from: dateUTC.getTime(),
          to: dateUTC.getTime(),
          value: dateUTC.getTime(),
        }
      }
    };
  };

  const onDatepickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let result = e.target.value;

    if (range || (result.length === 10 && !result.includes('_'))) {
      result = validate(result);
    }

    setInputValue(result);
  };

  const setValue = (value: string) => {
    setInputValue(validate(value));
  };

  useEffect(() => {
    if (!inputValue.includes('_') && inputValue !== '') {
      const result = getReturnValue(inputValue, range);
      onChange && onChange(result, name);
      fireOnChange();
    } else {
      if (showDayOfWeek) {
        setDayOfWeek([]);
      }
    }
  }, [inputValue, showDayOfWeek]);

  const fireOnChange = () => {
    setTimeout(() => {
      if (inputRef.current) {
        const input = inputRef.current.querySelector('input');

        if (input) {

          let event;

          if (typeof (Event) === 'function') {
            event = new Event('change');
          } else {
            event = document.createEvent('Event');
            event.initEvent('change', true, true);
          }

          input.dispatchEvent(event);
        }
      }
    }, 100);
  };

  // -------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (showDayOfWeek) {
      if (!range) {
        if (!inputValue.includes('_') && inputValue !== '') {
          const result = getReturnValue(inputValue, range);
          const dayFrom = result.date.value.getDay();
          setDayOfWeek([getWeekDay(dayFrom, locale)]);
        }
      } else {
        const [fromValue, toValue] = inputValue.split(' - ');


        if (fromValue && !fromValue.includes('_')) {
          const from = getReturnValue(fromValue, false);
          const dayFrom = from.date.from.getDay();
          setDayOfWeek([getWeekDay(dayFrom, locale)]);
        }

        if (toValue && !toValue.includes('_')) {
          const to = getReturnValue(toValue, false);
          const dayTo = to.date.from.getDay();
          setDayOfWeek([...dayOfWeek, getWeekDay(dayTo, locale)]);
        }
      }
    }
  }, [inputValue, showDayOfWeek, range]);

  // -------------------------------------------------------------------------------------------------------------------

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key.toLowerCase() === 'enter' || e.charCode === 13) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const clearDateRangeHandler = () => {
    setInputValue('');
    const result = getReturnValue('', range);
    onChange && onChange(result, name);
    fireOnChange();
  };

  // -------------------------------------------------------------------------------------------------------------------

  const mask = generateMask(inputValue, format, range, showDayOfWeek, dayOfWeek);

  // -------------------------------------------------------------------------------------------------------------------

  const isCrossChevronPicker = inputValue.split('-').length === 2 && inputValue.split('-')[1].trim() !== '__.__.____';

  return (
    <Manager>
      <div className={classnames('rf-datepicker', isFocusBorder && 'rf-datepicker__focus-border')} ref={datepickerRef}>
        <Reference>
          {(referenceProps) => (
            <div
              {...referenceProps}
              className={classnames('rf-datepicker__input-wrapper', {
                'rf-datepicker__input-wrapper--disabled': disabled,
                'rf-datepicker__input-wrapper--readonly': readOnly,
                'rf-datepicker__input-wrapper--range': range,
              })}
              onClick={() => toggleCalendar(prev => !prev)}
            >
              {
                children || (
                  <InputMask
                    mask={mask}
                    name={name}
                    placeholder={placeholder}
                    value={inputValue}
                    disabled={disabled}
                    readOnly={readOnly}
                    onKeyPress={onKeyPress}
                    onChange={onDatepickerChange}
                  >
                    <Input
                      invalid={invalid}
                      filled={filled}
                      startAdornment={
                        <button onClick={e => e.stopPropagation()} type='button' className='rf-datepicker__calendar-button'>
                          <AllCalendar />
                        </button>
                      }
                      endAdornment={
                        <div className={classnames('rf-datepicker__calendar-chevron', isCrossChevronPicker && 'rf-datepicker__calendar-cross')}>
                          {isCrossChevronPicker ?
                            <AllClose onClick={clearDateRangeHandler} /> :
                            <ArrowsChevronDown onClick={e => e.stopPropagation()} />}
                        </div>
                      }
                    />
                  </InputMask >
                )
              }
            </div >
          )}
        </Reference>

        <Dropdown
          show={showCalendar}
          toggleRef={datepickerRef}
          onClose={onClose}
          position={position}
          style={{
            maxWidth: 'auto',
            width: 'auto'
          }}
          containerRef={containerRef}
        >
          <DatepickerCalendar
            value={inputValue}
            minDate={minDate}
            maxDate={maxDate}
            setInputValue={setValue}
            range={range}
            locale={locale}
            toggleCalendar={toggleCalendar}
            separator={separator}
            format={format}
            disableWeekDays={disableWeekDays || []}
            tooltipBackground={tooltipBackground}
          />
        </Dropdown>
      </div >
    </Manager >
  );
};

export default Datepicker;
