import React, { ReactNode } from 'react';
import './CompletePopup.scss';
export declare type IconType = 'success' | 'close' | 'return' | 'refresh' | 'trash';
export interface ICompletePopupProps {
    /** Заголовок */
    label: string;
    /** Описание */
    description?: string;
    /** Кнопки */
    buttons?: ReactNode | ReactNode[];
    /** Функция закрытия модалки */
    onClose?: () => void;
    /** Иконка */
    icon?: IconType;
}
declare const CompletePopup: React.FC<ICompletePopupProps>;
export default CompletePopup;
