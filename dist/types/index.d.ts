import { ReactNode, SVGProps } from 'react';
import { Placement } from '@popperjs/core';
/** Элемент списка для Radio, Checkbox и Select */
export interface IOption {
    label: string;
    value: string;
    disabled?: boolean;
    node?: ReactNode;
}
export interface ITreeOption extends IOption {
    checked: boolean;
    hasCheckedChild?: boolean;
    parent?: ITreeOption;
    children?: ITreeOption[];
    variant?: Variant;
}
export interface ICustomOption extends IOption {
    __isNew__: boolean;
}
export declare function isCustomOption(option: IOption | ICustomOption): option is ICustomOption;
/** Таб */
export interface ITab {
    /** Название вкладки */
    label: ReactNode;
    /** Содержание вкладки */
    tab?: ReactNode;
    /** Доступность вкладки */
    disabled?: boolean;
    /** Активная вкладка */
    active?: boolean;
    /** Ссылка */
    url?: string;
    /** Точность url */
    exact?: boolean;
    /** Иконка вкладки */
    icon?: ReactNode;
    /** Действие при клике на вкладку */
    handler?: (element?: HTMLElement) => void;
}
/** Элемент выпадающего списка */
export interface IListElement {
    /** Компонент элемента */
    label: ReactNode;
    /** Обработчик */
    handler?: () => void;
    /** Ссылка */
    url?: string;
    /** ID значение */
    value?: string;
    /** Disabled */
    disabled?: boolean;
    /** Отделение линией */
    separated?: boolean;
    /** Указывает что это заголовок раздела */
    isTitle?: boolean;
}
/** Контекст меню */
export interface IMenuContext {
    onClose: () => void;
    show: boolean;
}
/** Результат обработки файла */
export interface IFileData {
    file: File;
    base64: string;
    base64Compressed?: string;
    id?: string;
}
/** Чипсы */
export interface IChips {
    id: string;
    name: string;
    disabled?: boolean;
}
/** Форматированная дата */
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
/** Хлебные крошки */
export interface IBreadcrumb {
    label: string;
    url: string;
    disabled?: boolean;
}
/** Тип цветового оформления */
export declare type VariantClassic = 'default' | 'blue' | 'green' | 'yellow' | 'red';
export declare type Variant = VariantClassic | 'blue' | 'lightBlue' | 'turquoise' | 'magenta' | 'purple' | 'violet';
export declare const variantsClassic: VariantClassic[];
export declare const variants: Variant[];
export declare type BadgeVariant = 'light' | 'info' | 'warning' | 'success' | 'error' | 'grey' | 'dark' | 'light-inactive' | 'light-disable' | 'white' | 'white-inactive' | 'white-disable';
/** Цвет фона аватара */
export declare type AvatarColor = 'default' | 'white' | 'grey' | 'black';
/** Размер */
export declare type Size = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
/** Формат даты для дейтпикера */
export declare type DateFormat = 'dd.mm.yy' | 'dd.mm.yyyy';
/** Логирование */
export interface ILogRecord {
    timestamp: number;
    source: 'network' | 'redux' | 'console';
    snapshot: any;
    name?: string;
    text?: string;
    action?: any;
    pathname?: string;
}
/** Список кнопок */
export interface IButtonGroup {
    /** Кнопка */
    component?: ReactNode;
    /** Подпись в меню */
    label?: ReactNode;
    /** Описание в меню */
    description?: ReactNode;
    /** Текст при наведении */
    tooltip?: ReactNode;
    /** Ссылка в меню */
    url?: string;
    /** Клик по кнопке в меню */
    onClick?: () => void;
}
/** Пропсы иконки */
export interface IIconProps extends SVGProps<SVGSVGElement> {
    /** размер */
    size?: Size;
}
export declare type DropdownPosition = Placement;
