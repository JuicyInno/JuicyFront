import React, { ReactNode, useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import './Menu.scss';
import { IListElement, IMenuContext } from '../../../types';
import List from './List';
import { classnames } from '../../../utils/classnames';
import { createPortal } from 'react-dom';

type ListPosition = 'left' | 'right' | 'top-left' | 'top-right';

export interface IListProps {
  /** Кнопка открытия меню */
  children: ReactNode;
  /** Элементы меню */
  list?: IListElement[];
  /** Компонент вместо списка */
  content?: ReactNode;
  /** Класс */
  className?: string;
  /** Положение слева или справа */
  position?: ListPosition;
  /** Блок, относительно которого выравнивается меню */
  relativeBlock?: HTMLElement;
  /** Меню будет отображено рядом с указанным элементом вместо тоггла */
  anchorElement?: HTMLElement | null;
  /** Максимальная ширина меню
   * @default 320px
   */
  maxWidth?: string | number;
}

/** Контекст для передачи функций работы с меню. */
export const MenuContext = React.createContext<IMenuContext>({
  onClose: () => {},
  show: false,
});

const Menu: React.FC<IListProps> = ({
  list,
  children,
  content,
  position = 'left',
  className = '',
  anchorElement,
  maxWidth = '320px',
  ...props
}: IListProps) => {
  /** Выпадающий список */
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  /** Флаг отображения выпадающего списка  */
  const [show, setShow] = useState<boolean>(false);

  /** Изменение состояния выпадающего списка */
  const onToggle = useCallback(() => {
    setShow((show: boolean) => !show);
  }, [setShow]);

  const onClose = useCallback(() => {
    setShow(false);
  }, [setShow]);

  /** Клик по кнопке */
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onToggle();
    },
    [onToggle]
  );

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'auto',
    modifiers: [
      {
        name: 'offset',
        options: { offset: [0, 14] },
      },
    ],
  });

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <MenuContext.Provider
      value={{
        onClose,
        show,
      }}
    >
      <div className={classnames('rf-menu', className)} ref={menuRef}>
        <div className='rf-menu__toggle' onClick={onClick} ref={setReferenceElement}>
          {children}
        </div>

        {createPortal(
          <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            <div style={{ display: show ? 'block' : 'none' }}>{content ? content : list && list.length > 0 && <List list={list} />}</div>
          </div>,
          document.body
        )}

        {/* <Dropdown
          show={show}
          toggleRef={toggleRef}
          anchorElement={anchorElement}
          position={position}
          relativeElement={props.relativeBlock}
          maxWidth={maxWidth}
          onClose={onClose}
          portal
        >

        </Dropdown> */}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
