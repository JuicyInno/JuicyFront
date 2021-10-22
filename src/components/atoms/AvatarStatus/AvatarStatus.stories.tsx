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
      <StoryItem subtitle='Аватар статус со стикером'>
        <div style={{ display: 'flex' }}>
          <div style={{
            display: 'flex',
            padding: '32px'
          }}>
            {variants.map((variant: any, i) => <div
              style={(i !== variants.length - 1) ? elemStyle : { marginRight: '0px' }}>
              <AvatarStatus fullName='Александр Петров' variant={variant} size='l' hasBadge/>
            </div>)}
          </div>
        </div>
      </StoryItem>
      <StoryItem subtitle='Аватар статус без стикера'>
        <div style={{ display: 'flex' }}>
          <div style={{
            display: 'flex',
            padding: '32px'
          }}>
            {variants.map((variant: any, i) => <div
              style={(i !== variants.length - 1) ? elemStyle : { marginRight: '0px' }}>
              <AvatarStatus fullName='Александр Петров' size='l' variant={variant}/>
            </div>)}
          </div>
        </div>
      </StoryItem>
    </Story>
  );
};
