import React from 'react';
import History from './History';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { Demo } from '../Card/Card.stories';
import { withDesign } from 'storybook-addon-designs';

import { paths, attachments } from './History.mock';

export default {
  title: 'не проверено/History',
  component: History,
  decorators: [withDesign]
};

export const history = () => {
  return <Story name='History'>
    <StoryItem description='История'>
      <div>
        <History history={paths} attachments={attachments} />
      </div>
    </StoryItem>
  </Story>;
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gDl8sDPM8Zmh5ol4ywzLrj/Design-System-VTB-Home?node-id=20799%3A70628',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};
