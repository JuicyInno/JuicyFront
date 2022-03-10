import React, { useMemo, useRef } from 'react';
import { Size } from '../../../types';
import { IUser, TooltipPosition } from '../../../types/projects.types';
import Avatar from '../../atoms/Avatar/Avatar';
import Tooltip from '../../atoms/Tooltip';

import './AvatarStack.scss';

export interface IAvatarStackProps {
  /** Список людей */
  list: IUser[];
  /** Размер аватаров */
  size?: Size;
  /** Id авторизированного юзера */
  currentUserId?: string;
  /** Количество видимых аватаров */
  maxVisible?: number;
  /** Расположение выпадающего списка */
  position?: TooltipPosition;
  /** Обработка клика по аватару */
  onClick?: (user: IUser) => void;
}

const AvatarStack: React.FC<IAvatarStackProps> = ({
  list,
  size = 'm',
  maxVisible = 3,
  onClick,
  position = 'bottom',
  currentUserId,
}: IAvatarStackProps) => {
  const toggleRef = useRef<HTMLDivElement>(null);
  const visibleUsers: IUser[] = [];

  list.forEach((u: IUser, i: number) => {
    i < maxVisible && visibleUsers.push(u);
  });

  const GAP = 4;

  const handleClick = (user: IUser) => {
    if (onClick) {
      onClick(user);
    }
  };

  const sortedList = useMemo(() => {
    return list.sort((a: IUser, b: IUser) => a.fullName.localeCompare(b.fullName)).sort((a) => a.id === currentUserId ? -1 : 1);
  }, [list, currentUserId]);

  const clickableClass = onClick ? 'rf-avatar-stack--clickable' : '';

  const usersJSX = visibleUsers.map((u: IUser, i: number) => (
    <div
      className={ `rf-avatar-stack__item ${clickableClass}` }
      key={ u.id }
      onClick={ () => handleClick(u) }
      style={{
        transform: `translateX(-${GAP * i}px)`,
        zIndex: list.length + i
      }}
    >
      <Avatar photo={ u.photo } fullName={ u.fullName } size={ size } />
    </div>
  ));

  return (
    <Tooltip position={position} background='white' className='rf-avatar-stack__tooltip'>
      <div className='rf-avatar-stack' ref={ toggleRef }>
        { usersJSX }
        { maxVisible < list.length && (
          <div
            data-testid='rf-avatar-stack__toggle'
            className='rf-avatar-stack__item rf-avatar-stack__collective-avatar rf-avatar-stack--clickable'
            style={ {
              transform: `translateX(-${GAP * maxVisible}px)`,
              zIndex: list.length + maxVisible
            } }
          >
            <Avatar size={ size } fullName={ `+${list.length - maxVisible}` }/>
          </div>
        ) }
      </div>

      <div className='rf-avatar-stack__collective-tooltip-wrapper'>
        <div className='rf-avatar-stack--inner-tooltip-container'>
          {sortedList.map(user => (
            <div className='rf-avatar-stack__tooltip-content-container' key={user.id}>
              <div className='rf-avatar-stack__tooltip-content-wrapper'>
                <div className='rf-avatar-stack__tooltip-avatar-wrapper'>
                  <Avatar photo={ user.photo } fullName={ user.fullName } size='m' />
                </div>
                <div className='rf-avatar-stack__tooltip-info-column'>
                  <p
                    className={`${user.id === currentUserId ?
                      'rf-avatar-stack__tooltip-name--you' :
                      'rf-avatar-stack__tooltip-name'}`}>
                    { user.id === currentUserId ? 'Вы' : user.fullName }
                  </p>
                  <p className='rf-avatar-stack__tooltip-TN'>ТН: {user.id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Tooltip>
  );
};

export default AvatarStack;
