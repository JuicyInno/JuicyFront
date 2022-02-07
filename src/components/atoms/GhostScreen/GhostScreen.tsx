import React from 'react';
import './GhostScreen.scss';
import GhostImage from '../../../assets/illustrations/ghost.png';

export interface IGhostProps {
  text?: string;
}

const GhostScreen: React.FC<IGhostProps> = ({ text = 'Задачи не найдены' }: IGhostProps) => {

  return (
    <div className='ghost__wrapper'>
      <img src={GhostImage} width={220} height={170} />
      <div className='ghost__text'>
        {text}
      </div>
    </div>
  );
};

export default GhostScreen;
