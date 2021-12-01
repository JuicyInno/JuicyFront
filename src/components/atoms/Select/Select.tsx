import React, {
  FC, ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState
} from 'react';
import './Select.scss';

import { DropdownPosition, IOption } from '../../../types';
import Chip from '../Chip';
import {
  ChevronDown, Close, Preloader
} from '../../../index';
import Checkbox from '../Checkbox/Checkbox';
import { classnames } from '../../../utils/classnames';
import Dropdown from '../Dropdown';


export interface ISelectProps {
  /** Варианты выбора */
  options: IOption[];
  /** Изменение значения */
  onChange: (option: IOption[]) => void;
  /** Значение */
  values: IOption[];
  /** Поиск внутри селекта */
  onSearch?: (query: string) => void;
  /** Множественный выбор */
  multiselect?: boolean;
  /** Плейсхолдер */
  placeholder?: string;
  /** Запрещает вводить текст */
  readOnly?: boolean;
  disabled?: boolean;
  /** Максимальное количество выбранных вариантов при multiselect */
  maxOptions?: number;
  /** Прелоудер при ленивой загрузке */
  preloader?: boolean;
  /** Положение тегов - внутри инпута или под селектом */
  tagsPosition?: 'inside' | 'outside';
  /** Очистить селект при выборе значения */
  clearOnSelect?: boolean;
  /** Любое изменяемое значение (зависимость). При изменении этого параметра очищается селект */
  clearHook?: any;
  variant?: 'base' | 'tag';
  /** Переводит селект в невалидный статус */
  invalid?: boolean;
  /** Скролл списка (для лези лоуда) */
  onListScroll?: (e: React.UIEvent) => void;
  /** Расположение */
  position?: DropdownPosition;
  /** Использовать портал */
  portal?: boolean;
  /** Ширина */
  maxWidth?: number | string;
}

