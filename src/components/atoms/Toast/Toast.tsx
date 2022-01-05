import React, {
  FC, ReactNode, useEffect
} from 'react';
import { createPortal } from 'react-dom';

import './Toast.scss';

export interface IToastProps {
  /** Контент */
  children: ReactNode;
  /** Показывать компонент
   * @default false
   */
  isVisible?: boolean;
  /** Функция открытия/закрытия компонента */
  setVisibility: (mode: boolean) => void;
}

const Toast: FC<IToastProps> = ({ children, isVisible = false, setVisibility }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      setVisibility(false);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  const toast =
    <div data-testid='rf-toast' className='rf-toast'>
      {children}
    </div>;

  return createPortal(toast, document.body);
};

export default Toast;
