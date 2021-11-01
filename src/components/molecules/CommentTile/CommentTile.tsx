import React, {
  FC, useEffect, useState
} from 'react';
import Tile from '../../atoms/Tile';
import FormGroup from '../../atoms/FormGroup';
import Textarea from '../../atoms/Textarea';

import { IDebounceCommentResult, IRequestAttachment } from '../../../types/projects.types';

import './CommentTile.scss';
import {
  Chip, Close, download, InputFile
} from '../../../index';
import { IFileData } from '../../../types';
import { classnames } from '../../../utils/classnames';

export interface ICommentTileProps {
    /** Начальный комментарий */
    comment?: string;
    /** Автоматическое изменение высоты */
    autoResize?: boolean;
    /** Прикрепленные файлы */
    initialFiles?: IRequestAttachment[] | undefined;
    /** Максимальная длина комментария */
    maxLength?: number;
    /** Срабатывает при изменении значения*/
    onDebounce?: (result: IDebounceCommentResult) => void,
    /** Ограничение по типам файлов*/
    accept?:string
    /** Максимальный размер файлов*/
    maxSize?:number
}

const CommentTile: FC<ICommentTileProps> = ({
  comment = '',
  maxLength = 255,
  initialFiles = undefined,
  autoResize = false,
  onDebounce = () => {},
  accept = '*',
  maxSize = undefined
}: ICommentTileProps) => {
  const [value, setValue] = useState<string>(comment);

  /** хранит приложенные файлы*/
  const [attachedFiles, setAttachedFiles] = useState<IRequestAttachment[] | undefined>(initialFiles);

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
  const setFileHandler = (file: IFileData[]) => {
    const newFile = {
      fileName: file[0].file.name,
      base64: file[0].base64
    };

    if (attachedFiles?.length) {
      setAttachedFiles([...attachedFiles, newFile]);
    } else {
      setAttachedFiles([newFile]);
    }
  };

  // =======================================================================================================================================
  /** Чип прикрепленного файла */
  const attachedFileChipsTSX = (name:string, index: number, onClick:(e: React.MouseEvent)=>void) =>
    <div className='rf-comment-tile-chip' key={name + index}>
      <Chip
        onClick={() => attachedFiles && download(attachedFiles[index], attachedFiles[index]?.fileName)}
        size='s'
        type='outline'
      >
        <div className='rf-comment-tile-chip-text'>
          {name}
          <div className='rf-comment-tile-chip-button' onClick={onClick}>
            <Close/>
          </div>
        </div>
      </Chip>
    </div>;

  // =======================================================================================================================================
  /** Отображение чипов прикрепленных файлов */
  const getFileChips = attachedFiles?.length && attachedFiles
    .map((file: IRequestAttachment, index: number) => attachedFileChipsTSX(
      file.fileName,
      index,
      (e:React.MouseEvent) => {
        e.stopPropagation();
        const newListFile = attachedFiles;
        newListFile.splice(index, 1);

        if (!newListFile.length) {
          setAttachedFiles(undefined);
        } else {
          setAttachedFiles([...newListFile]);
        }
      }
    ));

  // =======================================================================================================================================

  return <div className='rf-comment-tile__wrapper'>
    <Tile className='rf-comment-tile'>
      <h1 className='rf-comment-tile__title'>Комментарии и файлы</h1>
      <FormGroup
        className={classnames(
          'rf-comment-tile__input-wrapper',
          !autoResize && 'rf-comment-tile__input-wrapper--scroll'
        )}
        label={'Комментарий'}
        showLargeSizeFirstLabel
        labelSecondary={`(${value.length > maxLength ? maxLength : value.length}/${maxLength})`}
      >
        <Textarea autoResize={autoResize}
          onDebounce={getResultByComment}
          onChange={onChange}
          value={value}
          placeholder='Оставить комментарий' />
      </FormGroup>
      <InputFile
        className='rf-comment-tile-button'
        showChips={false}
        setFile={setFileHandler}
        buttonType='light'
        placeholder='Прикрепить файл'
        accept = {accept}
        maxSize = {maxSize}
      />
      <div className='rf-comment-tile-chip-wrapper'>
        {getFileChips}
      </div>
    </Tile>
  </div>;
};

export default CommentTile;
