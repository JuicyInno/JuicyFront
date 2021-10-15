import React, { useState } from 'react';
import { Avatar } from '../../..';
import { IUser } from '../../../types/projects.types';
import './Comment.scss';

export interface IContentExpanderProps {
  user: IUser,
  commentText: string,
  createdTime?: number,
}

const Comment: React.FC<IContentExpanderProps> = ({ user, commentText, createdTime }: IContentExpanderProps) => {


  const [date, setDate] = useState(createdTime ? new Date(createdTime) : new Date());

  const currentDate = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${date.getMonth() + 1 < 10 ?
    '0' + (date.getMonth() + 1) :
    date.getMonth() + 1}.${date.getFullYear()}`;

  const currentTime = `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}  `;

  return <div className='comment'>
    <Avatar size='l' photo={user.photo} fullName={user.fullName} />
    <div className='comment__section'>

      <div className='comment__section-info'>
        <h6 className='section__fullname'>{user.fullName}</h6>
        <p className='comment-info__datetime'>{currentDate} в {currentTime}</p>
      </div>
      <div className='comment__section-comment-item'>
        <p>{commentText}</p>
      </div>
    </div>

  </div>;
};

export default Comment;
