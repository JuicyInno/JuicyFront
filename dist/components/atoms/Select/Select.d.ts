import React, { FC } from 'react';
import { Props as IInfiniteScrollProps } from 'react-infinite-scroll-component';
import './Select.scss';
import { DropdownPosition, IOption } from '../../../types';
export interface ISelectProps {
    /** Варианты выбора */
    options: IOption[];
    /** Изменение значения */
    onChange: (option: IOption[]) => void;
    /** Значение */
    values: IOption[];
    /** Поиск внутри селекта
     * @param query - страка поиска
     * @param isPagination - указывает что изменилась пагинация
     */
    onSearch?: (query: string, isPagination?: boolean) => void;
    /** Множественный выбор */
    multiselect?: boolean;
    /** Плейсхолдер */
    placeholder?: string;
    /** Запрещает вводить текст */
    readOnly?: boolean;
    /** залочен или нет */
    disabled?: boolean;
    /** Максимальное количество выбранных вариантов при multiselect */
    maxOptions?: number;
    /** Прелоудер при ленивой загрузке */
    preloader?: boolean;
    /** Положение тегов - внутри инпута или под селектом */
    tagsPosition?: 'inside' | 'outside';
    /** Очистить селект при выборе значения */
    clearOnSelect?: boolean;
    /** Любое изменяемое значение (зависимость). При изменении этого параметра очищается селект */
    clearHook?: any;
    /** Вид селекта */
    variant?: 'base' | 'tag';
    /** Переводит селект в невалидный статус */
    invalid?: boolean;
    /** Указывает будет ли селект асинхронным
     * Если значение указано true, тогда нужно передавать infinityScrollProps
     * @default false
     */
    isAsync?: boolean;
    /** Пропсы для infinityScroll
     * @requires dataLength текущая длина массива
     * @requires hasMore стоит ли еще загружать данные
     */
    infinityScrollProps?: Omit<IInfiniteScrollProps, 'children' | 'next' | 'scrollableTarget' | 'loader'>;
    /** Расположение */
    position?: DropdownPosition;
    /** Событие скролла для выпадающего списка */
    onScroll?: (e: React.UIEvent) => void;
}
declare const Select: FC<ISelectProps>;
export default Select;
