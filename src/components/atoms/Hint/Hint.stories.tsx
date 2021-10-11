import React from 'react';
import { Story } from '@storybook/react';
import Hint, { IHintProps } from './Hint';
import { variantsClassic } from '../../../types';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'controls/withTest/Hint',
  component: Hint,
  argTypes: {
    icon: {
      options: ['info', null],
      control: { type: 'radio' },
      defaultValue: 'info'
    },
    className: { table: { disable: true } },
    children: {
      control: 'text',
      defaultValue: 'Опишите коротко в чём суть сообщения'
    },
    title: {
      control: 'text',
      defaultValue: 'Заголовок'
    },
    button: {
      control: 'text',
      defaultValue: 'Text Button'
    },
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

  const frameStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: 680,
    border: '1px dashed #7B61FF',
    borderRadius: 5,
    padding: 16,
  };

  return (
    <StoryDocs >
      <StoryDocsH1>Hint</StoryDocsH1>
      <div style={{ padding: '42px 0px 0px 72px' }}>
        <div style={frameStyle}>
          <div style={{ marginBottom: 16 }}>
            <Hint
              variant='blue'
              maxWidth={args.maxWidth}
              title={args.title}
              icon='info'
              button='Text Button'>
              {args.children}
            </Hint>
          </div>

          <div style={{ marginBottom: 16 }}>
            <Hint
              variant={args.variant}
              maxWidth={args.maxWidth}
              title={args.title}
              icon='info'
              button='Text Button'>
              {args.children}
            </Hint>
          </div>

          <div style={{ marginBottom: 16 }}>
            <Hint variant='yellow'
              maxWidth={args.maxWidth}
              title={args.title}
              icon='info'
              button='Text Button'>
              {args.children}
            </Hint>
          </div>

          <div style={{ marginBottom: 16 }}>
            <Hint variant='green'
              maxWidth={args.maxWidth}
              title={args.title}
              icon='info'
              button='Text Button'>
              {args.children}
            </Hint>
          </div>

          <div style={{ marginBottom: 16 }}>
            <Hint variant='red'
              maxWidth={args.maxWidth}
              title={args.title}
              icon='info'
              button='Text Button'>
              {args.children}
            </Hint>
          </div>

          <div style={{ marginBottom: 16 }}>
            <Hint variant='blue'
              maxWidth={args.maxWidth}
              title={args.title}
              button='Text Button'>
              {args.children}
            </Hint>
          </div>

          <div style={{ marginBottom: 16 }}>
            <Hint
              maxWidth={args.maxWidth}
              title={args.title}
              button='Text Button'>
              {args.children}
            </Hint>
          </div>

          <div style={{ marginBottom: 16 }}>
            <Hint variant='yellow'
              maxWidth={args.maxWidth}
              title={args.title}
              button='Text Button'>
              {args.children}
            </Hint>
          </div>

          <div style={{ marginBottom: 16 }}>
            <Hint variant='green'
              maxWidth={args.maxWidth}
              title={args.title}
              button='Text Button'>
              {args.children}
            </Hint>
          </div>

          <div style={{ marginBottom: 16 }}>
            <Hint variant='red'
              maxWidth={args.maxWidth}
              title={args.title}
              button='Text Button'>
              {args.children}
            </Hint>
          </div>


          <div>
            <Hint
              variant='blue'
              maxWidth={args.maxWidth}
              title={args.title}
              icon='info'
              button={undefined}>
            </Hint>
          </div>
        </div>
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
        <Hint {...args} />
      </StoryRow>
    </StoryContainer>
  );
};

