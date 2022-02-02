import React, { FC } from 'react';
import './UsersStack.scss';
import { IUser } from '../../../types/projects.types';
import Avatar from '../../atoms/Avatar';
import { Size } from '../../../types';

export interface IUsersStackProps {
  users: IUser[];
  size?: Size;
  max?: number;
}

const UsersStack: FC<IUsersStackProps> = ({ users, size, max = 3 }: IUsersStackProps) => {
  const slicedUsers = users.filter((_: IUser, i: number) => i < max);

  const usersJSX = slicedUsers.map((u: IUser, i: number) => (
    <div
      className='users-stack__item'
      key={u.id}
      style={{
        transform: `translateX(-${16 * i}px)`,
        zIndex: users.length - i
      }}>
      <Avatar photo={u.photo} fullName={u.fullName} size={size} />
    </div>
  ));

  return (
    <div className='users-stack'>
      {usersJSX}
      {max < users.length && <span className='users-stack__value'>+{users.length - max}</span>}
    </div>
  );
};

export default UsersStack;
