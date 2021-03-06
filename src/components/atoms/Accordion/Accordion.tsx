import './Accordion.scss';

import React, {
  ReactNode, useCallback, useState
} from 'react';
import { classnames } from '../../../utils/classnames';
import AccordionItem from './AccordionItem';

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
  /** Эффект наведения на элемент
   * @default true
   */
  hoverable?: boolean;
}

// TODO: Проверить правильность использования role='treeitem'
const Accordion: React.FC<IAccordionProps> = ({ data = [], expanded = false, hoverable = true }: IAccordionProps) => {
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
    <div className='rf-accordion' role='tree'>
      {data.map((item: IAccordion, index: number) => {
        const opened = isOpened(index);

        return (
          <div
            key={index}
            className={classnames(
              'rf-accordion__item-wrap',
              opened && 'rf-accordion__item-wrap--opened',
              hoverable && 'rf-accordion__item-wrap--hoverable',
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
