import React, { ReactNode } from 'react';
import './PageWithSections.scss';
import { IPageSection } from '../../../types/projects.types';
import { IButtonGroup, ITab } from '../../../types';
export interface IPageWithSectionsProps {
    title?: ReactNode;
    backUrl?: string;
    onBackUrlClick?: () => void;
    sections?: IPageSection[];
    /** [DEPRECATED] Fixed action menu */
    actionMenu?: ReactNode;
    /** Всегда отображает панель с кнопками внизу страницы*/
    actionMenuAlwaysBottom?: boolean;
    preloader?: boolean;
    showNavigation?: boolean;
    /** Отключает  не корректно работающий слайдер навигации*/
    showNavigationPosition?: boolean;
    /** Navigation tabs */
    navigation?: ITab[];
    showHeader?: boolean;
    /** Кнопки действий внизу страницы */
    buttonsGroup?: IButtonGroup[];
    /** количество кнопок для меню */
    countOfButtonsGroup?: number;
}
declare const PageWithSections: React.FC<IPageWithSectionsProps>;
export default PageWithSections;
