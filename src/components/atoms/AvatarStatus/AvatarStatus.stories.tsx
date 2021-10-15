import React from 'react';
import AvatarStatus from './AvatarStatus';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';

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

  const elemStyle = { marginRight: '70px' };

  return (
    <Story name='Аватар статус'>
      <StoryItem subtitle='Аватар статус с баджем'>
        <div style={{ display: 'flex' }}>
          <div style={{
            display: 'flex',
            padding: '32px',
            border: '1px dashed #7b61ff',
            borderRadius: '5px'
          }}>
            {variants.map((variant: any, i) => <div style={(i !== variants.length - 1) ? elemStyle : { marginRight: '0px' }}>
              <AvatarStatus fullName='Александр Петров' variant={variant} hasBadge />
            </div>)}
          </div>
        </div>
      </StoryItem>
      <StoryItem subtitle='Аватар статус без баджа'>
        <div style={{ display: 'flex' }}>
          <div style={{
            display: 'flex',
            padding: '32px',
            border: '1px dashed #7b61ff',
            borderRadius: '5px'
          }}>
            {variants.map((variant: any, i) => <div style={(i !== variants.length - 1) ? elemStyle : { marginRight: '0px' }}>
              <AvatarStatus fullName='Александр Петров' variant={variant} />
            </div>)}
          </div>
        </div>
      </StoryItem>
    </Story>
  );
};
