import React, {
  FC, useState, useEffect, useMemo, InputHTMLAttributes
} from 'react';
import { AllStar } from '../../../indexIcon';
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

// FIXME: Добавить управление с клавиатуры
const RatePicker: FC<IPickerProps> & { id: number } = ({ isActive = true,
  isStarPicker = false,
  defaultPickedValue = 0,
  getRate = () => { },
  sizePicker = 5,
  textContent = '',
  isReverse = false,
  ...props }: IPickerProps) => {
  const id = useMemo(() => {
    return RatePicker.id++;
  }, []);

  const [rating, setRating] = useState(defaultPickedValue);

  const [hover, setHover] = useState(0);

  useEffect(() => {
    setRating(defaultPickedValue);
  }, [defaultPickedValue, isActive]);


  if (sizePicker < 1) {
    sizePicker = 1;
  }

  const clickRateHandler = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (rating === +e.currentTarget.textContent!) {
      setRating(0);
      getRate('0');
    } else if (typeof e?.currentTarget?.textContent === 'string') {
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
    if (rating === value) {
      setRating(0);
      getRate('0');
    } else if (typeof e?.currentTarget?.textContent === 'string') {
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
      className={classnames(containerClassName)} >
      <input
        type='radio'
        id={`RatePicker-${id}-${item}`}
        value={item} />
      {isStarPicker ? (
        <label
          onMouseMove={onMoveMouseHandler(item)}
          onMouseLeave={onMoveMouseLeaveHandler}
          onClick={clickRateStarHandler(index + 1)}
          className={classnames(labelClassName, 'star-picker', isActive && hover >= item && hover > 0 ? 'star-hover' : '', !isActive && 'disabled-star', rating === index + 1 && 'picked')}
        >
          <AllStar size={isActive ? 'm' : 'xxs'} />
        </label>
      ) : (
        <label
          className={classnames(labelClassName, 'rate-picker__label', isActive && hover >= item && hover > 0 ? 'rate-hover' : '', !isActive && 'disabled-picker')}
          onClick={isActive ? clickRateHandler : () => { }}
          onMouseMove={onMoveMouseHandler(item)}
          onMouseLeave={onMoveMouseLeaveHandler}
          htmlFor={`RatePicker-${id}-${item}`}
          {...props}
        >
          {item}
        </label>
      )
      }
    </div >;
  });

  return (
    <div className={classnames('rate-picker', !isActive ? 'disabled' : '')}>
      {textContent && <p className='rate-picker__content'>{textContent}</p>}

      <div className='rate-picker__container'>
        {rateComponent}
      </div>
    </div>
  );
};

RatePicker.id = 0;

export default RatePicker;
