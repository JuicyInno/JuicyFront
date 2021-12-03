import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Toast from '../../atoms/Toast';
import Button from '../Button';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { withDesign } from 'storybook-addon-designs';
import {
  StoryDocs, StoryDocsDescription, StoryDocsH1
} from '../../storybook';
import StoryItem from '../../storybook/StoryItem';


export default {
  title: 'popovers/with tests/Toast',
  component: Toast,
  decorators: [withDesign],
  argTypes: {
    duration: {
      control: { type: 'number' },
      default: 2000,
    },

  }
};

export const Demo: Story = (props: any) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <StoryDocs>
      <StoryDocsH1>Toast</StoryDocsH1>
      <StoryDocsDescription>Мини-нотификация</StoryDocsDescription>
      <StoryItem>
        <Toast {...props} isVisible={isVisible} setVisibility={setIsVisible} >
          <p>Текст уведомления</p>
        </Toast>
        <Button onClick={() => setIsVisible(true)}>Показать уведомление</Button>
      </StoryItem>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=1887%3A25249',
  },
};


export const Playground: Story = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <StoryContainer>
      <StoryRow>
        <Toast isVisible={isVisible} setVisibility={setIsVisible} >
          <p>Текст уведомления</p>
        </Toast>
        <Button onClick={() => setIsVisible(true)}>Показать уведомление</Button>
      </StoryRow>
    </StoryContainer>
  );
};
