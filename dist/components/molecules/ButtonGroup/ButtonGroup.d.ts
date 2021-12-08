import React from 'react';
import './ButtonGroup.scss';
import { IButtonGroup } from '../../../types';
export interface IButtonGroupProps {
    /** Список кнопок */
    list: IButtonGroup[];
    /** Максимальное количество показываемых кнопок */
    max?: number;
}
declare const ButtonGroup: React.FC<IButtonGroupProps>;
export default ButtonGroup;
