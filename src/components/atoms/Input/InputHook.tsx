import React, {
  HTMLProps, ReactNode, useEffect, useRef, useState
} from 'react';
import './Input.scss';
import { fromEvent } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, map
} from 'rxjs/operators';
import { Close } from '../../../index';


export interface IInputProps extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
  /** Возможность очистки поля по клику */
  onClear?: () => void;
  /** Дебаунс */
  debounce?: number;
  /** Иконка */
  icon?: ReactNode;
}

const Input = React.forwardRef((props: IInputProps, ref: React.Ref<HTMLInputElement>) => {

  const {
    onClear,
    onKeyUp,
    debounce = 300,
    icon,
    ...attrs
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  /** Значение поля */
  const [value, setValue] = useState<string>(props.defaultValue?.toString() || props.value?.toString() || '');

  // ------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (typeof ref === 'function') {
      ref(inputRef.current);
    } else if (ref && 'current' in ref) {
      (ref as any).current = inputRef.current;
    }

    return () => {
      if (typeof ref === 'function') {
        ref(null);
      } else if (ref && 'current' in ref) {
        (ref as any).current = null;
      }
    };
  }, [ref, inputRef]);

  useEffect(() => {
    /** Подписываемся на ввод текста */
    let sub: any;

    if (inputRef.current) {
      sub = fromEvent(inputRef.current, 'keyup')
        .pipe(
          map((e: Event) => e),
          debounceTime(debounce),
          distinctUntilChanged()
        )
        .subscribe((e: any) => {
          setValue(e.target.value);
          onKeyUp && onKeyUp(e);
        });
    }

    return () => {
      try {
        sub && sub.unsubscribe();
      } catch (e) {
        console.log(e);
      }
    };
  }, [onClear, debounce, props.onKeyUp]);

  // ------------------------------------------------------------------------------------------------------------------
  /** Очистка поля ввода и сброс результатов поиска */
  const clearInput = () => {
    if (inputRef?.current) {
      inputRef.current.value = '';
      setValue('');
      onClear && onClear();
    }
  };

  /** Кнопка поиска и сброса */
  const closeButton = onClear && value.length > 0 && (
    <button type='button' className='rf-input__action' onClick={ clearInput }>
      <Close/>
    </button>
  );

  // ------------------------------------------------------------------------------------------------------------------

  return (
    <div className={ `rf-input ${props.className || ''}` }>
      <input
        ref={inputRef}
        className='rf-input__field'
        autoComplete='off'
        type={ props.type || 'text' }
        { ...attrs }
      />
      { icon ? <button type='button' className='rf-input__action'>{ icon }</button> : closeButton }
    </div>
  );
});

export { Input as InputHook };
