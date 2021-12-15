import './FindEntitiesUser.scss';

import React, { useState } from 'react';

import {
  Checkbox, Avatar, Tooltip, Info, Structure, Copy, Toast
} from '../../../index';

import { IUser } from '../../../types/projects.types';

interface IFindEntitiesUserProps {
  /** Пользователь */
  user: IUser;
  /** Выбран ли пользователь */
  isSelected: boolean;
  /** Изменение выбора пользователя */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Цвет tooltip */
  tooltipBackground?: 'white' | 'default';
}

export const FindEntitiesUser: React.FC<IFindEntitiesUserProps> = ({ user, isSelected, onChange, tooltipBackground }) => {
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
                    <Structure departmentsPath={ user.departmentsPath }/>
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
