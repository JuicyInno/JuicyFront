import React, {
  ReactNode, useCallback, useRef, useState
} from 'react';
import './InputFile.scss';
import { IFileData } from '../../../types';
import Button from '../Button';
import { IButtonProps } from '../Button/Button';
import { getBase64, validateFile } from './file-utils';
import Attachment from '../../molecules/Attachment';

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

const InputFile: React.FC<IFileInputProps> = ({
  name = '',
  accept = '*',
  multiple = true,
  className = '',
  disabled = false,
  placeholder = '',
  files = [],
  setFile,
  onError,
  maxSize,
  count,
  showChips = true,
  customPlaceholder,
  customDownloadMethod = false,
  showRemoveIcon = true,
  ...props
}: IFileInputProps) => {
  /** Файл */
  const [file, uploadFile] = useState<IFileData[]>(() => files);
  /** Ссылка на инпут */
  const ref = useRef<HTMLInputElement>(null);
  /** Получаем картинку */
  const onChange = () => {
    if (ref.current && ref.current.files) {
      const promises: Promise<IFileData>[] = [];

      Array.from(ref.current.files as FileList).slice(0, count).forEach((fl: File) => {
        const validationResult = validateFile(fl, {
          maxSize,
          accept
        });

        if (validationResult.valid) {
          promises.push(getBase64(fl));
        } else {
          onError && onError(new Error(validationResult.error));
        }
      });

      Promise.all(promises)
        .then((data: IFileData[]) => {
          if (data && ref.current && ref.current.files) {
            const newFiles: IFileData[] = [];

            if (multiple) {
              const keysMap: Record<string, boolean> = {};
              const next = [...file, ...data].slice(0, count);

              next.forEach((f: IFileData) => {
                if (!keysMap[f.file.name + f.file.lastModified]) {
                  keysMap[f.file.name + f.file.lastModified] = true;
                  newFiles.push(f);
                }
              });
            } else {
              newFiles.push(...data);
            }

            setFile(newFiles);
            uploadFile(newFiles);
            ref.current.value = '';
          }
        })
        .catch((error: Error) => {
          console.log('%c [Ошибка] Не удалось загрузить файл(ы)', 'color: #FF5722');
          console.log(error);

          if (ref.current) {
            ref.current.value = '';
          }

          onError && onError(new Error(`Не удалось загрузить ${multiple ? 'файлы' : 'файл'}`));
        });
    }
  };

  /** Программный клик по инпуту */
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (ref.current) {
      ref.current.click();
    }
  };

  // =======================================================================================================================================

  const onRemove = useCallback((index: number) => {
    const newListFile = file;
    newListFile.splice(index, 1);

    if (!newListFile.length) {
      uploadFile([]);
      setFile([]);
    } else {
      uploadFile([...newListFile]);
      setFile([...newListFile]);
    }
  }, [file]);

  // =======================================================================================================================================

  return (
    <div className='rf-file-input__wrapper'>
      <label className={ `${className || ''}` }>
        <input
          ref={ ref }
          type='file'
          name={ name }
          className='rf-input__file-hidden'
          accept={ accept }
          placeholder={ placeholder || 'Выберите файл' }
          disabled={ disabled }
          onChange={ onChange }
          multiple={ multiple }
        />
        <Button { ...props } type='button' onClick={ onClick } disabled={ disabled }>
          { customPlaceholder || placeholder }
        </Button>
      </label>

      {showChips &&
        <div className='rf-file-input__attachments'>
          {file.map((attachment, index) => (
            <Attachment key={index} attachment={attachment} showRemoveIcon={showRemoveIcon} onRemove={() => onRemove(index)} />
          ))}
        </div>
      }
    </div>
  );
};

export default InputFile;
