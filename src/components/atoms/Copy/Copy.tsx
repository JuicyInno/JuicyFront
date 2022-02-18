import React, { useMemo, useState } from 'react';
import { AllCopy } from '../../../indexIcon';
import { IIconProps } from '../../../types';
import { classnames } from '../../../utils/classnames';
import Toast from '../Toast';
import { IToastProps } from '../Toast/Toast';
import Tooltip from '../Tooltip';
import { ITooltipProps } from '../Tooltip/Tooltip';

import './Copy.scss';

export interface ICopyProps extends IIconProps, Pick<IToastProps, 'containerRef'> {
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
  /** Пропсы компонента Tooltip */
  tooltipProps?: Omit<ITooltipProps, 'children'>;
}

// FIXME: Использовать button для возможности использования компонента с клавиатуры
// TODO: заменить в других компонентах
const Copy = ({ tooltipLabel, copyMessage, successCopyMessage, disabled, tooltipProps, containerRef, ...props }: ICopyProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopy = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsCopied(true);
    navigator.clipboard.writeText(copyMessage);
  };

  const toastStyle = useMemo(() => containerRef ? { top: '-50px' } : {}, [containerRef]);

  return <div role='button' className={classnames('rf-copy', disabled && 'rf-copy--disabled')}>
    <Tooltip {...tooltipProps}>
      <AllCopy onClick={onCopy} className='rf-copy__icon' aria-label='Копировать' {...props} />
      <div>{tooltipLabel}</div>
    </Tooltip>

    <Toast isVisible={isCopied} setVisibility={setIsCopied} containerRef={containerRef} style={toastStyle}>
      <p className='rf-copy__toast-message'>{successCopyMessage}</p>
    </Toast>
  </div>;
};

export default Copy;
