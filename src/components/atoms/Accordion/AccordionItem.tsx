import React, { ReactNode } from 'react';

import { AllAdd, AllReduce } from '../../../indexIcon';
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

// FIXME: Elements must only use allowed ARIA attributes
const AccordionItem: React.FC<IAccordionItemProps> = ({ children, opened, disabled, onClick }: IAccordionItemProps) => (
  <div
    className='rf-accordion__item'
    aria-expanded='true'
    onClick={!disabled ? onClick : () => { }}
  >
    <div className='rf-accordion__item-inner'>
      {children}

      {opened ? <AllReduce className='rf-accordion__item-icon' /> : <AllAdd className='rf-accordion__item-icon' />}
    </div>
  </div>
);

export default AccordionItem;
