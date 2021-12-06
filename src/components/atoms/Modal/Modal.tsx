import React, {
  FC, useEffect, useState
} from 'react';
import './Modal.scss';
import { createPortal } from 'react-dom';
import { Close } from '../../../index';

export interface IModalProps {
  /** Контент модалки */
  children: React.ReactNode | React.ReactNode[];
  /** Событие закрытия */
  onClose?: () => void;
  /** Контент для шапки в модальном окне */
  header?: React.ReactNode;
  /** Контент для футера в модальном окне */
  footer?: React.ReactNode;
  /** На весь экран */
  fullScreen?: boolean;
  /** Кастомный компонент вместо */
  custom?: boolean;
}

const Modal: FC<IModalProps> = ({
  children,
  onClose,
  header,
  footer,
  custom = false,
}: IModalProps) => {
  /** Создаем контейнер для модалки */
  const [div] = useState<HTMLDivElement>(document.createElement('div'));

  /** При маунте добавляем модалку. При дестрое - удаляем. */
  useEffect(() => {
    /** Закрывает модалку при нажатии на Escape */
    const closeOnEscPress = (e: KeyboardEvent) => {
      console.log(e, onClose);

      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    document.body.appendChild(div);
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keyup', closeOnEscPress);

    return () => {
      document.body.style.overflowY = 'auto';
      document.body.removeChild(div);
      window.removeEventListener('keyup', closeOnEscPress);
    };
  }, [div]);


  /** Обертка для модалки */
  const modal = (
    <div className='rf-modal' onClick={onClose}>
      {custom ? (
        <div onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          {children}
        </div>
      ) : (
        <div
          className='rf-modal__wrapper'
          onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          {onClose && (
            <button type='button' className='rf-modal__close-button' onClick={onClose}>
              <Close />
            </button>
          )}

          {header && <div className='rf-modal__header'>{header}</div>}

          <div className='rf-modal__content'>{children}</div>

          {footer && <div className='rf-modal__footer'>{footer}</div>}
        </div>
      )
      }
    </div>
  );

  return createPortal(modal, div);
};

export default Modal;
