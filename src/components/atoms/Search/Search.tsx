import React, {
  HTMLProps, useEffect, useRef, useState, ReactNode
} from 'react';
import './Search.scss';
import { Close, SearchIcon } from '../../../indexIcon';

import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IDebounceResult } from '../../../types/projects.types';
import { classnames } from '../../../utils/classnames';


export interface ISearchProps extends HTMLProps<HTMLInputElement> {
  /** Возможность очистки поля по клику */
  onClear?: () => void;
  /** Показать иконку очистки */
  showClear?: boolean;
  /** Дебаунс */
  debounce?: number;
  /** Иконка в конце поля */
  endAdornment?: ReactNode;
  /** обработка нажатий с эффектом debounce */
  onDebounce?: (result: IDebounceResult) => void;
}

const Search: React.FC<ISearchProps> = ({
  onClear, showClear = true, debounce = 500, endAdornment, onDebounce = () => {
  }, ...props
}: ISearchProps) => {

  // -------------------------------------------------------------------------------------------------------------------

  const [value, setValue] = useState<string>(props.value ? props.value.toString() : '');
  const ref = useRef<HTMLInputElement>(null);
  // =======================

  useEffect(() => {
    /** Подписываемся на ввод текста */
    let sub: Subscription;

    ref.current && (sub = fromEvent<Event>(ref.current, 'keyup')
      .pipe(
        debounceTime(debounce),
        distinctUntilChanged()
      )
      .subscribe((e: Event) => {
        const debounceString = (e.target as HTMLInputElement).value;
        setValue(debounceString);
        onDebounce({
          event: e,
          debounceString
        });
      }));

    return () => sub && sub.unsubscribe();
  }, [debounce, onDebounce, onClear]);


  useEffect(() => {
    setValue(props.value ? props.value.toString() : '');
  }, [props.value]);
  // -------------------------------------------------------------------------------------------------------------------
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange && props.onChange(e);
  };

  //* ***************
  const onClearClickHandler = () => {
    setValue('');
    onClear && onClear();
    onDebounce({ debounceString: '' });
  };
  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='rf-search'>
      <input {...props}
        ref={ref}
        type='text'
        className={classnames(endAdornment ? 'rf-search__input-endAdornment' : 'rf-search__input')}
        placeholder={props.placeholder || 'Поиск'}
        value={value}
        data-testid='search-test-id'
        onChange={onChangeHandler}
      />
      <SearchIcon className='rf-search__search-icon' />

      {value.length > 0 && showClear &&
        <Close data-testid='search-clear-test-id'
          className={classnames('rf-search__close-icon', !!endAdornment && 'rf-search__close-withEndAdornment')}
          onMouseDown={onClearClickHandler} />}
      {endAdornment && <div className='rf-search__endAdornment'>{endAdornment}</div>}


    </div>
  );
};

export default Search;
