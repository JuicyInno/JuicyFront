import React from 'react';
import { Story } from '@storybook/react';
/* eslint-disable max-len */
import Preloader from './Preloader';
import StoryContainer from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';
import {
  StoryDocs, StoryDocsH1, StoryDocsDescription
} from '../../storybook';

export default {
  title: 'controls/withTest/Preloader',
  component: Preloader
};

const styleItem: React.CSSProperties = {
  position: 'relative',
  width: '90px',
  height: '90px'
};

export const Demo = () => {

  return (
    <StoryDocs >
      <StoryDocsH1>Preloader</StoryDocsH1>
      <StoryDocsDescription>Компонент служит для демонстрации процесса загрузки, ожидания. Существует в четырех размерах - 16, 24, 48 и 64 px. Может применяется как самостоятельный элемент, так и в составе других компонентов, например кнопок.</StoryDocsDescription>

      <StoryItem>
        <StoryRow>
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <div style={{ ...styleItem }}>
              <Preloader size='xl' />
            </div>

            <div style={{ ...styleItem }}>
              <Preloader size='l' />
            </div>

            <div style={{ ...styleItem }}>
              <Preloader size='m' />
            </div>

            <div style={{ ...styleItem }}>
              <Preloader size='s' />
            </div>
          </div>
        </StoryRow>

        <StoryRow>
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            backgroundColor: '#0D69F2'
          }}>
            <div style={{ ...styleItem }}>
              <Preloader size='xl' variant='white' />
            </div>

            <div style={{ ...styleItem }}>
              <Preloader size='l' variant='white' />
            </div>

            <div style={{ ...styleItem }}>
              <Preloader size='m' variant='white' />
            </div>

            <div style={{ ...styleItem }}>
              <Preloader size='s' variant='white' />
            </div>
          </div>
        </StoryRow>
      </StoryItem>
    </StoryDocs>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <div style={{ ...styleItem }}>
          <Preloader {...args} />
        </div>
      </StoryRow>
    </StoryContainer>
  );
};


Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=13613%3A76416',
  },
};
