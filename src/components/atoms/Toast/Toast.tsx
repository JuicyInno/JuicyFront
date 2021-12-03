import React, {
  FC, ReactNode, useEffect, useMemo, useRef
} from 'react';
import { createPortal } from 'react-dom';

import './Toast.scss';

export interface IProps {
  /** Содержимое toast */
  children: ReactNode;
  /** Поаказать toast */
  isVisible: boolean;
  /**
   * Длитиельность показа в мс
   * @default 2000
   *  */
  duration?: number
  /** Функция отображения toast */
  setVisibility: (mode: boolean) => void;
}

const Toast: FC<IProps> = ({ children, isVisible = false, setVisibility, duration = 2000 }) => {
  console.log(isVisible);

  useEffect(() => {
    setTimeout(() => {
      setVisibility(false);
    }, duration);

  }, [isVisible]);

  const div = useMemo<HTMLDivElement>(() => document.createElement('div'), []);


  /** При маунте добавляем модалку. При дестрое - удаляем. */
  useEffect(() => {
    /** Контейнер для модалки */
    document.body.appendChild(div);

    return () => {
      document.body.removeChild(div);
    };
  }, [div]);

  const toastEl = useRef<HTMLDivElement>(null);

  const position = {
    top: '20px',
    right: `${window.innerWidth / 2 - (toastEl.current?.clientWidth ? toastEl.current?.clientWidth / 2 : 0)}px`,
  };

  const toast = <div
    ref={toastEl}
    style={position}
    className={`rf-toast ${isVisible ? 'visible' : 'not-visible'}`}
  >
    {children}
  </div>;

  return createPortal(toast, div);
};

export default Toast;
