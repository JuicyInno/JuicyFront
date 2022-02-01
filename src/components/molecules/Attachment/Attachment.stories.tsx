import React from 'react';
import { Story } from '@storybook/react';
import {
  StoryDocs, StoryDocsH1, StoryDocsDescription
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { withDesign } from 'storybook-addon-designs';

import Attachment from './Attachment';
import { initialFiles } from '../../../utils/helpers';
import Notifications from '../Notifications';

export default {
  title: 'components/withTest/Attachment',
  component: Attachment,
  decorators: [withDesign],
  argTypes: {}
};

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>Attachment</StoryDocsH1>
      <StoryDocsDescription>
        Вложенные файлы
      </StoryDocsDescription>

      <Attachment attachment={initialFiles[0]} />

      <Notifications />
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=3162%3A37697',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Attachment attachment={initialFiles[0]} {...args} />
      </StoryRow>
    </StoryContainer>
  );
};
