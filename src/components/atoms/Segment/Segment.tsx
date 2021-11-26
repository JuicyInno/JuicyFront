import React, {
  useEffect, useRef, useState
} from 'react';
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
  /** На всю ширину
   * @default false
  */
  fullWidth?: boolean;
}

const Segment: React.FC<ISegmentProps> = ({ list, fullWidth = false, value, onChange }: ISegmentProps) => {
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
    const className = classnames('rf-segment__list-item', activeIndex === i && 'active', o.disabled && 'disabled');

    return (
      <div className={className} key={o.value} onClick={() => handleChange(i)}>
        {o.label}
      </div>
    );
  });

  return (
    <div className='rf-segment__container'>
      <div className={classnames('rf-segment__list', fullWidth && 'rf-segment__list--full')}>
        {radioButtons}
        <div className='rf-segment__slider' style={{ width: `calc(100% / ${list.length})` }} ref={slider} />
      </div>
    </div>
  );
};

export default Segment;
