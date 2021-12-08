import React, { FC } from 'react';
import './FormGroup.scss';
export interface IFormGroup {
    /** Дочерние элементы */
    children: React.ReactNode | React.ReactNode[];
    /** Имя */
    label?: React.ReactNode;
    /** Имя */
    labelSecondary?: React.ReactNode;
    /** Сообщение об ошибке */
    errorMessage?: string;
    /** Красная подсветка нижнего лейбла*/
    invalid?: boolean;
    /** Красная подсветка labelSecondary */
    invalidLabelSecondary?: boolean;
    /** Дополнительный класс */
    className?: string;
    /** Обязательность */
    required?: boolean;
}
declare const FormGroup: FC<IFormGroup>;
export default FormGroup;
