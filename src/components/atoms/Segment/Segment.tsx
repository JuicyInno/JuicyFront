import React, {
  useEffect, useRef, useState
} from 'react';
import './Segment.scss';
import { ISegment } from '../../../types';
import { classnames } from '../../../utils/classnames';

export interface ISegmentProps {
  /** Список значений */
  list: ISegment[];
  /** Изменение значения */
  onChange: (option: ISegment) => void;
  /** Значение */
  value?: ISegment;
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

    const index = list.findIndex((o: ISegment) => o.value === value.value);
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

  return (
    <div className='rf-segment'>
      <div className={classnames('rf-segment__list', fullWidth && 'rf-segment__list--full')}>
        {list.map((o, i) =>
          <button
            key={o.value}
            className={classnames(
              'rf-segment__item',
              activeIndex === i && 'rf-segment__item--active'
            )}
            disabled={o.disabled}
            onClick={() => handleChange(i)}
          >
            {!!o.icon && <div className='rf-segment__icon'>{o.icon}</div>}
            {o.label}
          </button>)}
      </div>
    </div>
  );
};

export default Segment;
