import React, {
  FC, useState, useEffect, InputHTMLAttributes
} from 'react';
import './RatePicker.scss';


export interface IPickerProps extends InputHTMLAttributes<HTMLLabelElement> {

  /** Величина диапазона*/
  sizePicker?: number
  /** Заданное значение выбранного диапазона*/
  defaultPickedValue?: number
  /** Включить диапазон*/
  isActive?: boolean

  /** Текст контента диапазона*/
  textContent?: string,
  /** Нижнее подчеркивание*/
  isUnderline?: boolean

  /** Реверсировать поярдок диапазона*/
  isReverse?: boolean
  /** Получить значение оценки*/
  getRate?: (value: string) => number | void
}


const RatePicker: FC<IPickerProps> = ({ isActive = true,
  defaultPickedValue = 0,
  getRate = () => { },
  sizePicker = 10,
  textContent = '',
  isUnderline = true,
  isReverse = false, ...props }: IPickerProps) => {

  const [rating, setRating] = useState(defaultPickedValue);

  useEffect(() => {
    setRating(defaultPickedValue);
  }, [defaultPickedValue, isActive]);


  if (sizePicker < 1) {
    sizePicker = 1;
  }

  const clickRateHandler = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (typeof e?.currentTarget?.textContent === 'string') {
      isActive && setRating(+e.currentTarget.textContent);
      getRate(e.currentTarget.textContent);
    } else {
      setRating(0);
    }
  };

  let rates = Array.from(Array(sizePicker), (_, index) => index + 1);

  if (isReverse) {
    rates = rates.reverse();
  }

  const rateComponent = rates.map((item) => {

    const labelClassName = +rating >= item && !isReverse ?
      `rate-picker__label_picked_${isActive ?
        'primary' :
        'tertiary'}` :
      isReverse && +rating <= item ?
        `rate-picker__label_picked_${isActive ?
          'primary' :
          'tertiary'}` :
        '';
    const containerClassName = `
    ${isReverse && item === 1 ? 'rate-picker__item--right' : ''}
      ${isReverse && rates.length === item ? 'rate-picker__item--left' : ''}
       ${!isReverse && item === 1 ? 'rate-picker__item--left' : ''} 
       ${!isReverse && rates.length === item ? 'rate-picker__item--right' : ''}`;

    return <div
      key={item.toString()}
      className={containerClassName} >
      <input
        type='radio'
        id={`input-${item}`}
        value={item} />
      <label
        className={labelClassName}
        onClick={clickRateHandler}
        htmlFor={`input-${item}`}
        {...props}>
        {item}
      </label>
    </div >;
  });

  if (isReverse) {
    rates.reverse();
  }


  return (
    <div className={isUnderline ? 'rate-picker' : ''} >
      <p className='rate-picker__content'>{textContent}</p>
      <div className='rate-picker__container'>
        {rateComponent}
      </div>
    </div >
  );
};
export default RatePicker;
