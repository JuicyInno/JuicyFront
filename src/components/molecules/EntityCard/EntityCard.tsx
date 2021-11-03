import React, { FC, useState } from 'react';

import UserPhoto from '../../atoms/UserPhoto';
import Tooltip from '../../atoms/Tooltip';
import Toast from '../../atoms/Toast';

import Copy from '../../../assets/icons/Copy';

import './EntityCard.scss';

export interface IUserPositions {
    /** ФИО */
    fullName: string;
    /** Ссылка на фото */
    photo: string;
    /** Роль пользователя */
    role?: string;
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

const EntityCard: FC<IUserPositions> = ({
  fullName,
  photo,
  role = '',
  firstLabel = '',
  valueByFirstLabel = '',
  secondLabel = '',
  valueBySecondLabel = '',
  canCopy = false,

}) => {

  const [isCopied, setIsCopied] = useState(false);

  const copyHandler = (value: string) => {
    setIsCopied(true);
    navigator.clipboard.writeText(value);
  };

  return <div className='rf-card'>
    <div className='rf-card__entity-wrapper'>
      <div className='rf-card__entity-photo-wrapper'>
        <UserPhoto url={photo} radius='48' />
      </div>
      <div className='rf-card__entity-info-wrapper'>
        <div className='rf-card__entity-row'>
          <p className='rf-card__entity-full-name'>{fullName}</p>
          {!!role && <p className='rf-card__entity-role'>{`  / ${role}`}</p>}
        </div>
        <div className='rf-card__entity-row'>
          <p className='rf-card__entity-additional'>{firstLabel}</p>
          <div className='rf-card__entity-row'>
            <p className='rf-card__entity-accent rf-card__entity-accent_number'>{valueByFirstLabel}</p>
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
            {secondLabel && valueBySecondLabel &&
                        <>
                          <p className='rf-card__entity-additional'>{secondLabel}</p>
                          <div className='rf-card__entity-row'>
                            <p className='rf-card__entity-accent'>{valueBySecondLabel}</p>
                          </div>
                        </>
            }
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default EntityCard;
