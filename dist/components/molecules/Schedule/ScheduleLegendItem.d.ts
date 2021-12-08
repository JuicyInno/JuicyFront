import { FC } from 'react';
import './ScheduleLegendItem.scss';
import { Variant } from '../../../types';
export interface IScheduleLegendItemProps {
    /** Цвет точки. */
    variant: Variant;
}
declare const ScheduleLegendItem: FC<IScheduleLegendItemProps>;
export default ScheduleLegendItem;
