import React from 'react';
import AvatarStatus from './AvatarStatus';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { Size } from '../../../types';

export default {
  title: 'Avatar Status',
  component: AvatarStatus,
};

export const avatar = () => {

  const variants = [
    'green',
    'default',
    'none',
    'yellow',
    'red'
  ];

  const sizes: Size[] = [
    'xs',
    's',
    'm',
    'l'
  ];

  const elemStyle = { marginRight: '70px' };

  return (
    <Story name='Аватар статус'>
      <StoryItem subtitle='Аватар статус с баджем'>
        {sizes.map(size => <div style={{ display: 'flex' }}>
          <div style={{
            display: 'flex',
            padding: '32px'
          }}>
            {variants.map((variant: any, i) => <div
              style={(i !== variants.length - 1) ? elemStyle : { marginRight: '0px' }}>
              <AvatarStatus fullName='Александр Петров' variant={variant} size={size} hasBadge/>
            </div>)}
          </div>
        </div>)}
      </StoryItem>
      <StoryItem subtitle='Аватар статус без бэйджа'>
        {sizes.map(size => <div style={{ display: 'flex' }}>
          <div style={{
            display: 'flex',
            padding: '32px'
          }}>
            {variants.map((variant: any, i) => <div
              style={(i !== variants.length - 1) ? elemStyle : { marginRight: '0px' }}>
              <AvatarStatus fullName='Александр Петров' size={size} variant={variant}/>
            </div>)}
          </div>
        </div>)}
      </StoryItem>
    </Story>
  );
};
