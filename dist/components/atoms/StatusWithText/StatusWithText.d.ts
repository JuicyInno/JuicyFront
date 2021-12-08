import { FC } from 'react';
import './StatusWithText.scss';
export interface IStatusWithTextProps {
    /** Текст статуса */
    statusText: string;
    /** Критичность (0 - None (blue) / 1 - Error (red) / 2 - Warning (yellow) / 3 - Success (green))*/
    criticality: string;
}
declare const StatusWithText: FC<IStatusWithTextProps>;
export default StatusWithText;
