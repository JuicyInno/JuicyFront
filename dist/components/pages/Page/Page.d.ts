import React, { ReactNode } from 'react';
import './Page.scss';
import { ITab } from '../../../types';
export interface IPageProps {
    title?: ReactNode;
    className?: string;
    backUrl?: string;
    onBackUrlClick?: () => void;
    children?: ReactNode | ReactNode[];
    /** Navigation */
    navigation?: ITab[];
    preloader?: boolean;
}
declare const Page: React.FC<IPageProps>;
export default Page;
