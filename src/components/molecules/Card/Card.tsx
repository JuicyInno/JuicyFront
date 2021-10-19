import React, { FC, useState } from 'react';

import Tile from '../../atoms/Tile';
import Tag from '../../atoms/Tag';
import UserPhoto from '../../atoms/UserPhoto';
import Tooltip from '../../atoms/Tooltip';
import Toast from '../../atoms/Toast';
import Button from '../../atoms/Button';

import Copy from '../../../assets/icons/Copy';

import { Variant } from '../../../types';
import { IUser } from '../../../types/projects.types';

import './Card.scss';

export interface ICard {
  /** Дата заявки */
  date: string;
  /** */
  id: string;
  /** Обработка заявки */
  onClick: () => void;
  /** Номер заявки */
  requestNumber: string;
  /** Цвет статуса заявки */
  statusColor: Variant;
  /** Статус заявки */
  statusText: string;
  /** Вид заявки */
  subTitle?: string;
  /** Название заявки */
  title: string;
  /** Вкладка истории */
  isHistoryTab?: boolean;
  /** Пользователи */
  users: IUser[];
}

const Card: FC<ICard> = ({
  title = '',
  subTitle = '',
  requestNumber,
  date,
  statusText,
  statusColor = 'default',
  users,
  isHistoryTab,
  onClick
}) => {

  const [isCopied, setIsCopied] = useState(false);

  const copyHandler = (user: IUser) => {
    setIsCopied(true);
    navigator.clipboard.writeText(user.id);
  };

  return <div className='rf-card__wrapper' onClick={onClick}>
    <Tile className='rf-card__tile'>
      <div className='rf-card__row rf-card__row_first-row'>
        <div className='rf-card__title-wrapper'>
          <h1 className='rf-card__title'>{`${title} №${requestNumber} от ${date}`}</h1>
          {subTitle && <p className='rf-card__subtitle'>{subTitle}</p>}
        </div>
        <Tag variant={statusColor}>{statusText}</Tag>
      </div>
      {users.map((user: IUser) => (
        <div className='rf-card__row'>
          <div className='rf-card__user-wrapper'>
            <div className='rf-card__user-photo-wrapper'>
              <UserPhoto url={user.photo} radius='48' />
            </div>
            <div className='rf-card__user-info-wrapper'>
              <div className='rf-card__user-row'>
                <p className='rf-card__user-full-name'>{user.fullName}</p>
                {!!user.role && <p className='rf-card__user-role'>{`  / ${user.role}`}</p>}
              </div>
              <div className='rf-card__user-row'>
                <p className='rf-card__user-additional'>Табельный номер</p>
                <div className='rf-card__user-row'>
                  <p className='rf-card__user-accent rf-card__user-accent_number'>{user.id}</p>
                  <div className='rf-card__icon-wrapper'>
                    <Tooltip position='bottom'>
                      <Copy onClick={() => copyHandler(user)} id='copyIcon' />
                      <div className='rf-card__tooltip-text'>Скопировать ТН</div>
                    </Tooltip>
                    <Toast isVisible={isCopied} setVisibility={setIsCopied}>
                      <p className='rf-card__toast-text'>ТН скопирован</p>
                    </Toast>
                  </div>
                  {!!user.position &&
                    <>
                      <p className='rf-card__user-additional'>Должность</p>
                      <div className='rf-card__user-row'>
                        <p className='rf-card__user-accent'>{user.position}</p>
                      </div>
                    </>
                  }
                  {!!user.period &&
                    <>
                      <p className='rf-card__user-additional'>Период</p>
                      <div className='rf-card__user-row'>
                        <p className='rf-card__user-accent'>{user.period}</p>
                      </div>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {!isHistoryTab && (
        <div className='rf-card__button-wrapper'>
          <Button onClick={onClick}> Обработать </Button>
        </div>
      )}
    </Tile>
  </div>;
};

export default Card;
