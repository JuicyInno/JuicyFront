import React, {
  FC, HTMLProps, useEffect, useRef, useState
} from 'react';
import './Textarea.scss';
import { fromEvent, tap } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, map
} from 'rxjs/operators';

export interface ITextareaProps extends HTMLProps<HTMLTextAreaElement> {
  /** Автоматическое изменение высоты */
  autoResize?: boolean;
  /** Количество строк */
  initialRowCount?: number;
  /** Последовательность перехода при нажатии на Tab */
  tabIndex?: number;
  /** Дебаунс */
  debounce?: number;
  /** Вернуть value */
  getValue?: (value: string) => void;
  /** Переводит инпут в невалидный статус */
  invalid?: boolean;
  /** обработка ввода комментария с эффектом debounce */
  onDebounce?: (e: Event) => void;
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
          tap((e) => onDebounce(e)),
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
  }, [props.maxLength, autoResize, onDebounce]);

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

  // Делаем проверку на className для обратной совместимости.
  const isInvalid = invalid || className && className.indexOf('invalid') !== -1;

  return (
    <div className={`rf-textarea ${className}`}>
      <div
        className={`
          rf-textarea__wrapper
          ${disabled ? 'rf-textarea__wrapper--disabled' : ''} 
          ${isFocused ? 'rf-textarea__wrapper--focused' : ''} 
          ${isInvalid ? 'rf-textarea__wrapper--invalid' : ''}
          ${autoResize ? 'rf-textarea__wrapper--auto-resize' : 'rf-textarea__scroll'}
        `}
        data-replicated-value={props.value}
      >
        <textarea
          {...props}
          disabled={disabled}
          ref={textarea}
          rows={initialRowCount}
          className={`
          rf-textarea__field
          ${!autoResize ? 'rf-textarea__scroll' : ''}
        `}
          autoComplete='off'
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
      </div>
    </div>
  );
};

export default Textarea;
