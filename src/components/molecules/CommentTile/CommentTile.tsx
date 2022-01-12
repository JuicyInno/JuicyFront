import React, {
  FC, useEffect, useState
} from 'react';
import Tile from '../../atoms/Tile';
import FormGroup from '../../atoms/FormGroup';
import Textarea, { ITextareaProps } from '../../atoms/Textarea';

import { IDebounceCommentResult, IRequestAttachment } from '../../../types/projects.types';

import './CommentTile.scss';
import { InputFile } from '../../../index';
import { IFileData } from '../../../types';
import { classnames } from '../../../utils/classnames';

export interface ICommentTileProps extends Omit<ITextareaProps, 'onDebounce' | 'autoResize'> {
  /** Начальный комментарий */
  comment?: string;
  /** Заголовок */
  title?: string;
  /** Автоматическое изменение высоты
   * @default false
   */
  autoResize?: boolean;
  /** Возможность прикрепить файл
   * @default true
   */
  showFieldForFiles?: boolean;
  /** Прикрепленные файлы */
  initialFiles?: IFileData[];
  /** Максимальная длина комментария
   * @default 255
   */
  maxLength?: number;
  /** Срабатывает при изменении значения*/
  onDebounce?: (result: IDebounceCommentResult) => void,
  /** Ограничение по типам файлов*/
  accept?: string
  /** Максимальный размер файлов*/
  maxSize?: number
}

const CommentTile: FC<ICommentTileProps> = ({
  comment = '',
  title = 'Комментарии и файлы',
  maxLength = 255,
  initialFiles = [],
  autoResize = false,
  showFieldForFiles = true,
  onDebounce = () => {},
  accept = '*',
  maxSize = undefined,
  ...props
}: ICommentTileProps) => {
  const [value, setValue] = useState<string>(comment);

  /** хранит приложенные файлы*/
  const [attachedFiles, setAttachedFiles] = useState<IRequestAttachment[]>(() => (
    initialFiles.map((fileObject: IFileData, index: number) => ({
      fileName: fileObject.file.name,
      base64: fileObject.base64
    }))));

  /** Отлов прикрепления файлов */
  useEffect(() => {
    onDebounce({
      debounceString: value,
      attachedFiles,
    });
  }, [attachedFiles]);

  /** Изменение начального комментария*/
  useEffect(() => {
    setValue(comment);
  }, [comment]);

  /** Изменение состояния комментария */
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    if (value.length <= maxLength) {
      setValue(event.target.value);
    } else {
      setValue(event.target.value.slice(0, maxLength));
    }
  };

  /** Получение результата после ввода комментария */
  const getResultByComment = (e: Event) => {
    onDebounce({
      debounceString: value,
      attachedFiles,
    });
  };

  /** Прикрепление файла */
  const setFileHandler = (files: IFileData[]) => {
    setAttachedFiles(files.map(file => ({
      fileName: file.file.name,
      base64: file.base64
    })));
  };

  // =======================================================================================================================================

  return <div className='rf-comment-tile__wrapper'>
    <Tile className='rf-comment-tile'>
      <h1 className='rf-comment-tile__title'>{title}</h1>

      <FormGroup
        className={classnames(
          'rf-comment-tile__input-wrapper',
          !autoResize && 'rf-comment-tile__input-wrapper--scroll'
        )}
        label={'Комментарий'}
        labelSecondary={`(${value.length > maxLength ? maxLength : value.length}/${maxLength})`}
      >
        <Textarea
          autoResize={autoResize}
          onDebounce={getResultByComment}
          onChange={onChange}
          value={value}
          placeholder='Оставить комментарий'
          {...props}
        />
      </FormGroup>

      {!!showFieldForFiles &&
        <InputFile
          className='rf-comment-tile-button'
          showChips={true}
          setFile={setFileHandler}
          buttonType='light'
          placeholder='Прикрепить файл'
          accept={accept}
          maxSize={maxSize}
          files={initialFiles}
        />
      }
    </Tile>
  </div>;
};

export default CommentTile;
