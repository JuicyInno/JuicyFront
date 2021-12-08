import { FC } from 'react';
import './Schedule.scss';
import { ICalendarPageMark } from '../../atoms/CalendarPage';
export interface IScheduleProps {
    /** Отображаемый по умолчанию год. */
    defaultYear: number;
    /** Отображаемый по умолчанию месяц. Отсчет начинается с нулю. */
    defaultMonth: number;
    /** Отметки на календаре. */
    marks?: ICalendarPageMark[];
}
declare const Schedule: FC<IScheduleProps>;
export default Schedule;
