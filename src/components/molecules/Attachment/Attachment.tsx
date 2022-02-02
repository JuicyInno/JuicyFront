import React, { useState } from 'react';
import Chip from '../../atoms/Chip';
import Preloader from '../../atoms/Preloader';
import { IFileData } from '../../../types';
import { classnames } from '../../../utils/classnames';
import { downloadWithLoading } from '../../../utils/download';
import { IChipProps } from '../../atoms/Chip/Chip';

import './Attachment.scss';

export interface IAttachmentProps extends Omit<IChipProps, 'children' | 'onRemove'> {
  /** Список вложенных файлов */
  attachment?: IFileData;
  /** Показывать иконку удаления
   * @default true
   */
  showRemoveIcon?: boolean;
  /** Функция удаления файла */
  onRemove?: (file: IFileData) => void;
  /** Ксласс */
  className?: string;
}

const Attachment = ({ attachment, showRemoveIcon = true, onRemove, className, ...props }: IAttachmentProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!attachment) {
    return null;
  }

  return <div className={classnames('rf-attachment', className)}>
    {isLoading && <div className='rf-attachment__loader'><Preloader size='s' /></div>}

    <Chip
      onClick={() => downloadWithLoading(attachment, setIsLoading as () => void)}
      size='s'
      type='outline'
      maxLength={30}
      tooltipBackground={'white'}
      onRemove={showRemoveIcon ? (() => onRemove?.(attachment)) : undefined}
      iconPosition='right'
      {...props}
    >
      {attachment.file.name}
    </Chip>
  </div>;
};

export default Attachment;
