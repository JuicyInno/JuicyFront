import React from 'react';
import { Story } from '@storybook/react';

import ButtonGroup from './ButtonGroup';
import StoryContainer from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { BrowserRouter } from 'react-router-dom';
import { buttonGroupMock, buttonIconGroupMock } from './mock';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'controls/withTest/ButtonGroup',
  component: ButtonGroup,
  argTypes: { list: { control: null } },
};

export const Demo = () => {
  return (
    <BrowserRouter>
      {/* TODO: удалить */}
      <div
        style={{
          // maxHeight: '300px',
          overflow: 'auto',
        }}
      >
        <StoryContainer name='Группировка кнопок'>
          <StoryItem>
            <StoryRow>
              <ButtonGroup list={buttonGroupMock} max={2} />
            </StoryRow>

            <StoryRow>
              <ButtonGroup list={buttonGroupMock} max={3} />
            </StoryRow>

            <StoryRow>
              <ButtonGroup list={buttonGroupMock.filter((_, index) => index <= 1)} />
            </StoryRow>

            <StoryRow>
              <ButtonGroup list={buttonIconGroupMock} max={3} />
            </StoryRow>

            <StoryRow>
              <ButtonGroup list={buttonIconGroupMock.filter((_, index) => index <= 1)} />
            </StoryRow>
          </StoryItem>
        </StoryContainer>
      </div>
    </BrowserRouter>
  );
};

export const Playground: Story = (args) => {
  return (
    <BrowserRouter>
      <StoryContainer>
        <StoryItem>
          <ButtonGroup list={buttonGroupMock} {...args} />
        </StoryItem>
      </StoryContainer>
    </BrowserRouter>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gDl8sDPM8Zmh5ol4ywzLrj/Design-System-VTB-Home?node-id=20799%3A54714',
  },
};
