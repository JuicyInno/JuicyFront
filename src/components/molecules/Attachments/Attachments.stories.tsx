import React from 'react';
import { Story } from '@storybook/react';
import {
  StoryDocs, StoryDocsH1, StoryDocsDescription
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { withDesign } from 'storybook-addon-designs';

import Attachments from './Attachments';
import { initialFiles } from '../../../utils/helpers';
import Notifications from '../Notifications';

export default {
  title: 'components/withTest/Attachments',
  component: Attachments,
  decorators: [withDesign],
  argTypes: {}
};

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>Attachments</StoryDocsH1>
      <StoryDocsDescription>
        Вложенные файлы
      </StoryDocsDescription>

      <Attachments attachments={initialFiles} />

      <Notifications />
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=3130%3A38020',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Attachments attachments={initialFiles} {...args} />
      </StoryRow>
    </StoryContainer>
  );
};
