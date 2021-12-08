import { FC, ReactNode } from 'react';
import './Signification.scss';
import { IRequestAttachment } from '../../../types/projects.types';
import { IBrowserCert } from '../../molecules/CertReader/CertReader';
import { Certificate } from 'crypto-pro';
import { ITileProps } from '../../atoms/Tile/Tile';
export declare type TButtons = 'sign' | 'manual' | 'reject' | 'rejectManual';
export declare type ICustomTexts = {
    [key in TButtons]?: string;
};
export interface ISignifyCallback {
    file: IRequestAttachment;
    success?: TButtons;
    comment?: string;
    currentCert?: IBrowserCert;
}
export interface IProps extends Pick<ITileProps, 'variant'> {
    /** Изначальный файл*/
    data: IRequestAttachment;
    /** Дополнительные данные о документе*/
    documentInfo?: ReactNode;
    /** заголовок*/
    title?: string;
    /** функция- результат подписания */
    onSignify?: (result: ISignifyCallback) => void;
    /** массив в котором название кнопок для скрытия */
    hideButtons?: TButtons[];
    /** показывать ли спойлер для документа */
    isSpoiler?: boolean;
    /** открыт или закрыт спойлер для документа */
    isOpenSpoiler?: boolean;
    /** фильтр сертификатов */
    filter?: (cert: Certificate) => Promise<boolean>;
    /** кастомные названия кнопок */
    buttonCustomTexts?: ICustomTexts;
    /** ссылка на pdf если надо открыть в отдельном окне */
    pdfUrl?: string;
}
declare const Signification: FC<IProps>;
export default Signification;
