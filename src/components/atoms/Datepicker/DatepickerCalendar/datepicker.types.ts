export type IDatepickerPeriod = 'prev' | 'current' | 'next';

export type IDatepickerPeriodType = 'day' | 'month' | 'year';

export type DateLocale = 'ru' | 'en';

export interface IDatepickerActivePeriod {
  month: number;
  year: number;
  days: IDatepickerDay[];
}

export interface IDatepickerDay {
  period: IDatepickerPeriod;
  date: Date;
}

export type IDatepickerStack = [Date | undefined, Date | undefined];

export interface IDateVariants {
  date: {
    from: Date;
    to: Date;
    value: Date;
  };
  timestamp: {
    from: number;
    to: number;
    value: number;
    utc: {
      from: number;
      to: number;
      value: number;
    }
  }
  value: string;
}

export interface IFormattedDate {
  month: string;
  monthLong: string;
  monthShort: string;
  monthName: string;
  dayOfMonth: string;
  dayOfWeek: string;
  hour: string;
  minutes: string;
  year: number;
  date: string;
  time: string;
}

export type DateFormat = 'dd.mm.yyyy' | 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'mm.dd.yyyy';
