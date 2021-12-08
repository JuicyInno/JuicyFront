import { FC } from 'react';
import { IDebounceCommentResult } from '../../../types/projects.types';
import './CommentTile.scss';
import { IFileData } from '../../../types';
export interface ICommentTileProps {
    /** Начальный комментарий */
    comment?: string;
    /** Заголовок */
    title?: string;
    /** Автоматическое изменение высоты */
    autoResize?: boolean;
    /** Возможность прикрепить файл */
    showFieldForFiles?: boolean;
    /** Прикрепленные файлы */
    initialFiles?: IFileData[];
    /** Максимальная длина комментария */
    maxLength?: number;
    /** Срабатывает при изменении значения*/
    onDebounce?: (result: IDebounceCommentResult) => void;
    /** Ограничение по типам файлов*/
    accept?: string;
    /** Максимальный размер файлов*/
    maxSize?: number;
}
declare const CommentTile: FC<ICommentTileProps>;
export default CommentTile;
