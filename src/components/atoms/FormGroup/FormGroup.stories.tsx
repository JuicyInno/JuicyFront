import React from 'react';

import FormGroup from './FormGroup';
import Input from '../../atoms/Input/Input';

import { StoryDocs, StoryDocsH1 } from '../../storybook';

export default {
  title: 'Form Controls/FormGroup',
  component: FormGroup
};

export const formGroup = () => (
  <StoryDocs>
    <StoryDocsH1>FormGroup</StoryDocsH1>
    <div style={{ maxWidth: 600 }}>
      <FormGroup label='Дефолтное состояние с контентом' required errorMessage='Ошибка'>
        <Input name='text' placeholder='Введите текст' />
      </FormGroup>
    </div>
  </StoryDocs>
);
