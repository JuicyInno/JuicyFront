import { FC, HTMLProps } from 'react';
import './Textarea.scss';
export interface ITextareaProps extends HTMLProps<HTMLTextAreaElement> {
    /** Автоматическое изменение высоты */
    autoResize?: boolean;
    /** Количество строк */
    initialRowCount?: number;
    /** Дебаунс */
    debounce?: number;
    /** Вернуть value */
    getValue?: (value: string) => void;
    /** Переводит инпут в невалидный статус */
    invalid?: boolean;
    /** обработка ввода комментария с эффектом debounce */
    onDebounce?: (e: Event) => void;
    /** Возможность очистки поля по клику */
    onClear?: () => void;
}
declare const Textarea: FC<ITextareaProps>;
export default Textarea;
