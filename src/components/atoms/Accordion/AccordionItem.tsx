import React, { ReactNode } from 'react';

import { ArrowsChevronDown, ArrowsChevronUp } from '../../../indexIcon';
import './Accordion.scss';

export interface IAccordionItemProps {
  /** Контент */
  children: ReactNode;
  /** Функция клика */
  onClick: () => void;
  /** Открыт/закрыт */
  opened: boolean;
  /** Заблокирован выбор или нет
   * @default false
   */
  disabled?: boolean;
}

const AccordionItem: React.FC<IAccordionItemProps> = ({ children, opened, disabled, onClick }: IAccordionItemProps) => (
  <div
    className='rf-accordion__item'
    onClick={!disabled ? onClick : () => { }}
    role='treeitem'
    aria-expanded={opened}
  >
    <div className='rf-accordion__item-inner'>
      {children}

      <div className='rf-accordion__item-icon'>
        {opened ? <ArrowsChevronUp /> : <ArrowsChevronDown />}
      </div>
    </div>
  </div>
);

export default AccordionItem;
