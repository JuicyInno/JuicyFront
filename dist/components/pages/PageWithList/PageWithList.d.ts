import React, { ReactNode } from 'react';
import './PageWithList.scss';
export interface IPageWithListProps {
    /** Наполнение */
    children: ReactNode | ReactNode[];
    /** Панель с  фильтрами */
    filters?: ReactNode;
    /** Fixed action menu */
    actionMenu?: ReactNode;
    preloader?: boolean;
    /** overflow с внутренним скроллом для списка */
    overflowList?: boolean;
}
declare const PageWithList: React.FC<IPageWithListProps>;
export default PageWithList;
