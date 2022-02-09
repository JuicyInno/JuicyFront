import React from 'react';
import { Story } from '@storybook/react';
import ImagePreview from './ImagePreview';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'controls/не проверено/ImagePreview',
  component: ImagePreview,
  argTypes: {}
};

export const Demo: Story = (args: any) => {

  const frameStyle: any = {
    display: 'flex',
    flexDirection: 'column',
    width: 680,
    border: '1px dashed #7B61FF',
    borderRadius: 5,
    padding: 16,
  };

  return (
    <StoryDocs >
      <StoryDocsH1>ImagePreview</StoryDocsH1>
      <div>
        <ImagePreview />
      </div>
    </StoryDocs >
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/Проекты-ВТБ-основной?node-id=18262%3A231289',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: any) => {


  return (
    <StoryContainer>
      <StoryRow>
        <ImagePreview {...args} />
      </StoryRow>
    </StoryContainer>
  );
};
