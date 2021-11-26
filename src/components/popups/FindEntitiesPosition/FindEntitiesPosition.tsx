import './FindEntitiesPosition.scss';

import React, { FC, useState } from 'react';

import {
  Avatar, Checkbox, Copy, Info, Structure, Toast, Tooltip
} from '../../../index';
import InvestmentProducts from '../../../assets/icons/24px/Specific/InvestmentProducts';

import { IStructure } from '../../../types/projects.types';

interface IFindEntitiesPositionProps {
  position: { position: string; positionText: string; departmentsPath?: IStructure[] };
  isSelected: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Цвет tooltip */
  tooltipBackground?: 'white' | 'default';
}

export const FindEntitiesPosition: FC<IFindEntitiesPositionProps> = ({ position, isSelected, onChange, tooltipBackground }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsCopied(true);
    navigator.clipboard.writeText(position.position);
  };

  return (
    <div key={position.position} className='rf-find-entities-position'>
      <Checkbox
        align='center'
        value={position.position}
        checked={isSelected}
        onChange={onChange}
        fullWidth
        label={
          <div className='rf-find-entities-position__content'>
            <div className='rf-find-entities-position__avatar'>
              <Avatar icon={InvestmentProducts}/>
            </div>
            <div>
              <div className='rf-find-entities-position__title'>
                {position.positionText}
                {!!position.departmentsPath && (
                  <Tooltip
                    position='right'
                    portal
                    background={tooltipBackground}
                  >
                    <div className='rf-find-entities-position__info'>
                      <Info />
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
                    portal
                    background={tooltipBackground}
                  >
                    <Copy onClick={onCopy} />
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
