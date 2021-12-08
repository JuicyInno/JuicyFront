import React from 'react';
import { IRequestAttachment, IRequestPath } from '../../../types/projects.types';
import './History.scss';
export interface IHistory {
    /** Массив с элементами истории */
    history: IRequestPath[];
    /** Документы, приложенные к истории */
    attachments?: IRequestAttachment[];
    /** Флаг на особую версию истории для проекта ЮЗЭДО */
    isUZADO?: boolean;
    /** Хост
     * @default window.location.origin
     * */
    host?: string;
}
declare const History: React.FC<IHistory>;
export default History;
