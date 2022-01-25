import React, {
  ReactNode, useCallback, useState
} from 'react';
import { classnames } from '../../../utils/classnames';
import AccordionItem from './AccordionItem';

import './Accordion.scss';

export type IAccordion = {
  /** Заголовок */
  title: ReactNode;
  /** Контент */
  content: ReactNode;
  /** Открыт по умолчанию
   * @default false
  */
  defaultOpened?: boolean;
  /** Заблокирован выбор или нет
   * @default false
   */
  disabled?: boolean;
};

export interface IAccordionProps {
  /** Массив данных */
  data: IAccordion[];
  /** Позволяет разворачивать сразу несколько элементов
   * @default false
   */
  expanded?: boolean;
}

const Accordion: React.FC<IAccordionProps> = ({ data = [], expanded = false }: IAccordionProps) => {
  const getDefaultOpenedIndexes = useCallback(() => data.reduce((acc: number[], curr: IAccordion, index: number) => {
    if (curr.defaultOpened) {
      if (expanded || !acc.length) {
        acc.push(index);
      }

      return acc;
    }

    return acc;
  }, []), [data.length, expanded]);

  const [openedIndexes, setOpenedIndexes] = useState<number[]>(() => getDefaultOpenedIndexes());

  const isOpened = useCallback((index: number) => openedIndexes.findIndex((i) => i === index) !== -1, [openedIndexes]);

  const handleOpen = useCallback((index: number) => () => {
    const oepend = isOpened(index);

    if (expanded) {
      if (oepend) {
        setOpenedIndexes(prevIndex => prevIndex.filter((i: number) => i !== index));
      } else {
        setOpenedIndexes(prevIndex => [...prevIndex, index]);
      }
    } else {
      setOpenedIndexes(oepend ? [] : [index]);
    }

  }, [isOpened, expanded]);

  return (
    <div className='rf-accordion'>
      {data.map((item: IAccordion, index: number) => {
        const opened = isOpened(index);

        return (
          <div
            key={index}
            className={classnames(
              'rf-accordion__item-wrap',
              opened && 'rf-accordion__item-wrap--opened',
              item.disabled && 'rf-accordion__item-wrap--disabled'
            )}
          >
            <AccordionItem opened={opened} disabled={item.disabled} onClick={handleOpen(index)}>
              {item.title}
            </AccordionItem>

            <div className='rf-accordion__panel'>
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
