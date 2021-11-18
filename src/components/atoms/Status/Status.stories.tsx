import React from 'react';
import Status, { IconType } from './Status';
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
  'boss'
];

export const Demo = () => (
  <StoryDocs>
    <StoryDocsH1>Status</StoryDocsH1>
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
