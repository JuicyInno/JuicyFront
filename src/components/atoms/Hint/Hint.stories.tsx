import React from 'react';
import { Story } from '@storybook/react';
import Hint, { IHintProps } from './Hint';
import { variantsClassic } from '../../../types';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

import Button from '../Button';
import { StatusInfoFill } from '../../../indexIcon';

export default {
  title: 'controls/withTest/Hint',
  component: Hint,
  argTypes: {
    icon: { control: { disable: true } },
    className: { table: { disable: true } },
    children: {
      control: 'text',
      defaultValue: 'Опишите коротко в чём суть сообщения'
    },
    title: {
      control: 'text',
      defaultValue: 'Заголовок'
    },
    button: { control: { disable: true } },
    variant: {
      options: variantsClassic,
      control: { type: 'radio' },
      defaultValue: 'default'
    },
    maxWidth: {
      control: 'text',
      defaultValue: '648px'
    },
  }
};

export const Demo: Story = (args: IHintProps) => {
  return (
    <StoryDocs >
      <StoryDocsH1>Hint</StoryDocsH1>
      <div style={{ marginBottom: 16 }}>
        <Hint
          variant='blue'
          maxWidth={args.maxWidth}
          title={args.title}
          button={<Button buttonType='text' size='s' textColor='blue'>Действие</Button>}
          onClose={args.onClose}
        >
          {args.children}
        </Hint>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Hint
          variant={args.variant}
          maxWidth={args.maxWidth}
          title={args.title}
          button={<Button buttonType='text' size='s' textColor='default'>Действие</Button>}
          onClose={args.onClose}
        >
          {args.children}
        </Hint>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Hint variant='yellow'
          maxWidth={args.maxWidth}
          title={args.title}
          button={<Button buttonType='text' size='s' textColor='yellow'>Действие</Button>}
          onClose={args.onClose}
        >
          {args.children}
        </Hint>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Hint variant='green'
          maxWidth={args.maxWidth}
          title={args.title}
          button={<Button buttonType='text' size='s' textColor='green'>Действие</Button>}
          onClose={args.onClose}
        >
          {args.children}
        </Hint>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Hint variant='red'
          maxWidth={args.maxWidth}
          title={args.title}
          button={<Button buttonType='text' size='s' textColor='red'>Действие</Button>}
          onClose={args.onClose}
        >
          {args.children}
        </Hint>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Hint variant='blue'
          maxWidth={args.maxWidth}
          title={args.title}
          icon={false}
        >
          {args.children}
        </Hint>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Hint
          maxWidth={args.maxWidth}
          title={args.title}
          icon={false}
        >
          {args.children}
        </Hint>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Hint variant='yellow'
          maxWidth={args.maxWidth}
          title={args.title}
          icon={false}
        >
          {args.children}
        </Hint>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Hint variant='green'
          maxWidth={args.maxWidth}
          title={args.title}
          icon={false}
        >
          {args.children}
        </Hint>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Hint variant='red'
          maxWidth={args.maxWidth}
          title={args.title}
          icon={false}
        >
          {args.children}
        </Hint>
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

export const Playground: Story = (args: IHintProps) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Hint
          {...args}
          icon={<StatusInfoFill />}
          button={<Button buttonType='text' size='s' textColor={args.variant}>Действие</Button>}
        />
      </StoryRow>
    </StoryContainer>
  );
};
