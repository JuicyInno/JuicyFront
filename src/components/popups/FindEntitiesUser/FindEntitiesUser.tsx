import './FindEntitiesUser.scss';

import React from 'react';

import Checkbox from '../../atoms/Checkbox';
import Avatar from '../../atoms/Avatar';
import Structure from '../../molecules/Structure';
import Tooltip from '../../atoms/Tooltip';
import { StatusInfoFill } from '../../../indexIcon';

import { IUser } from '../../../types/projects.types';
import { Copy } from '../../..';
import { ITooltipProps } from '../../atoms/Tooltip/Tooltip';

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
  tooltipBackground?: ITooltipProps['background'];
}

export const FindEntitiesUser: React.FC<IFindEntitiesUserProps> = ({ user, isSelected, onChange, disabled, tooltipBackground }) => {
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
                      <StatusInfoFill />
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
                  <Copy
                    tooltipLabel='Скопировать ТН'
                    copyMessage={user.id}
                    successCopyMessage='ТН скопирован'
                    tooltipProps={{
                      background: tooltipBackground,
                      position: 'right'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
