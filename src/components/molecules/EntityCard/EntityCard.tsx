import React, { FC, useState } from 'react';

import UserPhoto from '../../atoms/UserPhoto';
import Tooltip from '../../atoms/Tooltip';
import Toast from '../../atoms/Toast';

import { AllCopy } from '../../../indexNewIcon';

import './EntityCard.scss';

export interface IUserPositions {
  /** ФИО */
  fullName: string;
  /** Ссылка на фото */
  photo?: string;
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
  /** Цвет tooltip */
  tooltipBackground?: 'white' | 'default'
}

const EntityCard: FC<IUserPositions> = ({
  fullName,
  photo = '',
  role = '',
  firstLabel = '',
  valueByFirstLabel = '',
  secondLabel = '',
  valueBySecondLabel = '',
  canCopy = false,
  tooltipBackground = 'default'

}) => {

  const [isCopied, setIsCopied] = useState(false);

  const onCopy = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsCopied(true);
    navigator.clipboard.writeText(valueByFirstLabel);
  };

  return <div className='rf-entity-card'>
    <div className='rf-entity-card__wrapper'>
      <div className='rf-entity-card__photo-wrapper'>
        <UserPhoto url={photo} radius='48' />
      </div>
      <div className='rf-entity-card__info-wrapper'>
        <div className='rf-entity-card__row'>
          <p className='rf-entity-card__full-name'>{fullName}</p>
          {!!role && <p className='rf-entity-card__role'>{`  / ${role}`}</p>}
        </div>
        <div className='rf-entity-card__row'>
          <p className='rf-entity-card__additional'>{firstLabel}</p>
          <div className='rf-entity-card__row'>
            <p className='rf-entity-card__accent rf-entity-card__accent_number'>{valueByFirstLabel}</p>
            {!!canCopy && <div className='rf-entity-card__icon-wrapper'>
              <Tooltip background={tooltipBackground} position='bottom'>
                <AllCopy onClick={onCopy} id='copyIcon' />
                <div className='rf-entity-card__tooltip-text'>Скопировать ТН</div>
              </Tooltip>
              <Toast isVisible={isCopied} setVisibility={setIsCopied}>
                <p className='rf-entity-card__toast-text'>ТН скопирован</p>
              </Toast>
            </div>
            }
            {secondLabel && valueBySecondLabel &&
              <>
                <p className='rf-entity-card__additional'>{secondLabel}</p>
                <div className='rf-entity-card__row'>
                  <p className='rf-entity-card__accent'>{valueBySecondLabel}</p>
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
