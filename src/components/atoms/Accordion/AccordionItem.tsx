import React, { ReactNode } from 'react';

import ChevronDown from '../../../assets/icons/ChevronDown';
import './Accordion.scss';

export interface IAccordionItemProps {
  /** Контент */
  children: ReactNode;
  /** Функция клика */
  onClick: () => void;
}

const AccordionItem: React.FC<IAccordionItemProps> = ({ children, onClick }: IAccordionItemProps) => {
  return <div className='rf-accordion__item' aria-expanded='true' onClick={onClick}>
    {children}

    <ChevronDown className='rf-accordion__item-icon' />
  </div>;
};

export default AccordionItem;
