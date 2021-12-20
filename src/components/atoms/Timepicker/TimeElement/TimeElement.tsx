import React, { FC, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import './TimeElement.scss';
import { arrayTimeHours, arrayTimeMinutes } from './timeData';
import { MenuContext } from '../../Menu/Menu';
import { classnames } from '../../../../utils/classnames';
import ChevronLeft from '../../../../assets/icons/ChevronLeft';

export interface ITimepickerProps {
  /** Выбрать часы/время */
  updateTime: (newTime: string) => void;
  /** Минимальное значение 00:00 */
  min: string;
  /** Максимальное значение 00:00 */
  max: string;
  /** Значение */
  value?: string;
}

export const getTime = (time?: string | null) => time?.split(':') || [];

const TimeElement: FC<ITimepickerProps> = ({ updateTime, min, max, value }: ITimepickerProps) => {
  const [time, setTime] = useState<string | null>(null);
  const [translate, setTranslate] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      const [hours] = getTime(value);
      setTime(hours);
    }
  }, [value]);

  /** Переключение часов и минут */
  useEffect(() => {
    const [hours, minutes] = getTime(value);

    if (hours) {
      const hasMinutes = minutes ? !minutes.includes('_') : false;
      setTranslate(!hours.includes('_') && !hasMinutes);
    }
  }, [value]);

  const clickHandler = (event: React.MouseEvent) => {
    const [hours] = getTime((event.currentTarget as HTMLElement).innerText);
    updateTime(hours);
    setTime(hours);
  };

  const applyTimeHandler = (event: React.MouseEvent, onClose: () => void) => {
    updateTime((event.currentTarget as HTMLElement).innerText);
    onClose();
  };

  // -------------------------------------------------------------------------------------------------------------------

  const [minH] = useMemo(() => min.split(':'), [min]);
  const [maxH] = useMemo(() => max.split(':'), [max]);

  const isActiveHours = useCallback(
    (current: string | null) => {
      const [hours] = getTime(current);
      const [activeHours] = getTime(time);

      return hours === activeHours;
    },
    [time]
  );

  /** Сравнение времени */
  const isValidTime = useCallback(
    (time: string, flag: 'h' | 'm'): boolean => {
      const [h, m] = getTime(time);

      if (flag === 'h') {
        return h >= minH && h <= maxH;
      }

      const cur = h + m;
      const minStr = min.replace(':', '');
      const maxStr = max.replace(':', '');

      return cur >= minStr && cur <= maxStr;
    },
    [minH, maxH, min, max]
  );

  // -------------------------------------------------------------------------------------------------------------------

  const getTimeHours = useCallback(() => {
    const [hours] = getTime(time);
    const secondHour = hours ? hours[1] : '_';

    /**
     * Если нету часов или часы ну указаны или оба часа указано то выводим все часы
     */
    if (!hours || hours === '__' || (!hours.startsWith('_') && secondHour !== '_')) {
      return arrayTimeHours;
    }

    /** Фильтруем часы по началу первого часа */
    return arrayTimeHours.reduce((acc: string[][], curr: string[]) => {
      if (curr.some((time) => +time[0] >= +hours[0])) {
        return [...acc, curr];
      }

      return acc;
    }, []);
  }, [arrayTimeHours, time]);

  /** Ячейки с часами */
  const itemsHour = getTimeHours().map((itemRow: string[], id) => (
    <div key={id} className='rf-time-element__item-row'>
      {itemRow.map((item) => (
        <button
          type='button'
          key={item}
          disabled={!isValidTime(item, 'h')}
          className={classnames('rf-time-element', isActiveHours(item) && 'rf-time-element--active')}
          onClick={clickHandler}
        >
          {item}
        </button>
      ))}
    </div>
  ));

  const { onClose } = useContext(MenuContext);

  /** Ячейки с минутами */
  const itemsMinutes = arrayTimeMinutes.map((itemRow: string[], id) => (
    <div key={id} className='rf-time-element__item-row'>
      {itemRow.map((item) => {
        const t = (time || '00') + item;

        return (
          <button
            type='button'
            key={item}
            disabled={!isValidTime(t, 'm')}
            className='rf-time-element'
            onClick={(e: React.MouseEvent) => applyTimeHandler(e, onClose)}
          >
            {t}
          </button>
        );
      })}
    </div>
  ));

  return (
    <div className='rf-time-element__wrapper'>
      <div data-testid='rf-time-element' className={`rf-time-element__translate ${translate ? 'element__translate--active' : ''}`}>
        <div className='rf-time-element__flex'>
          <div className='rf-time-element__column'>
            <div className='rf-time-element__header-container'>
              <div className='rf-time-element__name'>Выберите час</div>
            </div>
            {itemsHour}
          </div>

          <div className={'rf-time-element__column'}>
            <div className='rf-time-element__header-container'>
              <button className='rf-time-element__name rf-time-element__btn' onClick={() => setTranslate(false)}>
                <ChevronLeft /> <span>Выберите минуты</span>
              </button>
            </div>
            {itemsMinutes}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeElement;
