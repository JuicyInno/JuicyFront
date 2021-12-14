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

export const FindEntitiesUserEmptyStateIcon = () => (
  <svg width='60' height='61' viewBox='0 0 60 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M37.5001 22.1C37.5001 17.95 34.1501 14.6 30.0001 14.6C25.8501 14.6 22.5001 17.95 22.5001 22.1C22.5001 26.25 25.8501 29.6 30.0001 29.6C34.1501 29.6 37.5001 26.25 37.5001 22.1Z'
      fill='currentColor'
    />
    <path
      d='M24.9068 32C21.195 32 17.864 34.2786 16.5187 37.738L15.0897 41.4127C14.3248 43.3793 15.7756 45.5 17.8857 45.5H42.1146C44.2247 45.5 45.6754 43.3793 44.9106 41.4127L43.4815 37.738C42.1363 34.2786 38.8052 32 35.0935 32H24.9068Z'
      fill='currentColor'
    />
  </svg>
);

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
    <div className='rf-find-entities-user' key={ user.id }>
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
