import React, { useState } from 'react';
import Confirm, { IConfirmProps } from './Confirm';
import StoryItem from '../../storybook/StoryItem';
import { withDesign } from 'storybook-addon-designs';
import {
  StoryDocs, StoryDocsDescription, StoryDocsH1
} from '../../storybook';
import Modal from '../../atoms/Modal';
import Button from '../../atoms/Button';
import Story from '../../storybook/Story';


export default {
  title: 'popovers/withTest/Confirm',
  component: Confirm,
  decorators: [withDesign],
  argTypes: {
    textAccept: {
      control: { type: 'text' },
      defaultValue: 'Согласен',
    },
    text: {
      control: { type: 'text' },
      defaultValue: 'Вы согласны на обработку персональных данных?',
    },
    comment: {
      control: { type: 'text' },
      defaultValue: 'Комментарий',
    },
    showComment: {
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: true,
    },
    lang: {
      options: ['ru', 'en'],
      control: { type: 'select' },
      defaultValue: 'ru',
    },
    preloader: {
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isCrossCloseButton: {
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onAction: { defaultValue: (comment?: string) => { } },
    onClose: { defaultValue: () => { } }
  },
};


export const Demo = (args: any) => {
  const [show, toggle] = useState(false);
  const onAction = (comment?: string) => {
    console.log(comment);
  };
  return (
    <StoryDocs>
      <StoryDocsH1>Сonfirm</StoryDocsH1>
      <StoryDocsDescription>Компонент Confirm</StoryDocsDescription>
      <StoryItem>
        <Button onClick={() => toggle(true)}>Open modal</Button>
        {show ? <Modal onClose={() => toggle(false)} >
          <Confirm {...args} onAction={onAction} onClose={() => toggle(false)} />
        </Modal> : null}
      </StoryItem>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=1917%3A24854',
  },
};


export const Playground = (args: IConfirmProps) => {

  const [show, toggle] = useState(false);
  const onAction = (comment?: string) => {
    console.log(comment);
  };


  return (
    <Story name='Изображение пользователя'>
      <Modal size='l'>
        <Confirm textAccept='Согласен'
          text='Вы согласны на обработку персональных данных?'
          onClose={() => { }} onAction={onAction} comment='Комментарий' showComment />
      </Modal>
    </Story>
  );
};
