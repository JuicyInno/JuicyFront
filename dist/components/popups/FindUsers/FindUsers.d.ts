import { FC, ReactNode } from 'react';
import './FindUsers.scss';
import { AxiosStatic } from 'axios';
import { IUser } from '../../../types/projects.types';
export interface IProps {
    onClose?: () => void;
    /** Список уже выбранных пользователей */
    users?: IUser[];
    /** Вернуть выбранных пользователей в компонент */
    getUsers?: (data: IUser[]) => void;
    /** Подзаголовок */
    subtitle?: ReactNode;
    /** Деактивировать выбранных пользователей */
    disableSelected?: boolean;
    /** Множественный выбор */
    multiSelect?: boolean;
    /** Хост запроса */
    host?: string;
    /** Хедерсы запроса */
    headers?: Record<string, string>;
    /** DI Axios */
    AxiosInstance?: AxiosStatic;
    /** Вкладка ВСЕ */
    showAll?: boolean;
    /** Исключить из поиска */
    searchOption?: number[];
    /** Фон тултипа */
    tooltipBackground?: 'default' | 'white';
}
declare const FindUsers: FC<IProps>;
export default FindUsers;
