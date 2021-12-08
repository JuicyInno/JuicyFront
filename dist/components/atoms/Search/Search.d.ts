import React, { HTMLProps, ReactNode } from 'react';
import './Search.scss';
import { IDebounceResult } from '../../../types/projects.types';
export interface ISearchProps extends HTMLProps<HTMLInputElement> {
    /** Возможность очистки поля по клику */
    onClear?: () => void;
    /** Показать иконку очистки */
    showClear?: boolean;
    /** Дебаунс */
    debounce?: number;
    /** Иконка в конце поля */
    endAdornment?: ReactNode;
    /** обработка нажатий с эффектом debounce */
    onDebounce?: (result: IDebounceResult) => void;
}
declare const Search: React.FC<ISearchProps>;
export default Search;
