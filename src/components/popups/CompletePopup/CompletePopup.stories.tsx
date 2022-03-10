import React from 'react';
import { Story } from '@storybook/react';

import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';
import CompletePopup from './CompletePopup';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import Button from '../../atoms/Button';

export default {
  title: 'popovers/withTest/CompletePopup',
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
            buttons={<div style={{
              marginTop: '32px',
              width: '100%'
            }}><Button fullWidth buttonType='light' onClick={() => {}} size='l'>Закрыть</Button></div>}
          />
        </StoryRow>
      </StoryItem>

      <StoryDocsH2>Вариация без кнопки</StoryDocsH2>
      <StoryItem>
        <StoryRow>
          <CompletePopup
            label='Заявка была отозвана'
            description='Корткое объяснение в три строчки'
            icon='refresh'
            buttons={<></>}
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
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A15740',
  },
};
