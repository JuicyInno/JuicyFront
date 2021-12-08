import React from 'react';
import './PDFViewer.scss';
import { IRequestAttachment } from '../../../types/projects.types';
export interface IProps {
    /** Файл на просмотр с base64 */
    file: IRequestAttachment;
    /**
     * Ссылка для открытия в новой вкладке.
     * Должна включать полный путь до файла: host + path.
     * Инлайн data:<type>;base64,* ссылки не работают в IE 11!
     * */
    url?: string;
}
declare const PDFViewer: React.FC<IProps>;
export default PDFViewer;
