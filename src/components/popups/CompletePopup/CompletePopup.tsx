import React, { ReactNode, ReactElement } from 'react';
import './CompletePopup.scss';
import Button from '../../atoms/Button';
import {
  CircleReject, CircleConfirm, CircleReturn, CircleRefresh, CircleTrash
} from '../../../assets/legacyIcons';

import { classnames } from '../../../utils/classnames';
import Tile from '../../atoms/Tile';

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
    success: <CircleConfirm />,
    close: <CircleReject />,
    trash: <CircleTrash />,
    return: <CircleReturn />,
    refresh: <CircleRefresh />,
  };

  return icons[icon];
};

const CompletePopup: React.FC<ICompletePopupProps> = ({ label, description, onClose, buttons, icon = 'success' }: ICompletePopupProps) => {
  // -------------------------------------------------------------------------------------------------------------------

  return (
    <Tile className='rf-complete-popup' padding='32px 20px 24px' variant='clickable-hover'>
      <div className={classnames('rf-complete-popup__icon', `rf-complete-popup__icon--${icon}`)}>{getIcon(icon)}</div>

      <h5 className='rf-complete-popup__label'>{label}</h5>
      {description && <p className='rf-complete-popup__description'>{description}</p>}

      {buttons || (
        <Button fullWidth onClick={onClose} size='l' className='rf-complete-popup__btn'>
          Продолжить
        </Button>
      )}
    </Tile>
  );
};

export default CompletePopup;
