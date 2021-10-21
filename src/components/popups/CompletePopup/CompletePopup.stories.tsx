import React from 'react';
import { Story } from '@storybook/react';

import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';
import CompletePopup from './CompletePopup';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import { Button } from '../../..';

export default {
  title: 'popups/withTest/CompletePopup',
  component: CompletePopup,
  argTypes: {
    onClose: { control: null },
    buttons: { control: null },
  }
};

export const Demo = () => {

  return (
    <StoryDocs>
      <StoryDocsH1>CompletePopup</StoryDocsH1>

      <StoryItem>
        <StoryRow>
          <CompletePopup label='Заявка успешно создана' description='Корткое объяснение в три строчки' icon='success' onClose={() => {}} />
        </StoryRow>
        <StoryRow>
          <CompletePopup label='Заявка успешно отклонена' description='Корткое объяснение в три строчки' icon='close' onClose={() => {}} />
        </StoryRow>
        <StoryRow>
          <CompletePopup label='Заявка успешно удалена' description='Корткое объяснение в три строчки' icon='trash' onClose={() => {}} />
        </StoryRow>
        <StoryRow>
          <CompletePopup
            label='Заявка возвращена на доработку'
            description='Корткое объяснение в три строчки'
            icon='return'
            onClose={() => {}}
          />
        </StoryRow>
        <StoryRow>
          <CompletePopup label='Заявка была отозвана' description='Корткое объяснение в три строчки' icon='refresh' onClose={() => {}} />
        </StoryRow>
      </StoryItem>


      <StoryDocsH2>Вариация с подстановкой кнопок</StoryDocsH2>
      <StoryItem>
        <StoryRow>
          <CompletePopup
            label='Заявка была отозвана'
            description='Корткое объяснение в три строчки'
            icon='refresh'
            buttons={<><Button fullWidth buttonType='light' onClick={() => {}}>Закрыть</Button></>}
          />
        </StoryRow>
      </StoryItem>
    </StoryDocs>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <CompletePopup label='' description='' onClose={() => {}} {...args} />
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18262%3A231301',
  },
};
