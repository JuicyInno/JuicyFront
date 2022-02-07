import React, { FC, useEffect } from 'react';
import './Modal.scss';
import { createPortal } from 'react-dom';
import { AllClose } from '../../../indexIcon';
import { classnames } from '../../../utils/classnames';
import Button from '../Button';

export type ModalSize = 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface IModalProps {
  /** Контент модалки */
  children: React.ReactNode;
  /** Событие закрытия */
  onClose?: () => void;
  /** Контент для шапки в модальном окне */
  header?: React.ReactNode;
  /** Контент для футера в модальном окне */
  footer?: React.ReactNode;
  /** Кастомный компонент вместо
   * @default false
   */
  custom?: boolean;
  /** Вид модалки
   * @default modal
   */
  variant?: 'modal' | 'drawer';
  /** Ширина Модалки
   * @default s
   */
  size?: ModalSize;
  /** Показывать разделительную полоску в footer
   * @default true
   */
  showLine?: boolean;
}

const Modal: FC<IModalProps> = ({
  children,
  onClose,
  header,
  footer,
  custom = false,
  showLine = true,
  variant = 'modal',
  size = 'xxl'
}: IModalProps) => {
  /** При маунте добавляем модалку. При дестрое - удаляем. */
  useEffect(() => {
    /** Закрывает модалку при нажатии на Escape */
    const closeOnEscPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    document.body.style.overflowY = 'hidden';
    window.addEventListener('keyup', closeOnEscPress);

    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keyup', closeOnEscPress);
    };
  }, []);


  /** Обертка для модалки */
  const modal = (
    <div
      data-testid='rf-modal'
      className={classnames('rf-modal', `rf-modal--${variant}`, `rf-modal--${size}`, showLine && 'rf-modal__footer--line')}
    >
      <div className='rf-modal__bg' onClick={onClose} />
      <div className='rf-modal__container'>
        {onClose && (
          <Button buttonType='text' startAdornment={<AllClose />} className='rf-modal__close-button' onClick={onClose} />
        )}

        {custom ? children : (
          <div className='rf-modal__wrapper'>
            {header && <div className='rf-modal__header'>{header}</div>}

            <div className='rf-modal__content'>{children}</div>

            {footer && <div className={'rf-modal__footer'}>{footer}</div>}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default Modal;
