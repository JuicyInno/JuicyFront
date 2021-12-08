import React, { FC } from 'react';
import './Modal.scss';
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
declare const Modal: FC<IModalProps>;
export default Modal;
