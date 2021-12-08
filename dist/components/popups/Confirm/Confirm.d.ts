import React from 'react';
import './Confirm.scss';
export interface IConfirmProps {
    /** Текст сабмита */
    textAccept: string;
    /** Действие */
    onAction: (comment?: string) => void;
    /** Текст подтверждения */
    text?: string;
    onClose?: () => void;
    /** Комментарий */
    comment?: string;
    /** Показать комментарий */
    showComment?: boolean;
    /** Язык */
    lang?: string;
    /** Прелоудер */
    preloader?: boolean;
}
declare const Confirm: React.FC<IConfirmProps>;
export default Confirm;
