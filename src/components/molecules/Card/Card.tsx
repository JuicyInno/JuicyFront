import React, { FC } from 'react';

import Tile from '../../atoms/Tile';
import Tag from '../../atoms/Tag';
import Button from '../../atoms/Button';


import { Variant } from '../../../types';
import { IUser } from '../../../types/projects.types';

import './Card.scss';
import UserCard from '../EntityCard/EntityCard';

export interface ICard {
  /** Дата заявки */
  date?: string;
  /** Обработка заявки */
  onClick?: () => void;
  /** Номер заявки */
  requestNumber?: string;
  /** Цвет статуса заявки */
  statusColor?: Variant;
  /** Статус заявки */
  statusText?: string;
  /** Вид заявки */
  subTitle?: string;
  /** Название заявки */
  title?: string;
  /** Кнопка обработки заявки */
  showActionButton?: boolean;
  /** Пользователи */
  users?: IUser[];
}

const Card: FC<ICard> = ({
  title = '',
  subTitle = '',
  requestNumber = '',
  date = '',
  statusText = '',
  statusColor = 'default',
  users = [],
  showActionButton = false,
  onClick = () => { },
}) => {

  const listUsers = users.map((user: IUser) => <UserCard
    {...user}
    key={user.id}
    canCopy
    firstLabel={'Табельный номер'}
    valueByFirstLabel={user.id}
    secondLabel={ user.position ? 'Должность' : user.period ? 'Период' : ''}
    valueBySecondLabel={ user.position || user.period || undefined }
  />);

  return <div className='rf-card__wrapper' onClick={onClick}>
    <Tile key={`${title}${requestNumber}${date}`} className='rf-card__tile'>
      <div className='rf-card__row rf-card__row_first-row'>
        <div className='rf-card__title-wrapper'>
          <h1 className='rf-card__title'>{`${title} №${requestNumber} от ${date}`}</h1>
          {subTitle && <p className='rf-card__subtitle'>{subTitle}</p>}
        </div>
        <Tag variant={statusColor} onClick={onClick}>{statusText}</Tag>
      </div>
      {listUsers}
      {showActionButton && (
        <div className='rf-card__button-wrapper'>
          <Button className='rf-card__button' > Обработать </Button>
        </div>
      )}
    </Tile>
  </div>;
};

export default Card;
