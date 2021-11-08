import React, { useEffect, useRef, useState } from 'react';
import './Segment.scss';
import { IOption } from '../../../types';
import { classnames } from '../../../utils/classnames';

export type SegmentSliderPosition = 'start' | 'middle' | 'end';

export interface ISegmentProps {
  /** Список значений */
  list: IOption[];
  /** Изменение значения */
  onChange: (option: IOption) => void;
  /** Значение */
  value?: IOption;
}

const Segment: React.FC<ISegmentProps> = ({ list, value, onChange }: ISegmentProps) => {
  const slider = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const setBoundary = (i: number) => {
    if (slider.current) {
      slider.current.style.transform = `translateX(${100 * i}%)`;
    }
  };

  useEffect(() => {
    if (!value) {
      return;
    }

    const index = list.findIndex((o: IOption) => o.value === value.value);
    setActiveIndex(index < 0 ? 0 : index);
  }, [value]);

  useEffect(() => {
    setBoundary(activeIndex);
  }, [activeIndex]);

  // -------------------------------------------------------------------------------------------------------------------

  const handleChange = (i: number) => {
    if (list[i].disabled) {
      return;
    }

    setActiveIndex(i);
    onChange(list[i]);
  };

  // -------------------------------------------------------------------------------------------------------------------

  const radioButtons = list.map((o: IOption, i: number) => {
    const showSlider = i === 0;

    return (
      <div className={classnames('rf-segment__list-item', activeIndex === i && 'active')} key={o.value} onClick={() => handleChange(i)}>
        {showSlider && <div className='rf-segment__slider' ref={slider} />}
        {o.label}
      </div>
    );
  });

  return (
    <div className='rf-segment__container'>
      <div className='rf-segment__list'>{radioButtons}</div>
    </div>
  );
};

export default Segment;
