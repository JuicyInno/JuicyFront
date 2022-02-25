import React, { FC } from 'react';

import Tile from '../../atoms/Tile';
import Tag from '../../atoms/Tag';
import Button from '../../atoms/Button';


import { Variant } from '../../../types';
import { IUser } from '../../../types/projects.types';

import './Card.scss';
import EntityCard from '../EntityCard/EntityCard';

// FIXME: Elements must have sufficient color contrast
export interface ICard {
  /** id заявки */
  id?: string;
  /** Дата заявки */
  date?: string;
  /** Обработка заявки */
  onClick?: (event: React.MouseEvent, requestId?: string) => void;
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
  /** Цвет tooltip */
  tooltipBackground?: 'white' | 'default'

}

const Card: FC<ICard> = ({
  title = '',
  id = '',
  subTitle = '',
  requestNumber = '',
  date = '',
  statusText = '',
  statusColor = 'default',
  users = [],
  showActionButton = false,
  tooltipBackground = 'default',
  onClick = () => { },
}) => {

  const listUsers = users.map((user: IUser) => <EntityCard
    {...user}
    key={user.id}
    canCopy
    tooltipBackground={tooltipBackground}
    firstLabel={'Табельный номер'}
    valueByFirstLabel={user.id}
    secondLabel={user.position ? 'Должность' : user.period ? 'Период' : ''}
    valueBySecondLabel={user.position || user.period || undefined}
  />);

  const handleClick = (e: React.MouseEvent) => {
    onClick(e, id);
  };

  return <div className='rf-card__wrapper' onClick={handleClick} >
    <Tile className='rf-card__tile' >
      <div className='rf-card__row rf-card__row_first-row' >
        <div className='rf-card__title-wrapper'>
          <h1 className='rf-card__title'>{`${title} №${requestNumber} от ${date}`}</h1>
          {subTitle && <p className='rf-card__subtitle'>{subTitle}</p>}
        </div>
        <Tag variant={statusColor} >{statusText}</Tag>
      </div>
      {listUsers}
      {showActionButton && (
        <div className='rf-card__button-wrapper'>
          <Button className='rf-card__button'>
            Обработать
          </Button>
        </div>
      )}
    </Tile>
  </div>;
};

export default Card;
