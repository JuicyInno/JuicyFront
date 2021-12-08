import React, { ReactNode } from 'react';
import './InputFile.scss';
import { IFileData } from '../../../types';
import { IButtonProps } from '../Button/Button';
/**
 * Файловый инпут для небольших файлов, конвертирует файл в base64.
 * Передает в коллбек setFile объект c файлом и его base64 версией { file: File, base64: string }
 *
 */
export interface IFileInputProps extends Omit<IButtonProps, 'onError'> {
    /** Имя инпута */
    name?: string;
    /** Разрешенные типы файлов */
    accept?: string;
    /** Мултивыбор файлов */
    multiple?: boolean;
    /** className */
    className?: string;
    /** Недоступный */
    disabled?: boolean;
    /** Плейсхолдер */
    placeholder?: string;
    /** Начальные файлы */
    files?: IFileData[];
    /** Функция возвращает файл в компонент */
    setFile: (file: IFileData[]) => void;
    /** Коллбек при ошибке */
    onError?: (err: Error) => void;
    /** Максимальный размер - kB */
    maxSize?: number;
    /** Количество файлов */
    count?: number;
    /** Показывать чипы файлов */
    showChips?: boolean;
    /** Кастомныый плейсхолдер */
    customPlaceholder?: ReactNode;
    /** Способ скачивания файлов */
    customDownloadMethod?: boolean;
    /** Условие для удаления вложений */
    showRemoveIcon?: boolean;
}
declare const InputFile: React.FC<IFileInputProps>;
export default InputFile;
