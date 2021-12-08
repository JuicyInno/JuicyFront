import React from 'react';
import { ITreeOption } from '../../../types';
interface IOrgTreeProps {
    /** Уникальный ID */
    id?: string;
    /** Список */
    list: ITreeOption[];
    /** Состояние открыт/закрыт */
    open?: boolean;
    /** Изменение состояние */
    onChange?: (option: ITreeOption) => void;
    /** Активная опция в случае единичного выбора */
    activeOption?: ITreeOption;
}
declare const OrgTree: React.FC<IOrgTreeProps>;
export default OrgTree;
