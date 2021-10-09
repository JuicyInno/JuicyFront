import React from 'react';
import './GhostScreen.scss';
import GhostImage from '../../../assets/icons/Ghost';

export interface IAvatarProps {
  text?: string;

}

const GhostScreen: React.FC<IAvatarProps> = ({ text = 'Задачи не найдены' }: IAvatarProps) => {

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
