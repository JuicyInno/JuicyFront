import { FC } from 'react';
import './HistoryCardFilter.scss';
import { IOption } from '../../../types';
export interface IHistoryCardValues {
    /** Выбранный период*/
    datePicker?: {
        startDate?: number;
        endDate?: number;
    };
    /** Начальное значение поиска*/
    search?: string;
    /** Начальное значение id статуса*/
    status?: string;
}
export interface IHistoryCardFilterProps {
    /** Показывать выбор дат или нет*/
    isShowDatePicker?: boolean;
    /** Показывать статус*/
    isShowStatusFilter?: boolean;
    /** Показывать поиск*/
    isShowSearch?: boolean;
    /** Значение статусов*/
    statusOptions?: IOption[];
    /** Начальные значения*/
    initialValues?: IHistoryCardValues;
    /** Плэйсхолдер для поиска*/
    searchPlaceholder?: string;
    /** Срабатывает при изменении значения*/
    onChange?: (values: IHistoryCardValues) => void;
}
declare const HistoryCardFilter: FC<IHistoryCardFilterProps>;
export default HistoryCardFilter;
