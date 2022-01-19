import React, {
  FC, useState, useEffect, InputHTMLAttributes
} from 'react';
import { Star } from '../../../indexIcon';
import { classnames } from '../../../utils/classnames';
import './RatePicker.scss';


export interface IPickerProps extends InputHTMLAttributes<HTMLLabelElement> {

  /**
   *  Величина диапазона
   * */
  sizePicker?: number
  /** Заданное значение выбранного диапазона*/
  defaultPickedValue?: number
  /**
   *  Включить диапазон
   * @default true
   * */
  isActive?: boolean

  /** Текст контента диапазона*/
  textContent?: string,
  /**
   *  Нижнее подчеркивание
   * @default true
   * */
  isUnderline?: boolean

  /**
   * Реверсировать поярдок диапазона
   * @default false
   * */
  isReverse?: boolean
  /**
   *  Вид зведочки
   * @default false
   * */
  isStarPicker?: boolean
  /** Получить значение оценки*/
  getRate?: (value: string) => number | void
}


const RatePicker: FC<IPickerProps> = ({ isActive = true,
  isStarPicker = false,
  defaultPickedValue = 0,
  getRate = () => { },
  sizePicker = 5,
  textContent = '',
  isUnderline = true,
  isReverse = false,
  ...props }: IPickerProps) => {

  const [rating, setRating] = useState(defaultPickedValue);

  const [hover, setHover] = useState(0);

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

  const onMoveMouseHandler = (item: number) => (e: React.MouseEvent<HTMLLabelElement>) => {
    setHover(item);
  };
  const onMoveMouseLeaveHandler = () => {
    setHover(0);
  };


  const clickRateStarHandler = (value: number) => (e: React.MouseEvent<HTMLLabelElement>) => {


    if (typeof e?.currentTarget?.textContent === 'string') {
      isActive && setRating(value);
      console.log(value);
      getRate(value.toString());
    } else {
      setRating(0);
    }
  };

  let rates = Array.from(Array(sizePicker), (_, index) => index + 1);

  if (isReverse) {
    rates = rates.reverse();
  }


  const rateComponent = rates.map((item, index) => {

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
      {isStarPicker ? <label
        onMouseMove={onMoveMouseHandler(item)}
        onMouseLeave={onMoveMouseLeaveHandler}
        onClick={clickRateStarHandler(index + 1)}
        className={classnames(labelClassName, 'star-picker', isActive && hover >= item && hover > 0 ? 'star-hover' : '', !isActive && 'disabled-star')}
      ><Star size={isActive ? 'm' : 'xxs'} /></label> :
        <label
          className={classnames(labelClassName, isActive && hover >= item && hover > 0 ? 'rate-hover' : '', !isActive && 'disabled-picker')}
          onClick={clickRateHandler}
          onMouseMove={onMoveMouseHandler(item)}
          onMouseLeave={onMoveMouseLeaveHandler}
          htmlFor={`input-${item}`}
          {...props}>
          {item}
        </label>
      }
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
