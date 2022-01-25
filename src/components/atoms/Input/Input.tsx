import React, {
  HTMLProps, ReactNode, useEffect, useRef, useState, forwardRef, Ref, useMemo
} from 'react';
import './Input.scss';

import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import Close from '../../../assets/icons/Close';
import { IDebounceResult } from '../../../types/projects.types';

export interface IInputProps extends Omit<HTMLProps<HTMLInputElement>, 'size' | 'ref'> {
  /** Возможность очистки поля по клику */
  onClear?: () => void;
  /** Дебаунс */
  debounce?: number;
  /** Иконка */
  icon?: ReactNode;
  variant?: 'base' | 'inline';
  /** Переводит инпут в невалидный статус */
  invalid?: boolean;
  /**
   * Добавляет инпуту белый фон
   * @default true
   */
  filled?: boolean;
  /** Контент для вставки в начало инпута */
  startAdornment?: ReactNode;
  /** Контент для вставки в конец инпута */
  endAdornment?: ReactNode;
  /** обработка нажатий с эффектом debounce */
  onDebounce?: (result: IDebounceResult) => void;
  /** ref контейнера инпута */
  ref?: Ref<HTMLLabelElement>;
  /**
   * Добавить рамку
   * @default true
   *  */
  isBorder?: boolean
  /**
  * Проверять ввод в соответствии с регулярным выражением
  * @example Для проверки на отсутствие спецсимволов в строке можно использовать `'^[\da-zA-Zа-яА-Я]*$'`
  */
  pattern?: string;
}

const Input = forwardRef<HTMLLabelElement | null, IInputProps>(({
  className,
  onClear,
  debounce = 300,
  icon,
  variant = 'base',
  startAdornment,
  endAdornment,
  disabled,
  invalid,
  filled = true,
  onFocus,
  onBlur,
  onChange,
  onDebounce,
  isBorder = true,
  pattern,
  defaultValue,
  value,
  ...props
}: IInputProps, ref) => {
  /** Ref */
  const inputRef = useRef<HTMLInputElement>(null);

  /** Значение поля */
  const [internalValue, setInternalValue] = useState<string>(defaultValue?.toString() || value?.toString() || '');
  /** Находится ли инпут в состоянии фокуса */
  const [isFocused, setFocused] = useState(false);

  // Регулярное выражение для проверки ввода
  const regexp = useMemo(() => {
    if (pattern) {
      return new RegExp(pattern);
    }

    return null;
  }, [pattern]);

  useEffect(() => {
    // Controlled component
    if (value !== undefined) {
      setInternalValue(value.toString());
    }
  }, [value]);

  // ------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    /** Подписываемся на ввод текста */
    let sub: Subscription;

    if (inputRef.current) {
      sub = fromEvent(inputRef.current, 'keyup')
        .pipe(
          debounceTime(debounce),
          distinctUntilChanged()
        )
        .subscribe((e: Event) => {
          const debounceString = (e.target as HTMLInputElement).value;

          if (onDebounce) {
            onDebounce({
              event: e,
              debounceString
            });
          }
        });
    }

    return () => {
      sub && sub.unsubscribe();
    };
  }, [debounce, onDebounce]);

  // ------------------------------------------------------------------------------------------------------------------
  /** Очистка поля ввода и сброс результатов поиска */
  const clearInput = () => {
    setInternalValue('');
    onDebounce && onDebounce({ debounceString: '' });
    onClear && onClear();
  };

  /** Кнопка поиска и сброса */
  const closeButton = onClear && internalValue.length > 0 && (
    <button type='button' className='rf-input__action' onClick={clearInput} aria-label='Сбросить'>
      <Close />
    </button>
  );

  // ------------------------------------------------------------------------------------------------------------------

  const onInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    if (onFocus) {
      onFocus(event);
    }
  };

  const onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (regexp && !regexp.test(event.target.value)) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Uncontrolled component
    if (value === undefined) {
      setInternalValue(event.target.value);
    }

    if (onChange) {
      onChange(event);
    }
  };

  // ------------------------------------------------------------------------------------------------------------------

  // Делаем проверку на className для обратной совместимости.
  const isInvalid = invalid || className && className.indexOf('invalid') !== -1;

  return (
    <label
      ref={ref}
      className={`
        rf-input 
        ${variant === 'inline' ? 'rf-input--inline' : ''} 
        ${disabled ? 'rf-input--disabled' : ''} 
        ${isFocused ? 'rf-input--focused' : ''} 
        ${isInvalid ? 'rf-input--invalid' : ''} 
        ${filled ? 'rf-input--filled' : ''}
        ${className || ''}
        ${isBorder ? '' : 'rf-input--non-border'}
        `
      }
    >
      {!!startAdornment && <div className='rf-input__adornment rf-input__adornment--start'>{startAdornment}</div>}
      <input
        {...props}
        value={value === undefined ? internalValue : value}
        ref={inputRef}
        className={'rf-input__field'}
        autoComplete='off'
        type={props.type || 'text'}
        disabled={disabled}
        onChange={onInputChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        pattern={pattern}
      />
      {!!endAdornment && <div className='rf-input__adornment rf-input__adornment--end'>{endAdornment}</div>}
      {icon ? <button type='button' className='rf-input__action'>{icon}</button> : closeButton}
    </label>
  );
});

export default Input;
