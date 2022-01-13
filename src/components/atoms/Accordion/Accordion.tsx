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
  /** Открыт по умолчанию  */
  defaultOpened?: boolean;
};

export interface IAccordionProps {
  /** Массив данных */
  data: IAccordion[];
  /** Позволяет разворачивать сразу несколько элементов
   * @default false
   */
  isMultiple?: boolean;
}

const Accordion: React.FC<IAccordionProps> = ({ data = [], isMultiple = false }: IAccordionProps) => {
  const getDefaultOpenedIndexes = useCallback(() => data.reduce((acc: number[], curr: IAccordion, index: number) => {
    if (curr.defaultOpened) {
      if (isMultiple || !acc.length) {
        acc.push(index);
      }

      return acc;
    }

    return acc;
  }, []), [data.length, isMultiple]);

  const [openedIndexes, setOpenedIndexes] = useState<number[]>(() => getDefaultOpenedIndexes());

  const isOpened = useCallback((index: number) => openedIndexes.findIndex((i) => i === index) !== -1, [openedIndexes]);

  const handleOpen = useCallback((index: number) => () => {
    const oepend = isOpened(index);

    if (isMultiple) {
      if (oepend) {
        setOpenedIndexes(prevIndex => prevIndex.filter((i: number) => i !== index));
      } else {
        setOpenedIndexes(prevIndex => [...prevIndex, index]);
      }
    } else {
      setOpenedIndexes(oepend ? [] : [index]);
    }

  }, [isOpened, isMultiple]);

  return (
    <div className='rf-accordion'>
      {data.map((item: IAccordion, index: number) => {
        const opened = isOpened(index);
        const openedClassName = opened ? 'rf-accordion__item--opened' : '';

        return (
          <div key={index} className={classnames('rf-accordion__item-wrap', openedClassName)}>
            <AccordionItem onClick={handleOpen(index)}>
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
