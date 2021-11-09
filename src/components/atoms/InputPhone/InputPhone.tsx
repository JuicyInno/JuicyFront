import React, {
  useEffect, useState, useMemo
} from 'react';
import './InputPhone.scss';
import InputMask from 'react-input-mask';

import Input, { IInputProps } from '../Input';
import Menu, { MenuContext } from '../Menu';
import { IMenuContext } from '../../../types';
import ChevronDown from '../../../assets/icons/ChevronDownMedium';
import FlagRU from '../../../assets/icons/FlagRU';

export interface IInputPhoneCountry {
  /** Компонент для иконки флага страны */
  flag: React.ComponentType<{ className?: string }>;
  /** Название страны */
  text: string;
  /** Код страны */
  code: number;
}

export interface IInputPhoneProps extends IInputProps {
  defaultValue?: string;
  /** Список стран для выбора */
  countries?: IInputPhoneCountry[]
  /** Выбранная страна по умолчанию */
  defaultCountry?: IInputPhoneCountry;
  /** Идентификатор инпута */
  name?: string;
  /** Отключен или нет */
  disabled?: boolean;
  /** Вызывается при изменении значения */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Список стран для выбора по умолчанию */
const DEFAULT_COUNTRIES: IInputPhoneCountry[] = [
  {
    flag: FlagRU,
    text: 'Россия',
    code: 7
  }
];

const InputPhone: React.FC<IInputPhoneProps> =
  ({ defaultValue, countries = DEFAULT_COUNTRIES, defaultCountry, name, disabled, onChange, ...props }: IInputPhoneProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [displayValue, setDisplayValue] = useState<string>(defaultValue || '');
    const [country, setCountry] = useState(defaultCountry || countries[0]);

    const [inputElement, setInputElement] = useState<HTMLLabelElement | null>(null);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDisplayValue(event.target.value);
    };

    const onCountryChange = (c: IInputPhoneCountry) => () => {
      let oldCountry: any;
      setCountry((value) => {
        oldCountry = value;
        return c;
      });
      setDisplayValue(old => {
        return old.replace(oldCountry.code, c.code.toString());
      });

      setInputValue((old) => {
        return old.replace(oldCountry.code, c.code.toString());
      });
    };

    useEffect(() => {
      setDisplayValue(defaultValue || '');
      setInputValue(defaultValue || '');
    }, [defaultValue]);

    useEffect(() => {
      const v = displayValue.replace(/(\s|-|_|\(|\))/g, '');
      setInputValue(v);

      if (onChange) {
        onChange({
          target: {
            value: v,
            name
          }
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }, [displayValue, name, onChange]);

    // useUpdateEffect(() => {
    //   setDisplayValue('');
    // }, [country]);

    const mask = useMemo(() => {
      return [
        '+',
        ...country.code.toString().split(''),
        ' ',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        ' ',
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        ' ',
        /[0-9]/,
        /[0-9]/,
        ' ',
        /[0-9]/,
        /[0-9]/
      ];
    }, [country]);

    return (
      <>
        <InputMask
          mask={mask}
          maskPlaceholder={null}
          value={displayValue}
          disabled={disabled}
          onChange={onInputChange}>
          <Input
            {...props}
            name={`${name}-display`}
            ref={setInputElement}
            className={`rf-phone-input  ${disabled ? 'rf-phone-input__text-disabled' : ''}`}
            data-testid='input-display'
            startAdornment={
              <Menu
                portal
                anchorElement={inputElement}
                content={
                  countries.length > 1 && !disabled && <MenuContext.Consumer>
                    {({ onClose }: IMenuContext) => (
                      <ul className='rf-list rf-phone-input__list' onClick={onClose}>
                        {countries.map(c => (
                          <li key={c.code} className='rf-li' >
                            <button type='button' className='rf-list__element rf-phone-input__option' onClick={onCountryChange(c)}>
                              <c.flag className='rf-phone-input__option-flag' />
                              <span
                                className={`
                                rf-phone-input__option-text 
                                ${country.code === c.code ? 'rf-phone-input__option-text--selected' : ''}
                              `}
                              >
                                {c.text}
                              </span>
                              <span
                                className={`
                                rf-phone-input__option-code 
                                ${country.code === c.code ? 'rf-phone-input__option-code--selected' : ''}
                              `}
                              >
                                +{c.code}
                              </span>
                            </button>
                          </li>

                        ))}
                      </ul>
                    )}
                  </MenuContext.Consumer>
                }
              >
                <div className='rf-phone-input__country'>
                  {<country.flag className={`rf-phone-input__flag' ${disabled ? 'rf-phone-input__flag-disabled' : ''}`} />}
                  {countries.length > 1 && (
                    <MenuContext.Consumer >
                      {({ show, ...res }: IMenuContext) => {
                        return (
                          <button
                            className={`rf-phone-input__button ${show && !disabled ? 'rf-phone-input__button--rotate' : ''}`}
                            type='button'
                            disabled={disabled}
                            aria-label='Выбрать страну'
                          >
                            <ChevronDown />
                          </button>
                        );
                      }}
                    </MenuContext.Consumer>
                  )}
                </div>
              </Menu>
            } />
        </InputMask>
        <input data-testid='input' type='hidden' name={name} value={inputValue} />
      </>
    );
  };

export default InputPhone;
