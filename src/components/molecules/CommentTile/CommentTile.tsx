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

export interface ICommentTileProps {
    /** Начальный комментарий */
    comment?: string;
  /** Максимальная длина комментария */
  maxLength?: number;
  /** Начальный комментарий */
  showScroll?: boolean;
    /** Срабатывает при изменении значения*/
    onDebounce?: (result: IDebounceCommentResult) => void,
}

const Attachments: FC<ICommentTileProps> = ({
  comment = '',
  showScroll = false,
  maxLength = 255,
  onDebounce = (a) => console.log(a),
}: ICommentTileProps) => {
  const [value, setValue] = useState(comment);

  /** хранит приложенные файлы*/
  const [attachedFiles, setAttachedFiles] = useState<IRequestAttachment[] | undefined>(undefined);

  useEffect(() => {
    onDebounce({
      debounceString: value,
      attachedFiles,
    });
  }, [attachedFiles]);

  /** Изменение состояния комментария */
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  /** Получение результата после ввода комментария */
  const getResultByComment = (e: Event) => {
    console.log('value', value);
    console.log('attachedFiles', attachedFiles);
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
  const attachedFileChipsTSX = (name:string, index: number, onClick:(e:any)=>void) =>
    <div className='rf-comment-tile-chip'>
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
      (e:Event) => {
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
        className='rf-comment-tile__input-wrapper'
        label={'Комментарий'}
        labelSecondary={`(${value.length > maxLength ? maxLength : value.length}/${maxLength})`}
      >
        <Textarea autoResize={true} onDebounce={getResultByComment} onChange={onChange} value={value} placeholder='Оставить комментарий' />
      </FormGroup>
      <InputFile
        className='rf-comment-tile-button'
        showChips={false}
        setFile={setFileHandler}
        buttonType='light'
        placeholder='Прикрепить файл'
      />
      <div className='rf-comment-tile-chip-wrapper'>
        {getFileChips}
      </div>
    </Tile>
  </div>;
};

export default Attachments;
