import React, {
  ReactNode, RefObject, useCallback, useEffect, useLayoutEffect, useRef, useState
} from 'react';
import './Dropdown.scss';
import { classnames } from '../../../utils/classnames';
import { createPortal } from 'react-dom';
import useClickOutside from '../../../hooks/useClickOutside';
import { DropdownPosition } from '../../../types';

export interface ICoordinates {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export interface IDropdownProps {
  /** Контент */
  children: ReactNode | ReactNode[];
  /** Флаг отображения */
  show: boolean;
  /** Ссылка на кнопку, которая открывает элемент */
  toggleRef: RefObject<HTMLElement>;
  /** Функция закрытия дропдауна */
  onClose: () => void;
  /** Блок, относительно которого выравнивается меню */
  relativeElement?: HTMLElement;
  /**
   * Позиционировать меню через портал.
   * Убедитесь что `relativeBlock` имеет `position` `relative` или `absolute`.
   */
  portal?: boolean;
  /** Меню будет отображено рядом с указанным элементом вместо тоггла */
  anchorElement?: HTMLElement | null;
  /** Положение слева или справа */
  position?: DropdownPosition;
  /** Макс. ширина */
  maxWidth?: string | number;
}

const Dropdown: React.FC<IDropdownProps> = ({
  children,
  show,
  toggleRef,
  relativeElement,
  portal,
  anchorElement,
  position = 'left',
  maxWidth,
  onClose
}: IDropdownProps) => {

  const relativeBlock = relativeElement || (portal ? document.documentElement : document.body);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState<DropdownPosition>(position);

  // -------------------------------------------------------------------------------------------------------------------

  const [dropdownWidth, setDropdownWidth] = useState<string>('100%');

  useLayoutEffect(() => {
    if (!toggleRef.current) {
      return;
    }

    setDropdownWidth(`${toggleRef.current.offsetWidth}px`);
  });

  // -------------------------------------------------------------------------------------------------------------------

  /** Функция для отслеживания клика вне элемента */
  const handleClickOutside = useCallback((event: MouseEvent) => {
    console.log('handleClickOutside', event.target, toggleRef.current, toggleRef.current && toggleRef.current.contains(event.target as HTMLElement));

    if (event.target && toggleRef.current && toggleRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    onClose();
  }, [onClose, toggleRef]);

  useClickOutside(contentRef, handleClickOutside);

  // -------------------------------------------------------------------------------------------------------------------

  const clearCoordinates = useCallback((): ICoordinates => {
    return currentPosition === 'left' ?
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
  }, [currentPosition]);

  const [coordinates, setCoordinates] = useState<ICoordinates>(clearCoordinates());

  /** Пересчитываем координаты, если не помещается*/
  const rearrangePosition = () => {
    if (contentRef.current && toggleRef.current && show) {
      const toggleRect: DOMRect = (anchorElement || toggleRef.current).getBoundingClientRect();
      const listRect: DOMRect = contentRef.current.getBoundingClientRect();

      const GAP = 8;

      if (portal) {
        let left = 0;
        let right = 0;
        let top = 0;
        let bottom = 0;

        // Позиция по горизонтали
        if (currentPosition === 'left' || currentPosition === 'top-left') {
          // Получаем положительное число в случае если меню вылезло за пределы родителя
          const offset = (relativeBlock.scrollLeft + toggleRect.left + listRect.width + GAP) - relativeBlock.scrollWidth;
          left = relativeBlock.scrollLeft + toggleRect.left - Math.max(0, offset);
        } else {
          const offset = listRect.width + GAP - (relativeBlock.scrollLeft + toggleRect.right);
          right = relativeBlock.offsetWidth - (relativeBlock.scrollLeft + toggleRect.right) - Math.max(0, offset);
        }

        // Позиция по вертикали
        if (currentPosition === 'left' || currentPosition === 'right') {
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
        let top: number = toggleRect.height + GAP;

        if (toggleRect.height + toggleRect.top + listRect.height > relativeBlock.offsetHeight) {
          top =
            toggleRect.height -
            (toggleRect.height + toggleRect.top + listRect.height - relativeBlock.offsetHeight) -
            GAP;
        }

        if (currentPosition === 'top-right' || currentPosition === 'top-left') {
          top = -listRect.height - GAP;
        }

        if (currentPosition === 'left' || currentPosition === 'top-left') {
          if (toggleRect.left + listRect.width > relativeBlock.offsetWidth) {
            left = relativeBlock.offsetWidth - listRect.width - toggleRect.left - GAP;
          }

          setCoordinates({
            left: `${left}px`,
            top: `${top}px`,
            right: 'auto',
            bottom: 'auto',
          });
        } else {
          if (listRect.left < 0) {
            right = listRect.left - GAP;
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

  const handlePosition = () => {
    if (contentRef.current && toggleRef.current) {
      const listRect: DOMRect = contentRef.current.getBoundingClientRect();
      const toggleRect: DOMRect = toggleRef.current.getBoundingClientRect();

      const diffTop = toggleRect.top;
      const diffBottom = window.innerHeight - toggleRect.bottom;

      const showTop = diffTop - listRect.height > 0;
      const showBottom = diffBottom - listRect.height > 0;

      // Если меню помещается сверху и снизу, то устанавливаем значение по умолчанию
      if (showTop && showBottom) {
        setCurrentPosition(position);
        return;
      }

      // Если позиция была указана сверху и не помещается сверху и помещается снизу
      if (currentPosition === 'top-left' || currentPosition === 'top-right') {
        if (!showTop && showBottom) {
          if (currentPosition === 'top-left') {
            setCurrentPosition('left');
          } else {
            setCurrentPosition('right');
          }
        }
      } else {
        // Если позиция была указана снизу и не помещается снизу и помещается сверху
        if (showTop && !showBottom) {
          if (currentPosition === 'left') {
            setCurrentPosition('top-left');
          } else {
            setCurrentPosition('top-right');
          }
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handlePosition);

    return () => window.removeEventListener('scroll', handlePosition);
  }, [
    currentPosition,
    portal,
    position,
    show
  ]);

  useEffect(() => {
    rearrangePosition();

  }, [
    currentPosition,
    portal,
    position,
    show
  ]);

  useLayoutEffect(() => {
    handlePosition();

  }, [
    show,
    anchorElement,
    portal,
    position
  ]);

  const dropdownJSX = (
    <div
      className={classnames('rf-dropdown__content', show && 'rf-dropdown__content--show', portal && 'rf-dropdown__content--portal')}
      style={{
        ...coordinates,
        maxWidth: maxWidth || dropdownWidth
      }}
      data-testid='rf-dropdown-content'
      ref={contentRef}
    >
      {children}
    </div>
  );

  return portal ? createPortal(dropdownJSX, document.body) : dropdownJSX;
};

export default Dropdown;
