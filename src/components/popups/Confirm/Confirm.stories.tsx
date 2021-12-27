import React from 'react';
import { Story } from '@storybook/react';

import Confirm from './Confirm';
import StoryRow from '../../storybook/StoryRow';
import StoryContainer from '../../storybook/Story';
import { Modal } from '../../../index';

export default {
  title: 'popovers/withTest/Confirm',
  component: Confirm,
};

export const Demo = () => {
  const onAction = (comment?: string) => {
    console.log(comment);
  };

  return (
    <StoryContainer name='Изображение пользователя'>
      <Modal size='l' onClose={() => {}}>
        <Confirm
          textAccept='Согласен'
          text='Вы согласны на обработку персональных данных?'
          onClose={() => console.log('hello')}
          onAction={onAction}
          comment='Комментарий'
          showComment
        />
      </Modal>
    </StoryContainer>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Modal size='l' onClose={() => {}}>
          <Confirm showComment textAccept='Подтвердить' text='Message' {...args} onClose={() => {}} onAction={() => {}} />
        </Modal>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=2532%3A33881',
  },
};
