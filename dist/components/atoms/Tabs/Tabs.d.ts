import React, { ReactNode } from 'react';
import './Tabs.scss';
import { ITab } from '../../../types';
export interface ITabsProps {
    /** Список вкладок */
    list: ITab[];
    /**
     * @default true
     * Показывать линию под табами
     * */
    showLine?: boolean;
    /**
     * Показывать меню если табы не вмещаются в контейре
     * @default true
    */
    showMenu?: boolean;
    /** Если во вкладках есть url, то через children пробрасывается <Router/> */
    children?: ReactNode | ReactNode[];
}
declare const Tabs: React.FC<ITabsProps>;
export default Tabs;