const Select: FC<ISelectProps> = ({
  options,
  onChange,
  invalid = false,
  onSearch,
  values = [],
  multiselect = false,
  placeholder = '',
  disabled = false,
  readOnly = false,
  maxOptions = options.length,
  preloader = false,
  tagsPosition = 'inside',
  clearOnSelect = false,
  clearHook,
  variant = 'base',
  onListScroll,
  position = 'left',
  portal = false,
  maxWidth
}: ISelectProps) => {

  const [showDropdown, toggleDropdown] = useState(false);
  const componentNode = useRef<HTMLDivElement>(null);

  const toggleRef = useRef<HTMLDivElement>(null);

  const onClose = useCallback(() => {
    toggleDropdown(false);
  }, [toggleDropdown]);

  // -------------------------------------------------------------------------------------------------------------------

  const [inputValue, setInputValue] = useState<string>(() =>
    values.length > 0 && !multiselect ? values[0].label : '');
  const openDropdown = () => {
    toggleDropdown(true);
  };

  /** Очистка селекта */
  const onClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInputValue('');
    toggleDropdown(true);

    if (!multiselect) {
      setSelectValues([]);
    }

    onSearch && onSearch('');
  };

  /** Очистка при изменении извне через clearHook */
  useEffect(() => {
    if (!multiselect) {
      setSelectValues([]);
    }

    if (clearHook === undefined) {
      return;
    }

    setInputValue('');
    onSearch && onSearch('');
  }, [clearHook]);

  // -------------------------------------------------------------------------------------------------------------------

  /** Поиск в селекте */
  const onSelectSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (readOnly) {
      return;
    }

    if (onSearch) {
      onSearch(inputValue);
      return;
    }

    const filtered = options.filter((o: IOption) => o.label.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredOptions(filtered);
  }, [inputValue]);

  // -------------------------------------------------------------------------------------------------------------------

  const [selectValues, setSelectValues] = useState<IOption[]>(() => values);

  useEffect(() => {
    setSelectValues(values);
  }, [values]);


  const [selectedMap, setSelectedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!selectValues || selectValues.length === 0) {
      return;
    }

    const map: Record<string, boolean> = selectValues.reduce((acc: Record<string, boolean>, o: IOption) => {
      acc[o.value] = true;
      return acc;
    }, {});

    setSelectedMap(map);
    setInputValue(multiselect ? '' : clearOnSelect ? '' : selectValues[0]?.label || '');

  }, [selectValues]);

  const onValueChange = (option: IOption) => {
    let result = undefined;

    if (multiselect) {
      const index = selectValues.findIndex((o: IOption) => option.value === o.value);

      if (index >= 0) {
        result = selectValues.filter((_: IOption, i: number) => i !== index);
      } else {
        if (selectValues.length < maxOptions) {
          result = [...selectValues, option];
        }
      }
    } else {
      result = [option];
    }

    if (result) {
      setSelectValues(result);
      onChange(result);
    }
  };

  // -------------------------------------------------------------------------------------------------------------------

  const [filteredOptions, setFilteredOptions] = useState<IOption[]>([]);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  // -------------------------------------------------------------------------------------------------------------------

  const listJSX = filteredOptions.map((o: IOption) => {
    const disabled = o.disabled || false;
    const active = selectedMap[o.value] || false;

    const handleChange = (e: React.MouseEvent | React.ChangeEvent) => {
      e.stopPropagation();
      onValueChange(o);

      if (!multiselect) {
        setInputValue(clearOnSelect ? '' : o.label);
        toggleDropdown(false);
      } else {
        setInputValue('');
      }
    };

    const disabledClass = disabled ? 'rf-select__list-element--disabled' : '';
    const activeClass = active ? 'rf-select__list-element--active' : '';

    let label: ReactNode = o.label;

    if (inputValue) {
      const indexStart = o.label.toLowerCase().indexOf(inputValue.toLowerCase());

      if (indexStart >= 0) {
        const indexEnd = indexStart + inputValue.length - 1;
        let left = '';
        let query = '';
        let right = '';

        for (let i = 0; i < o.label.length; i++) {
          if (i < indexStart) {
            left += o.label[i];
            continue;
          }

          if (i >= indexStart && i <= indexEnd) {
            query += o.label[i];
            continue;
          }

          right += o.label[i];
        }

        label = <>{left}<span title={query} className='rf-select__list-element--query'>{query}</span>{right}</>;
      }
    }

    return (
      <div className={`rf-select__list-element ${disabledClass} ${activeClass}`} key={ o.value }>
        { multiselect ? <Checkbox titleAtt={o.label} label={label} checked={active} onChange={handleChange} fullWidth/> :
          <div title={o.label} className='rf-select__list-element-single' onClick={ handleChange }>{label}</div>}
      </div>
    );
  });

  // -------------------------------------------------------------------------------------------------------------------

  const noop = () => {};

  const tagsRef = useRef<HTMLDivElement>(null);

  const tagsJSX = multiselect && selectValues.length > 0 && (
    <div className='rf-select__tags' ref={ tagsRef } onClick={ () => !disabled && toggleDropdown(true) }>
      { selectValues.map((t: IOption) => (
        <div className='rf-select__tag' key={ t.value }>
          <Chip type='secondary' size='s' onRemove={ () => onValueChange(t) } onClick={noop} disabled={ disabled }>
            { t.label }
          </Chip>
        </div>
      )) }
    </div>
  );

  // -------------------------------------------------------------------------------------------------------------------

  const closeButton = !disabled && !readOnly && inputValue.length > 0 && (
    <button type='button' className='rf-select__button' onClick={ onClear }>
      <Close/>
    </button>
  );

  const chevronButton = !disabled && (readOnly || inputValue.length === 0) && (
    <button type='button' className={`rf-select__button ${showDropdown ? 'rf-select__button--rotate' : ''}`}
      onClick={ () => toggleDropdown((state: boolean) => !state) }>
      <ChevronDown/>
    </button>
  );

  // -------------------------------------------------------------------------------------------------------------------

  const [dropdownWidth, setDropdownWidth] = useState<string>('100%');

  useLayoutEffect(() => {
    if (!toggleRef.current) {
      return;
    }

    setDropdownWidth(`${toggleRef.current.offsetWidth}px`);
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  const openClass = showDropdown ? 'rf-select__wrapper--open' : '';
  const multiselectClass = multiselect ? 'rf-select--multi' : '';
  const tagClass = variant === 'tag' ? 'rf-select__wrapper--tag' : '';

  return (
    <div className={`rf-select ${multiselectClass} ${tagClass}`} ref={ componentNode }>
      <div className={classnames('rf-select__wrapper', invalid && 'rf-select__wrapper--invalid', openClass)}
        ref={toggleRef}>
        <input
          className='rf-select__input'
          onMouseDown={ openDropdown }
          onChange={ onSelectSearch }
          value={ inputValue }
          disabled={ disabled }
          readOnly={ readOnly }
          placeholder={ disabled || (multiselect && tagsPosition === 'inside' && selectValues.length === maxOptions) ? '' : placeholder }/>
        { closeButton }
        { chevronButton }
      </div>
      <Dropdown show={showDropdown} toggleRef={toggleRef} onClose={onClose} position={position} portal={portal}
        maxWidth={maxWidth || dropdownWidth}>
        <div className='rf-select__list' onScroll={onListScroll}>
          { preloader ? (
            <div className='rf-select__list-preloader'>
              <Preloader size='m'/>
            </div>
          ) : listJSX }
        </div>
      </Dropdown>
      {/* filteredOptions.length > 0*/}
      { tagsJSX }
    </div>
  );
};
export default Select;
