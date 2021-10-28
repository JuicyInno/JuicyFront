import React, {
  FC, HTMLProps, useEffect, useRef, useState
} from 'react';
import './Textarea.scss';
import { fromEvent } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, map
} from 'rxjs/operators';
import { classnames } from '../../../utils/classnames';
import Close from '../../../assets/icons/Close';

export interface ITextareaProps extends HTMLProps<HTMLTextAreaElement> {
  /** Автоматическое изменение высоты */
  autoResize?: boolean;
  /** Количество строк */
  initialRowCount?: number;
  /** Дебаунс */
  debounce?: number;
  /** Вернуть value */
  getValue?: (value: string) => void;
  /** Переводит инпут в невалидный статус */
  invalid?: boolean;
  /** обработка ввода комментария с эффектом debounce */
  onDebounce?: (e: Event) => void;
  /** Возможность очистки поля по клику */
  onClear?: () => void;
}

const Textarea: FC<ITextareaProps> = ({
  className = '',
  autoResize = false,
  initialRowCount = 3,
  debounce = 300,
  getValue,
  disabled,
  invalid,
  onFocus,
  onBlur,
  onDebounce = () => {},
  onClear,
  ...props
}: ITextareaProps) => {
  /** Ссылка на поле */
  const textarea = useRef<HTMLTextAreaElement>(null);

  const [value, setValue] = useState<string>(props.defaultValue?.toString() || props.value?.toString() || '');
  /** Находится ли инпут в состоянии фокуса */
  const [isFocused, setFocused] = useState(false);

  useEffect(() => {
    /** Подписываемся на ввод текста */
    let sub: any;

    if (textarea.current) {
      sub = fromEvent(textarea.current, 'keyup')
        .pipe(
          map((e: Event) => e),
          debounceTime(debounce),
          distinctUntilChanged()
        )
        .subscribe((e: any) => {
          if (textarea.current) {
            if (props.maxLength) {
              setValue(textarea.current.value);
            }

            getValue && getValue(textarea.current.value);
          }

          props.onKeyUp && props.onKeyUp(e);
          onDebounce(e);
        });
    }

    return () => {
      try {
        if (sub) {
          sub.unsubscribe();
        }
      } catch (e) {
        console.log(e);
      }
    };
  }, [
    props.maxLength,
    autoResize,
    onDebounce,
    debounce
  ]);

  // ------------------------------------------------------------------------------------------------------------------

  const onInputFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(true);

    if (onFocus) {
      onFocus(event);
    }
  };

  const onInputBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  // ------------------------------------------------------------------------------------------------------------------

  /** Очистка поля ввода */
  const clearInput = () => {
    if (textarea.current) {
      textarea.current.value = '';
      setValue('');
      onClear && onClear();
    }
  };

  /** Кнопка сброса */
  const closeButton = onClear && value.length > 0 && (
    <button type='button' className='rf-textarea__action' onClick={ clearInput } aria-label='Сбросить'>
      <Close/>
    </button>
  );

  // ------------------------------------------------------------------------------------------------------------------

  // Делаем проверку на className для обратной совместимости.
  const isInvalid = invalid || className && className.indexOf('invalid') !== -1;

  return (
    <div className={`rf-textarea ${className}`}>
      <div
        className={classnames(
          'rf-textarea__wrapper',
          disabled && 'rf-textarea__wrapper--disabled',
          isFocused && 'rf-textarea__wrapper--focused',
          isInvalid && 'rf-textarea__wrapper--invalid',
          autoResize && 'rf-textarea__wrapper--auto-resize',
          !autoResize && 'rf-textarea--scroll',
          onClear && value.length > 0 && 'rf-textarea--clearable'
        )}
        data-replicated-value={props.value}
      >
        <textarea
          {...props}
          disabled={disabled}
          ref={textarea}
          rows={initialRowCount}
          className={`
          rf-textarea__field
          ${!autoResize ? 'rf-textarea--scroll' : ''}
        `}
          autoComplete='off'
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
        {closeButton}
      </div>
    </div>
  );
};

export default Textarea;
