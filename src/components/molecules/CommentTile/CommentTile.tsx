import React, { FC, useState } from 'react';
import Tile from '../../atoms/Tile';
import FormGroup from '../../atoms/FormGroup';
import Textarea from '../../atoms/Textarea';

import { IDebounceResult, IRequestAttachment } from '../../../types/projects.types';

import './CommentTile.scss';
import {
  Chip, Close, download, InputFile
} from '../../../index';
import { IFileData } from '../../../types';

export interface ICommentTileProps {
    /** Начальный комментарий */
    comment?: string;
    /** Срабатывает при изменении значения*/
    onDebounce?: (result: IDebounceResult) => void,
}

const Attachments: FC<ICommentTileProps> = ({
  comment = '',
  onDebounce = () => console.log('333'),
}: ICommentTileProps) => {
  const [value, setValue] = useState(comment);

  /** хранит приложенные файлы*/
  const [attachedFiles, setAttachedFiles] = useState<IRequestAttachment[] | undefined>(undefined);
  const MAX_LENGTH = 255;

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const test = (e: any) => {
    console.log(e.target.value);
    console.log(value);
    console.log(attachedFiles);
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
      <Chip onClick={() => attachedFiles && download(attachedFiles[index], attachedFiles[index]?.fileName)} size='s' type='outline'>
        <div className='rf-comment-tile-chip-text'>
          {name}
          <div className='rf-comment-tile-chip-button' onClick={onClick}>
            <Close/>
          </div>
        </div>
      </Chip>
    </div>;

  // =======================================================================================================================================
  /** Отображение массива прикрепленных файлов */
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
      <FormGroup className='rf-comment-tile__input-wrapper' label={'Комментарий'} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
        <Textarea onDebounce={test} onChange={onChange} value={value} placeholder='Оставить комментарий' />
      </FormGroup>
      <InputFile className='rf-comment-tile-button' showChips={false} setFile={setFileHandler} buttonType='light' placeholder='Прикрепить файл'/>
      <div className='rf-comment-tile-chip-wrapper'>
        {getFileChips}
      </div>
    </Tile>
  </div>;
};

export default Attachments;
