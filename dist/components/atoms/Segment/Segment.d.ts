import React from 'react';
import './Segment.scss';
import { IOption } from '../../../types';
export declare type SegmentSliderPosition = 'start' | 'middle' | 'end';
export interface ISegmentProps {
    /** Список значений */
    list: IOption[];
    /** Изменение значения */
    onChange: (option: IOption) => void;
    /** Значение */
    value?: IOption;
    /** На всю ширину
     * @default false
    */
    fullWidth?: boolean;
}
declare const Segment: React.FC<ISegmentProps>;
export default Segment;
