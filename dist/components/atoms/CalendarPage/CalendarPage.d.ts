import { FC } from 'react';
import './CalendarPage.scss';
import { Variant } from '../../../types';
export interface ICalendarPageMark {
    /** Дата начала выделения. */
    from: Date;
    /** Дата конца выделения. */
    to?: Date;
    /** Цвет выделения. */
    variant: Variant;
}
export interface ICalendarPageProps {
    /** Год календаря. */
    year: number;
    /** Месяц календаря. Отсчет начинается с нулю. */
    month: number;
    /** Отметки на календаре. */
    marks?: ICalendarPageMark[];
}
declare const CalendarPage: FC<ICalendarPageProps>;
export default CalendarPage;
