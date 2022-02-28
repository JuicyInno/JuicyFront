import React, { FC } from 'react';

import UserPhoto from '../../atoms/UserPhoto';
import './EntityCard.scss';
import { Copy } from '../../..';
import { ITooltipProps } from '../../atoms/Tooltip/Tooltip';

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
  tooltipBackground?: ITooltipProps['background'];
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
  tooltipBackground = 'white'
}) => {
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
            {!!canCopy &&
              <div className='rf-entity-card__icon-wrapper'>
                <Copy
                  tooltipLabel='Скопировать ТН'
                  copyMessage={valueByFirstLabel}
                  successCopyMessage='ТН скопирован'
                  tooltipProps={{
                    background: tooltipBackground,
                    position: 'bottom'
                  }}
                />
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
