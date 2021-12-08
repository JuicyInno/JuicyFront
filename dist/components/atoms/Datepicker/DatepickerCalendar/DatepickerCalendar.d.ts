import React, { Dispatch, RefObject, SetStateAction } from 'react';
import './DatepickerCalendar.scss';
import { DateFormat } from './datepicker.types';
import { DropdownPosition } from '../../../../types';
interface IDatepickerCalendarProps {
    value: string;
    setInputValue: (value: string) => void;
    showCalendar: boolean;
    toggleCalendar: Dispatch<SetStateAction<boolean>>;
    minDate?: Date;
    maxDate?: Date;
    toggleRef: RefObject<HTMLDivElement>;
    range: boolean;
    showTodayButton: boolean;
    locale: 'ru' | 'en';
    position: DropdownPosition;
    format: DateFormat;
    separator: string;
    disableWeekDays: number[];
    tooltipBackground?: 'white' | 'default';
}
declare const DatepickerCalendar: React.FC<IDatepickerCalendarProps>;
export default DatepickerCalendar;
