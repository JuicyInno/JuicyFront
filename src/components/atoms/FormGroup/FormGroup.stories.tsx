import React from 'react';
import { Story } from '@storybook/react';

import FormGroup from './FormGroup';
import Input from '../../atoms/Input/Input';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

import { StoryDocs, StoryDocsH1 } from '../../storybook';
import InputNumber from '../InputNumber';
import Select from '../Select';

export default {
  title: 'forms/withTest/FormGroup',
  component: FormGroup,
  argTypes: {
    labelSecondary: { control: { type: 'text' }, },
    label: { control: { type: 'text' }, },
    children: { control: null }
  }
};

export const Demo = () => (
  <StoryDocs>
    <StoryDocsH1>FormGroup</StoryDocsH1>
    <div style={{ maxWidth: 600 }}>
      <StoryRow>
        <FormGroup label='Дефолтное состояние с контентом' required errorMessage='Ошибка'>
          <Input name='text' placeholder='Введите текст' />
        </FormGroup>
      </StoryRow>

      <StoryRow>
        <FormGroup label='FormGroup с InputNumber' labelSecondary='(0/255)'>
          <InputNumber defaultValue={'1200.60'} floatPoints={2} />
        </FormGroup>
      </StoryRow>

      <StoryRow>
        <FormGroup label='FormGroup с Select'>
          <Select
            placeholder='Выберите значение'
            options={[
              {
                label: 'Option 1',
                value: '1'
              },
              {
                label: 'Option 2',
                value: '2'
              }
            ]}
            values={[
              {
                label: 'Option 1',
                value: '1'
              }
            ]}
            onChange={() => {}}
          />
        </FormGroup>
      </StoryRow>
    </div>
  </StoryDocs>
);

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <div style={{ maxWidth: 600 }}>
          <FormGroup label='Дефолтное состояние с контентом' required errorMessage='Ошибка' {...args}>
            <Input name='text' placeholder='Введите текст' />
          </FormGroup>
        </div>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=137%3A26691',
  },
};
