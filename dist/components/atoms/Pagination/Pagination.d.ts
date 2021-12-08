import React, { HTMLProps } from 'react';
import './Pagination.scss';
export interface IPaginationProps extends HTMLProps<HTMLInputElement> {
    /** Количество страниц */
    count: number;
    /** Функция получения текущей страницы */
    getCurrentPage?: (page: number) => void;
    /** Недоступные страницы */
    disabledPages?: number[];
}
declare const Pagination: React.FC<IPaginationProps>;
export default Pagination;
