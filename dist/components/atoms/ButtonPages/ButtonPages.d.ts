import React from 'react';
import './ButtonPages.scss';
export interface IButtonPagesProps {
    /** Количество страниц */
    max: number;
    /** Изменить страницу */
    onChange: (page: number) => void;
    /** Текущая страница */
    page?: number;
}
declare const ButtonPages: React.FC<IButtonPagesProps>;
export default ButtonPages;
