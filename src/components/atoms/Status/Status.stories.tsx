import React from 'react';
import Status from './Status';
import { IconType, StatusIconSize } from './icons/types';
import { StoryDocs, StoryDocsH1 } from '../../storybook';

export default {
  title: 'controls/withTest/Status',
  component: Status,
};

const icons: IconType[] = [
  'online',
  'icon',
  'decline',
  'load',
  'in',
  'out',
  'vacation',
  'birthday',
  'disease',
  'businessTrip',
  'remoteWork',
  'decree',
  'boss'
];

const demoIcons = [
  {
    size: 'xxs',
    sizeNumber: 16
  },
  {
    size: 'xs',
    sizeNumber: 20
  },
  {
    size: 's',
    sizeNumber: 24
  }
];

export const Demo = () => (
  <StoryDocs>
    <StoryDocsH1>Status</StoryDocsH1>
    <div style={{
      display: 'flex',
      width: 200,
      marginBottom: 50,
      backgroundColor: '#F1F2F4',
      padding: 24,
      borderRadius: 16
    }}>
      {demoIcons.map(icon => (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginRight: 28
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              padding: '0px 4px',
              color: 'white',
              backgroundColor: '#2ABB5B',
              borderRadius: 2,
              marginBottom: 4
            }}>
              {icon.sizeNumber}
            </div>
            <div style={{
              width: icon.sizeNumber + 4,
              height: 12,
              borderTop: '2px solid #2ABB5B',
              borderLeft: '2px solid #2ABB5B',
              borderRight: '2px solid #2ABB5B'
            }} />
          </div>
          <Status type='disease' size={icon.size as StatusIconSize}/>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex' }}>
      {icons.map(icon => <div style={{ marginRight: 8 }}><Status type={icon} size='xs'/></div>)}
    </div>
  </StoryDocs>
);

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=775%3A34873',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};
