import { ReactNode, FC } from 'react';
import './FatalError.scss';
export interface IFatalErrorProps {
    /** Компонент для изображения ошибки */
    icon?: ReactNode;
    /** Заголовок ошибки */
    title?: string;
    /** Описание ошибки */
    description?: string;
}
declare const FatalError: FC<IFatalErrorProps>;
export default FatalError;
