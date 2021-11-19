import React from 'react';
import Status from './Status';
import { IconType, StatusIconSize } from './icons/types';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import { Story } from '@storybook/react';

export default {
  title: 'controls/withTest/Status',
  component: Status
};

const iconTypes: IconType[] = [
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
    size: 's',
    sizeNumber: 16
  },
  {
    size: 'm',
    sizeNumber: 20
  },
  {
    size: 'l',
    sizeNumber: 24
  }
];

export const Demo = () => {
  const demoSizes = demoIcons.map((icon, i) => (
    <div
      key={i}
      style={{
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
  ));

  const icons = iconTypes.map((icon, i) => (
    <div style={{ marginRight: 8 }} key={i}>
      <Status type={icon} size='l'/>
    </div>
  ));

  return (
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
        {demoSizes}
      </div>
      <div style={{ display: 'flex' }}>
        {icons}
      </div>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=775%3A34873',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: any) => {
  return (
    <div style={{
      backgroundColor: 'lightgray',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 45,
      height: 45,
      borderRadius: 8,
      margin: 30
    }}>
      <Status { ...args } />
    </div>
  );
};
