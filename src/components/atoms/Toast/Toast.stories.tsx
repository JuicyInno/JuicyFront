import React, { useState } from 'react';
import { Story } from '@storybook/react';

import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import Toast from '../../atoms/Toast';
import Button from '../Button';

export default {
  title: 'popovers/withTest/Toast',
  component: Toast,
  argTypes: { children: { control: null }, },
};

export const Demo = () => {
  const [isVisible, setIsVisible] = useState(false);

  return <StoryContainer name='Toast' description='Мини-нотификация'>
    <Toast isVisible={isVisible} setVisibility={setIsVisible}>
      <p>Текст уведомления</p>
    </Toast>
    <Button onClick={() => setIsVisible(true)}>Показать уведомление</Button>
  </StoryContainer>;
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Toast isVisible {...args} setVisibility={() => {}}>
          <p>Текст уведомления</p>
        </Toast>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=1887%3A25249',
  },
};
