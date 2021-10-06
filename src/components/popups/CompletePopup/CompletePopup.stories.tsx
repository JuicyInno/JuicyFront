import React from 'react';
import Story from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';
import CompletePopup from './CompletePopup';
import StoryCol from '../../storybook/StoryCol';

export default {
  title: 'CompletePopup',
  component: CompletePopup
};

export const completePopup = () => {

  return (
    <Story name='CompletePopup (Карточка события)'>
      <StoryItem description='Кнопки с типом outlineSecondary'>
        <StoryRow>
          <StoryCol>
            <CompletePopup label='Заявка успешно создана' confirm onClose={ () => {
            } }/>
          </StoryCol>
          <StoryCol>
            <CompletePopup label='Заявка отклонена' onClose={ () => {
            } }/>
          </StoryCol>
        </StoryRow>
      </StoryItem>
    </Story>
  );
};
