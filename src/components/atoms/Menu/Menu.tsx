import React, {
  ReactNode, useCallback, useRef, useState
} from 'react';
import { Manager, Reference } from 'react-popper';

import './Menu.scss';
import { IListElement, IMenuContext } from '../../../types';
import List from './List';
import { classnames } from '../../../utils/classnames';
import Dropdown from '../Dropdown';
import { IDropdownProps } from '../Dropdown/Dropdown';

export interface IListProps extends Pick<IDropdownProps, 'position' | 'style' | 'offset' | 'containerRef'> {
  /** Кнопка открытия меню */
  children: ReactNode;
  /** Элементы меню */
  list?: IListElement[];
  /** Компонент вместо списка */
  content?: ReactNode;
  /** Класс */
  className?: string;
  /** При клике на элемент (children) переключать открытие/скрытие меню
   * Если false то при клике на элемент меню только показывать
   * @default true
    */
  toggleTagret?: boolean;
  /** Не активно при клике
   * @default false
   */
  disabled?: boolean;
}

/** Контекст для передачи функций работы с меню. */
export const MenuContext = React.createContext<IMenuContext>({
  onClose: () => { },
  show: false,
});

const Menu: React.FC<IListProps> = ({
  list,
  children,
  content,
  className = '',
  toggleTagret = true,
  disabled = false,
  ...props
}: IListProps) => {
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

      if (disabled) {
        return;
      }

      if (toggleTagret) {
        onToggle();
      } else {
        setShow(true);
      }
    },
    [onToggle, disabled, toggleTagret]
  );

  return (
    <MenuContext.Provider
      value={{
        onClose,
        show,
      }}
    >
      <Manager>
        <div className={classnames('rf-menu', className)} data-testid='rf-menu' ref={toggleRef}>
          <Reference>
            {(referenceProps) => (
              <div {...referenceProps} className='rf-menu__toggle' onClick={onClick}>
                {children}
              </div>
            )}
          </Reference>

          <Dropdown {...props} show={show} toggleRef={toggleRef} onClose={onClose}>
            {content ? content : list && list.length > 0 && <List list={list} />}
          </Dropdown>
        </div>
      </Manager>
    </MenuContext.Provider>
  );
};

export default Menu;
