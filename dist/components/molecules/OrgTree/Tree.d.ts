import React from 'react';
import { ITreeOption } from '../../../types';
export interface ITreeProps {
    /** Уникальный ID */
    id: string;
    /** Список */
    list: ITreeOption[];
    /** Глубина вложенности */
    depth?: number;
    /** Состояние открыт/закрыт */
    open?: boolean;
    /** Родительский элемент */
    parent?: ITreeOption;
    /** Обновление структуры */
    onChange?: (o: ITreeOption) => void;
    /** Активная запись */
    activeItem?: ITreeOption | undefined;
}
declare const Folder: React.FC<ITreeProps>;
export default Folder;
