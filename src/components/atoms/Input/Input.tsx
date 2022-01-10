import React, {
  HTMLProps, ReactNode, useEffect, useRef, useState, forwardRef, Ref
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
  onDebounce,
  ...props
}: IInputProps, ref) => {
  /** Ref */
  const inputRef = useRef<HTMLInputElement>(null);

  /** Значение поля */
  const [value, setValue] = useState<string>(props.defaultValue?.toString() || props.value?.toString() || '');
  /** Находится ли инпут в состоянии фокуса */
  const [isFocused, setFocused] = useState(false);

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
          setValue(debounceString);

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
    if (inputRef.current) {
      inputRef.current.value = '';
      setValue('');
      onDebounce && onDebounce({ debounceString: '' });
      onClear && onClear();
    }
  };

  /** Кнопка поиска и сброса */
  const closeButton = onClear && value.length > 0 && (
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
        ${className || ''}`
      }
    >
      {!!startAdornment && <div className='rf-input__adornment rf-input__adornment--start'>{startAdornment}</div>}
      <input
        {...props}
        ref={inputRef}
        className={'rf-input__field'}
        autoComplete='off'
        type={props.type || 'text'}
        disabled={disabled}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
      {!!endAdornment && <div className='rf-input__adornment rf-input__adornment--end'>{endAdornment}</div>}
      {icon ? <button type='button' className='rf-input__action'>{icon}</button> : closeButton}
    </label>
  );
});

export default Input;
