import React, {
  ReactNode, useCallback, useRef, RefObject, useState, useEffect
} from 'react';
import { Popper } from 'react-popper';
import './Dropdown.scss';
import useClickOutside from '../../../hooks/useClickOutside';
import { DropdownPosition } from '../../../types';
import { createPortal } from 'react-dom';
import { Options } from '@popperjs/core/lib/modifiers/offset';

export interface IDropdownProps<T extends HTMLElement = HTMLDivElement> {
  /** Контент */
  children: ReactNode | ReactNode[];
  /** Флаг отображения */
  show: boolean;
  /** Ссылка на кнопку, которая открывает элемент */
  toggleRef: RefObject<HTMLElement>;
  /** Функция закрытия дропдауна */
  onClose: () => void;
  /** Положение выпадающего меню */
  position?: DropdownPosition;
  /** Стили */
  style?: React.CSSProperties;
  /** Расстояние по оси X и Y */
  offset?: Options['offset'];
  /** Сыылка на контейнер портала */
  parentNode?: RefObject<T>;
}

const Dropdown: React.FC<IDropdownProps> = ({
  children, show, toggleRef, position, style, offset, parentNode, onClose
}: IDropdownProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState(parentNode?.current || document.body);

  useEffect(() => {
    if (parentNode?.current) {
      setContainer(parentNode.current);
    }

  }, [parentNode?.current]);

  /** Функция для отслеживания клика вне элемента */
  const handleClickOutside = useCallback(
    (event: Event) => {
      if (event.target && toggleRef.current && toggleRef.current.contains(event.target as HTMLElement)) {
        return;
      }

      onClose();
    },
    [onClose, toggleRef]
  );

  useClickOutside(contentRef, handleClickOutside);

  if (!show) {
    return null;
  }

  const content = <Popper
    placement={position}
    modifiers={[
      {
        name: 'offset',
        options: { offset: offset || [0, 8] },
      },
      {
        name: 'flip',
        options: {
          allowedAutoPlacements: [
            'right',
            'left',
            'top',
            'bottom'
          ],
          rootBoundary: 'viewport',
        },
      },
    ]}
    innerRef={contentRef}
  >
    {({ ref, style: dropdownStyle }) => (
      <div
        ref={ref}
        style={{
          ...dropdownStyle,
          ...style
        }}
        className='rf-dropdown__content'
        data-testid='rf-dropdown'
      >
        {children}
      </div>
    )}
  </Popper>;

  return createPortal(content, container);
};

export default Dropdown;
