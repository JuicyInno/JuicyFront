import React from 'react';
import Input from './Input';
import FormGroup from '../FormGroup';
import { Story } from '@storybook/react';
/* eslint-disable max-len */
import {
  StoryDocs, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

import Success from '../../../assets/icons/24px/Arrows/Success';
import {
  Info, ChevronDown, Calendar,
} from '../../../indexIcon';
import { withDesign } from 'storybook-addon-designs';
import Search from '../../../assets/icons/24px/Account/Search';

export default {
  title: 'forms/withTest/Input',
  decorators: [withDesign],
  component: Input,
  argTypes: {
    disabled: { type: 'boolean' },
    icon: { control: null },
    startAdornment: { control: null },
    endAdornment: { control: null },
  }
};

const LABEL = 'Label';

export const Demo = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>Input</StoryDocsH1>

      <div style={{
        display: 'grid',
        gap: 32,
        maxWidth: 400
      }}>
        <FormGroup label={LABEL}>
          <Input placeholder='Введите тип обращения' onClear={() => { }} />
        </FormGroup>
        <FormGroup label={LABEL}>
          <Input defaultValue='Тип обращения' placeholder='Введите тип обращения' onClear={() => { }} />
        </FormGroup>
        <FormGroup label='disabled'>
          <Input placeholder='Введите тип обращения' disabled />
        </FormGroup>
        <FormGroup label={LABEL} errorMessage='Additional text'>
          <Input invalid />
        </FormGroup>
        <Input placeholder='Инлайн' variant='inline' />
        <Input placeholder='Инлайн неактивное поле' variant='inline' disabled />
        <Input placeholder='Инлайн невалидное поле' variant='inline' invalid />
      </div>

      <StoryDocsH2>Input Icons</StoryDocsH2>

      <div style={{
        display: 'grid',
        gap: 32,
        maxWidth: 400
      }}>
        <FormGroup label={LABEL}>
          <Input endAdornment={<Search style={{ color: 'var(--basic-primary)' }} />} />
        </FormGroup>
        <FormGroup label={LABEL}>
          <Input endAdornment={<Calendar style={{ color: 'var(--text-tertiary)' }} />} />
        </FormGroup>
        <FormGroup label={LABEL}>
          <Input endAdornment={<ChevronDown />} />
        </FormGroup>
        <FormGroup label={LABEL}>
          <Input endAdornment={<Success style={{ color: 'var(--status-success)' }} />} />
        </FormGroup>
        <FormGroup label={LABEL}>
          <Input endAdornment={<Info />} />
        </FormGroup>
        <FormGroup label={LABEL}>
          <Input startAdornment={<Info />} />
        </FormGroup>
      </div>
    </StoryDocs>
  );
};

export const Playground: Story = (args) => {
  return (


    <StoryContainer>
      <StoryRow>
        <FormGroup label={LABEL}>
          <Input placeholder='Введите тип обращения' onClear={() => { }} {...args} />
        </FormGroup>
      </StoryRow>
      <StoryRow>
        <FormGroup label={LABEL}>
          <Input placeholder='Введите тип обращения' startAdornment={<Info />} {...args} />
        </FormGroup>
      </StoryRow>
      <StoryRow>
        <FormGroup label={LABEL}>
          <Input placeholder='Введите тип обращения' endAdornment={<Info />} {...args} />
        </FormGroup>
      </StoryRow>
    </StoryContainer>
  );
};
Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18262%3A231242',
  },
};
Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18262%3A231242',
  },
};
