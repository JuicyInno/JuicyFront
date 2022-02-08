import React, {
  CSSProperties,
  FC, ReactNode, RefObject, useEffect, useState
} from 'react';
import { createPortal } from 'react-dom';

import './Toast.scss';

export interface IToastProps<T extends HTMLElement = HTMLDivElement> {
  /** Контент */
  children: ReactNode;
  /** Показывать компонент
   * @default false
   */
  isVisible?: boolean;
  /** Сыылка на контейнер портала */
  containerRef?: RefObject<T>;
  /** Функция открытия/закрытия компонента */
  setVisibility: (mode: boolean) => void;
  /** Инлайн стили */
  style?: CSSProperties;
}

const Toast: FC<IToastProps> = ({ children, isVisible = false, containerRef, style, setVisibility }) => {
  const [container, setContainer] = useState(containerRef?.current || document.body);

  useEffect(() => {
    const id = setTimeout(() => {
      setVisibility(false);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [isVisible]);

  useEffect(() => {
    if (containerRef?.current) {
      setContainer(containerRef.current);
    }

  }, [containerRef?.current]);

  if (!isVisible) {
    return null;
  }

  const toast =
    <div data-testid='rf-toast' className='rf-toast' style={style}>
      {children}
    </div>;

  return createPortal(toast, container);
};

export default Toast;
