import './FindEntitiesPosition.scss';

import React, { FC, useState } from 'react';

import Checkbox from '../../atoms/Checkbox';
import Avatar from '../../atoms/Avatar';
import Structure from '../../molecules/Structure';
import Toast from '../../atoms/Toast';
import Tooltip from '../../atoms/Tooltip';

import {
  AllCopy, StatusInfoFill, AllInvestmentProducts
} from '../../../indexIcon';

import { IStructure } from '../../../types/projects.types';

interface IFindEntitiesPositionProps {
  /** Должность */
  position: { position: string; positionText: string; departmentsPath?: IStructure[] };
  /** Выбрана ли должность */
  isSelected: boolean;
  /** Изменение выбора должности */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Дизейбл чекбокса */
  disabled?: boolean;
  /** Цвет tooltip */
  tooltipBackground?: 'white' | 'default';
}

export const FindEntitiesPosition: FC<IFindEntitiesPositionProps> = ({ position, isSelected, onChange, disabled, tooltipBackground }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsCopied(true);
    navigator.clipboard.writeText(position.position);
  };

  return (
    <div className='rf-find-entities-position'>
      <Checkbox
        align='flex-start'
        value={position.position}
        checked={isSelected}
        disabled={disabled}
        onChange={onChange}
        fullWidth
        label={
          <div className='rf-find-entities-position__content'>
            <div className='rf-find-entities-position__avatar'>
              <Avatar icon={AllInvestmentProducts}/>
            </div>
            <div>
              <div className='rf-find-entities-position__title'>
                {position.positionText}
                {!!position.departmentsPath && (
                  <Tooltip
                    position='right'
                    background={tooltipBackground}
                  >
                    <div className='rf-find-entities-position__info'>
                      <StatusInfoFill />
                    </div>
                    <Structure departmentsPath={position.departmentsPath} />
                  </Tooltip>
                )}
              </div>
              <div className='rf-find-entities-position__subtitle'>
                {position.position}
                <div className='rf-find-entities-position__copy'>
                  <Tooltip
                    position='right'
                    background={tooltipBackground}
                  >
                    <AllCopy onClick={onCopy} />
                    <div>Скопировать ТН</div>
                  </Tooltip>
                  <Toast isVisible={isCopied} setVisibility={setIsCopied}>
                    <p className='rf-find-entities-position__toast'>ТН скопирован</p>
                  </Toast>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
