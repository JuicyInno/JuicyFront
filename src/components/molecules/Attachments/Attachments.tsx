import React, { useState } from 'react';
import { Chip, Preloader } from '../../..';
import { IFileData } from '../../../types';
import { classnames } from '../../../utils/classnames';
import { IChipProps } from '../../atoms/Chip/Chip';
import { sendNotification } from '../Notifications';

import './Attachments.scss';

export interface IAttachmentsProps extends Omit<IChipProps, 'children' | 'onRemove'> {
  /** Список вложенных файлов */
  attachments?: IFileData[];
  /** Показывать иконку удаления
   * @default true
   */
  showRemoveIcon?: boolean;
  /** Функция удаления файла */
  onRemove?: (index: number) => void;
  /** Ксласс */
  className?: string;
}

const defaultID = '00000000-0000-0000-0000-000000000000';

export const onDownload = ({ file, base64, id }: IFileData, setLoading: (f: boolean) => void) => {
  let url = id || base64;

  if (id && id !== '' && id !== defaultID) {
    let host = window.location.origin;

    if (host.includes('127.0.0') || host.includes('6006')) {
      host = 'https://sapd-fes-ap01.vtb24.ru:44310';
    }

    url = `${host}/sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IAttachmentContent(${id})/content`;
  }

  setLoading(true);
  fetch(url)
    .then((res) => res.blob())
    .then((blob: Blob) => {
      const ext = file.name.split('.');

      let fileUrl;

      if (ext[1] === 'pdf') {
        blob = blob.slice(0, blob.size, `application/${ext[1]}`);
        fileUrl = window.URL.createObjectURL(blob);

        window.open(fileUrl, '_blank');
      } else {
        const a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = file.name;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    })
    .catch((e) => {
      sendNotification({
        message: 'Файл не обнаружен.',
        variant: 'red'
      });
    })
    .finally(() => {
      setLoading(false);
    });
};

const Attachments = ({ attachments = [], showRemoveIcon = true, onRemove, className, ...props }: IAttachmentsProps) => {
  const [loadingIndexes, setLoadingIndexes] = useState<Record<number, boolean>>({});

  if (!attachments?.length) {
    return null;
  }

  const handleLoading = (index: number, value: boolean) => setLoadingIndexes(prevLoadingIndexes => ({
    ...prevLoadingIndexes,
    [index]: value
  }));

  return <div className={classnames('rf-attachments', className)}>
    {attachments.map((attachment, index) => (
      <div className='rf-attachments__chip' key={attachment.file.name + index}>
        <Chip
          onClick={() => onDownload(attachment, (value) => handleLoading(index, value))}
          size='s'
          type='outline'
          maxLength={30}
          tooltipBackground={'white'}
          onRemove={!loadingIndexes[index] && showRemoveIcon ? (() => onRemove?.(index)) : undefined}
          iconPosition='right'
          icon={loadingIndexes[index] && <div className='rf-attachments__loader'><Preloader size='s' /></div>}
          {...props}
        >
          {attachment.file.name}
        </Chip>
      </div>
    ))}
  </div>;
};

export default Attachments;
