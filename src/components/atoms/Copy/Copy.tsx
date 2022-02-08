import React, { useState } from 'react';
import { AllCopy } from '../../../indexIcon';
import { IIconProps } from '../../../types';
import { classnames } from '../../../utils/classnames';
import Toast from '../Toast';
import Tooltip from '../Tooltip';

import './Copy.scss';

export interface ICopyProps extends IIconProps {
  /** Текст при наведении */
  tooltipLabel: string;
  /** Скопированный текст */
  copyMessage: string;
  /** Сообщение после копирования */
  successCopyMessage: string;
  /** Заблокировано копирование
   * @default faslse
  */
  disabled?: boolean;
}

const Copy = ({ tooltipLabel, copyMessage, successCopyMessage, disabled, ...props }: ICopyProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopy = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsCopied(true);
    navigator.clipboard.writeText(copyMessage);
  };

  return <div role='button' className={classnames('rf-copy', disabled && 'rf-copy--disabled')}>
    <Tooltip
      position='right'
    >
      <AllCopy onClick={onCopy} className='rf-copy__icon' {...props} />
      <div>{tooltipLabel}</div>
    </Tooltip>

    {/* TODO: добавить позицию отображения */}
    <Toast isVisible={isCopied} setVisibility={setIsCopied}>
      <p className='rf-copy__toast-message'>{successCopyMessage}</p>
    </Toast>
  </div>;
};

export default Copy;
