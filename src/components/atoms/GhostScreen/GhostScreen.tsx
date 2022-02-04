import React from 'react';
import './GhostScreen.scss';
import GhostImage from '../../../assets/illustrations/Ghost';

export interface IGhostProps {
  text?: string;

}

const GhostScreen: React.FC<IGhostProps> = ({ text = 'Задачи не найдены' }: IGhostProps) => {

  return (
    <div className='ghost__wrapper'>
      <GhostImage/>
      <div className='ghost__text'>
        {text}
      </div>
    </div>
  );
};

export default GhostScreen;
