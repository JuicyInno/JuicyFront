import React, { FC, useState } from 'react';

import UserPhoto from '../../atoms/UserPhoto';
import Tooltip from '../../atoms/Tooltip';
import Toast from '../../atoms/Toast';

import Copy from '../../../assets/icons/Copy';

import './UserCard.scss';

export interface IUserPositions {
    /** Уникальный ID карточки */
    id: string;
    /** ФИО */
    fullName: string;
    /** Ссылка на фото */
    photo: string;
    /** Роль пользователя */
    role?: string;
    /** Период для заявки */
    period?: string;
    /** Должность */
    position?: string;
    /** Первый лейбл */
    firstLabel?: string;
    /** Значение первого лейбла */
    valueByFirstLabel?: string;
    /** Можно скопировать первый лейбл */
    canCopy?: boolean;
    /** Второй лейбл */
    secondLabel?: string;
    /** Значение второго лейбла */
    valueBySecondLabel?: string;
}

const UserCard: FC<IUserPositions> = ({
  id,
  fullName,
  photo,
  role = '',
  firstLabel = '',
  valueByFirstLabel = '',
  secondLabel = '',
  valueBySecondLabel = '',
  position = '',
  period = '',
  canCopy = false,

}) => {

  const [isCopied, setIsCopied] = useState(false);

  const copyHandler = (value: string) => {
    setIsCopied(true);
    navigator.clipboard.writeText(value);
  };

  return <div className='rf-card__row' key={id}>
    <div className='rf-card__user-wrapper'>
      <div className='rf-card__user-photo-wrapper'>
        <UserPhoto url={photo} radius='48' />
      </div>
      <div className='rf-card__user-info-wrapper'>
        <div className='rf-card__user-row'>
          <p className='rf-card__user-full-name'>{fullName}</p>
          {!!role && <p className='rf-card__user-role'>{`  / ${role}`}</p>}
        </div>
        <div className='rf-card__user-row'>
          <p className='rf-card__user-additional'>{firstLabel}</p>
          <div className='rf-card__user-row'>
            <p className='rf-card__user-accent rf-card__user-accent_number'>{valueByFirstLabel}</p>
            {!!canCopy && <div className='rf-card__icon-wrapper'>
              <Tooltip position='bottom'>
                <Copy onClick={() => copyHandler(valueByFirstLabel)} id='copyIcon'/>
                <div className='rf-card__tooltip-text'>Скопировать ТН</div>
              </Tooltip>
              <Toast isVisible={isCopied} setVisibility={setIsCopied}>
                <p className='rf-card__toast-text'>ТН скопирован</p>
              </Toast>
            </div>
            }
            {position && !secondLabel &&
                        <>
                          <p className='rf-card__user-additional'>Должность</p>
                          <div className='rf-card__user-row'>
                            <p className='rf-card__user-accent'>{position}</p>
                          </div>
                        </>
            }
            {period && !secondLabel &&
                        <>
                          <p className='rf-card__user-additional'>Период</p>
                          <div className='rf-card__user-row'>
                            <p className='rf-card__user-accent'>{period}</p>
                          </div>
                        </>
            }
            {secondLabel && valueBySecondLabel &&
                        <>
                          <p className='rf-card__user-additional'>{secondLabel}</p>
                          <div className='rf-card__user-row'>
                            <p className='rf-card__user-accent'>{valueBySecondLabel}</p>
                          </div>
                        </>
            }
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default UserCard;
