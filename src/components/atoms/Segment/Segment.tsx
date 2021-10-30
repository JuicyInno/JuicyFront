import React, {
  useCallback, useEffect, useRef, useState, RefObject, createRef,
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
}

const Segment: React.FC<ISegmentProps> = ({
  list,
  value,
  onChange
}: ISegmentProps) => {
  const slider = useRef<HTMLDivElement>(null);
  const refs = useRef<RefObject<HTMLDivElement>[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const getWidth = (element: HTMLDivElement | null) => element?.getBoundingClientRect().width || 0;

  const setBoundary = (i: number) => {
    if (slider.current && i >= 0 ) {
      const firstTranslate = i === 0 ? 0 : -1;
      const width = getWidth(refs.current[i].current);

      slider.current.style.width = `${width}px`;
      slider.current.style.transform = `translateX(${width * i + firstTranslate}px)`;
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

  const handleChange = useCallback((i: number) => {
    if (list[i].disabled) {
      return;
    }

    setActiveIndex(i);
    onChange(list[i]);
  }, [setActiveIndex, list]);

  // -------------------------------------------------------------------------------------------------------------------

  const radioButtons = list.map((o: IOption, i: number) => {
    if (!refs.current[i]) {
      refs.current[i] = createRef();
    }

    return (
      <div
        className={classnames('rf-segment__list-item', activeIndex === i && 'active')}
        key={o.value}
        ref={refs.current[i]}
        onClick={() => handleChange(i)}
      >
        {o.label}
      </div>
    );
  });

  return (
    <div className='rf-segment__container'>
      <div className='rf-segment__list'>
        {radioButtons}
      </div>

      <div className='rf-segment__slider' ref={slider} />
    </div>
  );
};

export default Segment;
