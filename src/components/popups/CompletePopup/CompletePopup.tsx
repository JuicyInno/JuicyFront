import React, {
  ReactNode, ReactElement, useCallback
} from 'react';
import './CompletePopup.scss';
import {
  Button, CircleReject, CircleConfirm, CircleReturn, CircleRefresh, CircleTrash
} from '../../../index';
import { classnames } from '../../../utils/classnames';

type IconType = 'success' | 'close' | 'return' | 'refresh' | 'trash';

export interface ICompletePopupProps {
  label: string;
  description: string;
  buttons?: ReactNode | ReactNode[];
  onClose?: () => void;
  icon?: IconType;
}

const CompletePopup: React.FC<ICompletePopupProps> = ({ label, description, onClose, buttons, icon = 'success' }: ICompletePopupProps) => {

  const icons: Partial<Record<IconType, ReactElement>> = {
    'success': <CircleConfirm />,
    'close': <CircleReject />,
    'trash': <CircleTrash />,
    'return': <CircleReturn />,
    'refresh': <CircleRefresh />
  };

  const getIcon = useCallback(() => {
    if (icons[icon]) {
      return <div className={classnames('rf-complete-popup__icon', `rf-complete-popup__icon--${icon}`)}>{icons[icon]}</div>;
    }

    return <div className={classnames('rf-complete-popup__icon', 'rf-complete-popup__icon--success')}><CircleConfirm /></div>;
  }, [icon]);

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='rf-complete-popup'>
      {getIcon()}

      <h5 className='rf-complete-popup__label'>{ label }</h5>
      <p className='rf-complete-popup__description'>{ description }</p>

      {buttons ? buttons : <Button fullWidth onClick={ onClose }>Продолжить</Button>}
    </div>
  );
};

export default CompletePopup;
