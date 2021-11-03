import React, {
  ReactNode, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';

import './Menu.scss';
import { IListElement, IMenuContext } from '../../../types';
import List from './List';
import useClickOutside from '../../../hooks/useClickOutside';
import { classnames } from '../../../utils/classnames';

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
  position?: 'left' | 'right' | 'top-left' | 'top-right';
  /** Блок, относительно которого выравнивается меню */
  relativeBlock?: HTMLElement;
  /**
   * Позиционировать меню через портал.
   * Убедитесь что `relativeBlock` имеет `position` `relative` или `absolute`.
   */
  portal?: boolean;
  /** Меню будет отображено рядом с указанным элементом вместо тоггла */
  anchorElement?: HTMLElement | null;
}

/** Контекст для передачи функций работы с меню. */
export const MenuContext = React.createContext<IMenuContext>({
  onClose: () => {},
  show: false
});

const Menu: React.FC<IListProps> = ({
  list,
  children,
  content,
  position = 'left',
  className = '',
  portal,
  anchorElement,
  ...props
}: IListProps) => {
  // Обратная совместимость с версией без поратала
  const relativeBlock = props.relativeBlock || (portal ? document.documentElement : document.body);

  /** Выпадающий список */
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  /** Флаг отображения выпадающего списка  */
  const [show, setShow] = useState<boolean>(false);

  /** Клик по кнопке */
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onToggle();
  };

  /** Изменение состояния выпадающего списка */
  const onToggle = () => {
    setShow(!show);
  };

  const onClose = () => {
    setShow(false);
  };

  // -------------------------------------------------------------------------------------------------------------------
  /** Контейнер для портала */
  const div = useMemo<HTMLDivElement>(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(div);

    return () => {
      document.body.removeChild(div);
    };
  }, [div]);

  // -------------------------------------------------------------------------------------------------------------------

  /** Функция для отслеживания клика вне элемента */
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (event.target && toggleRef.current && toggleRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    onClose();
  }, [setShow, toggleRef]);

  useClickOutside(contentRef, handleClickOutside);

  // -------------------------------------------------------------------------------------------------------------------

  const clearCoordinates = () => {
    return position === 'left' ?
      {
        top: '-99999px',
        bottom: 'auto',
        left: '0',
        right: 'auto'
      } :
      {
        top: '-99999px',
        bottom: 'auto',
        left: 'auto',
        right: '0'
      };
  };

  const [coordinates, setCoordinates] = useState(clearCoordinates());

  /** Пересчитываем координаты, если не помещается*/
  const rearrangePosition = () => {
    if (contentRef.current && toggleRef.current) {
      const toggleRect: DOMRect = (anchorElement || toggleRef.current).getBoundingClientRect();
      const listRect: DOMRect = contentRef.current.getBoundingClientRect();

      if (portal) {
        const GAP = 8;

        let left = 0;
        let right = 0;
        let top = 0;
        let bottom = 0;

        // Позиция по горизонтали
        if (position === 'left' || position === 'top-left') {
          // Получаем положительное число в случае если меню вылезло за пределы родителя
          const offset = (relativeBlock.scrollLeft + toggleRect.left + listRect.width + GAP) - relativeBlock.scrollWidth;
          left = relativeBlock.scrollLeft + toggleRect.left - Math.max(0, offset);
        } else {
          const offset = listRect.width + GAP - (relativeBlock.scrollLeft + toggleRect.right);
          right = relativeBlock.offsetWidth - (relativeBlock.scrollLeft + toggleRect.right) - Math.max(0, offset);
        }

        // Позиция по вертикали
        if (position === 'left' || position === 'right') {
          const offset = (toggleRect.bottom + relativeBlock.scrollTop + listRect.height + GAP * 2) - relativeBlock.scrollHeight;
          top = toggleRect.bottom + relativeBlock.scrollTop + GAP - Math.max(0, offset);
        } else {
          const offset = (listRect.height + GAP * 2) - (toggleRect.top + relativeBlock.scrollTop);
          bottom = relativeBlock.scrollHeight - (toggleRect.top + relativeBlock.scrollTop) + GAP - Math.max(0, offset);
        }

        setCoordinates({
          left: left ? `${left}px` : 'auto',
          top: top ? `${top}px` : 'auto',
          right: right ? `${right}px` : 'auto',
          bottom: bottom ? `${bottom}px` : 'auto',
        });

      } else {
        let left = 0;
        let right = 0;
        let top: number = toggleRect.height;
        const minGap = 10;

        if (toggleRect.height + toggleRect.top + listRect.height > relativeBlock.offsetHeight) {
          top =
          toggleRect.height -
          (toggleRect.height + toggleRect.top + listRect.height - relativeBlock.offsetHeight) -
          minGap;
        }

        if (position === 'top-right' || position === 'top-left') {
          top = -listRect.height - minGap;
        // debugger;
        }

        if (position === 'left' || position === 'top-left') {
          if (toggleRect.left + listRect.width > relativeBlock.offsetWidth) {
            left = relativeBlock.offsetWidth - listRect.width - toggleRect.left - minGap;
          }

          setCoordinates({
            left: `${left}px`,
            top: `${top}px`,
            right: 'auto',
            bottom: 'auto',
          });
        } else {
          if (listRect.left < 0) {
            right = listRect.left - minGap;
          }

          setCoordinates({
            left: 'auto',
            top: `${top}px`,
            right: `${right}px`,
            bottom: 'auto',
          });
        }
      }
    }
  };

  useLayoutEffect(() => {
    if (show) {
      rearrangePosition();
    } else {
      setCoordinates(clearCoordinates());
    }
  }, [
    show,
    portal,
    anchorElement,
    position
  ]);
  // -------------------------------------------------------------------------------------------------------------------

  const menu = (
    <div
      className={classnames('rf-menu__content', show && 'rf-menu__content--show', portal && 'rf-menu__content--portal')}
      style={coordinates}
      ref={contentRef}
    >
      {content ? content : list && list.length > 0 && <List list={list} />}
    </div>
  );

  return (
    <MenuContext.Provider value={{
      onClose,
      show
    }}>
      <div className={classnames('rf-menu', className)} ref={menuRef}>
        <div className='rf-menu__toggle' onClick={onClick} ref={toggleRef}>
          {children}
        </div>
        {portal ? createPortal(menu, div) : menu}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
