import './FindEntitiesUser.scss';

import React, { useState } from 'react';

import Checkbox from '../../atoms/Checkbox';
import Avatar from '../../atoms/Avatar';
import Structure from '../../molecules/Structure';
import Toast from '../../atoms/Toast';
import Tooltip from '../../atoms/Tooltip';
import { Info, Copy } from '../../../indexIcon';

import { IUser } from '../../../types/projects.types';

interface IFindEntitiesUserProps {
  /** Пользователь */
  user: IUser;
  /** Выбран ли пользователь */
  isSelected: boolean;
  /** Изменение выбора пользователя */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Дизейбл чекбокса */
  disabled?: boolean;
  /** Цвет tooltip */
  tooltipBackground?: 'white' | 'default';
}

export const FindEntitiesUser: React.FC<IFindEntitiesUserProps> = ({ user, isSelected, onChange, disabled, tooltipBackground }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsCopied(true);
    navigator.clipboard.writeText(user.id);
  };

  const shortPosition = user.department.slice(0, 100);
  const isShorter = user.department.length > shortPosition.length;

  return (
    <div className='rf-find-entities-user'>
      <Checkbox
        align='flex-start'
        value={user.id}
        checked={isSelected}
        disabled={disabled}
        onChange={onChange}
        fullWidth
        label={
          <div className='rf-find-entities-user__content'>
            <div className='rf-find-entities-user__avatar'>
              <Avatar photo={ user.photo } size='m' fullName={ `${user.firstName} ${user.lastName}` }/>
            </div>
            <div>
              <div className='rf-find-entities-user__title'>
                {`${user.lastName} ${user.firstName} ${user.middleName}`}
                {!!user.departmentsPath && (
                  <Tooltip
                    position='right'
                    background={tooltipBackground}
                  >
                    <div className='rf-find-entities-user__info'>
                      <Info />
                    </div>
                    <Structure departmentsPath={ user.departmentsPath } background={tooltipBackground}/>
                  </Tooltip>
                )}
              </div>
              <div className='rf-find-entities-user__subtitle' title={ isShorter ? user.department : undefined }>
                { isShorter ? `${shortPosition}...` : shortPosition }
              </div>
              <div className='rf-find-entities-user__subtitle'>
                {user.id}
                <div className='rf-find-entities-user__copy'>
                  <Tooltip
                    position='right'
                    background={tooltipBackground}
                  >
                    <Copy onClick={onCopy} />
                    <div>Скопировать ТН</div>
                  </Tooltip>
                  <Toast isVisible={isCopied} setVisibility={setIsCopied}>
                    <p className='rf-find-entities-user__toast'>ТН скопирован</p>
                  </Toast>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
