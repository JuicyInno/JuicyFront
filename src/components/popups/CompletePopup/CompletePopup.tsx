import React, { ReactNode, ReactElement } from 'react';
import './CompletePopup.scss';
import {
  Button, CircleReject, CircleConfirm, CircleReturn, CircleRefresh, CircleTrash
} from '../../../index';
import { classnames } from '../../../utils/classnames';

export type IconType = 'success' | 'close' | 'return' | 'refresh' | 'trash';

export interface ICompletePopupProps {
  /** Заголовок */
  label: string;
  /** Описание */
  description?: string;
  /** Кнопки */
  buttons?: ReactNode | ReactNode[];
  /** Функция закрытия модалки */
  onClose?: () => void;
  /** Иконка */
  icon?: IconType;
}

const getIcon = (icon: IconType) => {

  const icons: Partial<Record<IconType, ReactElement>> = {
    'success': <CircleConfirm/>,
    'close': <CircleReject/>,
    'trash': <CircleTrash/>,
    'return': <CircleReturn/>,
    'refresh': <CircleRefresh/>
  };

  return icons[icon];
};

const CompletePopup: React.FC<ICompletePopupProps> = ({
  label,
  description,
  onClose,
  buttons,
  icon = 'success'
}: ICompletePopupProps) => {

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='rf-complete-popup'>
      <div
        className={ classnames('rf-complete-popup__icon', `rf-complete-popup__icon--${icon}`) }>{ getIcon(icon) }</div>

      <h5 className='rf-complete-popup__label'>{ label }</h5>
      { description && <p className='rf-complete-popup__description'>{ description }</p> }

      { buttons ? buttons : <Button fullWidth onClick={ onClose }>Продолжить</Button> }
    </div>
  );
};

export default CompletePopup;
