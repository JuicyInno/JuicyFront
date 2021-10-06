import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
import './Segment.scss';
import { IOption } from '../../../types';

export type SegmentSliderPosition = 'start' | 'middle' | 'end';

export interface ISegmentProps {
  /** Список значений */
  list: IOption[];
  /** Изменение значения*/
  onChange: (option: IOption) => void;
  /** Значение */
  value?: IOption;
  /** Ширина */
  width?: number;
}

const Segment: React.FC<ISegmentProps> = ({
  list,
  width = 80,
  value,
  onChange
}: ISegmentProps) => {

  const slider = useRef<HTMLDivElement>(null);
  const [isBoundary, setIsBoundary] = useState<SegmentSliderPosition>('start');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [style, setStyle] = useState<Record<string, any>>({});

  const setBoundary = (i: number) => {
    if (slider.current) {
      const firstTranslate = i === 0 ? 0 : -1;
      slider.current.style.transform = `translateX(${width * i + firstTranslate}px)`;

      switch (i) {
      case 0:
        setIsBoundary('start');
        break;
      case list.length - 1:
        setIsBoundary('end');
        break;
      default:
        setIsBoundary('middle');
      }
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

  useEffect(() => {
    let style: Record<string, any> = {};

    switch (isBoundary) {
    case 'start':
      style = {
        // borderRadius: '8px 0 0 8px',
        width: `${width}px`
      };
      break;
    case 'end':
      style = {
        // borderRadius: '0 8px 8px 0',
        width: `${width + 1}px`
      };
      break;
    default:
      style = { width: `${width + 1}px` };
    }

    setStyle(style);
  }, [isBoundary, width]);


  // -------------------------------------------------------------------------------------------------------------------

  const handleChange = useCallback((i: number) => {
    if (list[i].disabled) {
      return;
    }

    setActiveIndex(i);
    onChange(list[i]);
  }, [setActiveIndex, list]);

  // -------------------------------------------------------------------------------------------------------------------

  const radioButtons = list.map((o: IOption, i: number) => (
    <div className={ `rf-segment__list-item ${activeIndex === i ? 'active' : ''}` } key={ o.value }
      style={ { width: `${width}px` } }
      onClick={ () => handleChange(i) }>
      { o.label }
    </div>
  ));

  return (
    <div className='rf-segment__container' style={ { width: `${width * list.length}px` } }>
      <div className='rf-segment__list'>
        { radioButtons }
      </div>
      <div className='rf-segment__slider' ref={ slider } style={ style }/>
    </div>
  );
};

export default Segment;
