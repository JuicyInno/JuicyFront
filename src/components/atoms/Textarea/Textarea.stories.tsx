import React, { useState } from 'react';
import Textarea from './Textarea';
import FormGroup from '../FormGroup';
import { Story } from '@storybook/react';

import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'не проверено/Textarea',
  component: Textarea,
  argTypes: {
    disabled: { type: 'boolean' },
    required: { type: 'boolean' },
    maxLength: { type: 'number' }
  }
};

const LABEL = 'Label';
const PLACEHOLDER = 'Введите текст';
const DEFAULT_VALUE = 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem s';
const MAX_LENGTH = 255;

export const Demo = () => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const getValue = (s: string) => {
    console.log(s);
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Textarea</StoryDocsH1>
      <div style={{
        display: 'grid',
        gap: 32,
        maxWidth: 400
      }}>
        <FormGroup label={LABEL}>
          <Textarea placeholder={PLACEHOLDER} maxLength={MAX_LENGTH} getValue={getValue} />
        </FormGroup>
        <FormGroup label={LABEL}>
          <Textarea placeholder={PLACEHOLDER} defaultValue={DEFAULT_VALUE} maxLength={MAX_LENGTH} />
        </FormGroup>
        <FormGroup label={LABEL}>
          <Textarea placeholder={PLACEHOLDER} disabled maxLength={MAX_LENGTH} />
        </FormGroup>
        <FormGroup label={LABEL}>
          <Textarea placeholder={PLACEHOLDER} defaultValue={DEFAULT_VALUE} disabled maxLength={MAX_LENGTH} />
        </FormGroup>
        <FormGroup label={LABEL}>
          <Textarea placeholder={PLACEHOLDER} invalid maxLength={MAX_LENGTH} />
        </FormGroup>
        <FormGroup label={LABEL} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
          <Textarea placeholder={PLACEHOLDER} invalid maxLength={MAX_LENGTH} showMaxLength={false} value={value} onChange={onChange} />
        </FormGroup>
        <div style={{ maxWidth: 250 }}>
          <FormGroup label='Очень длинный лейбл на маленьком экране' labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
            <Textarea placeholder={PLACEHOLDER} invalid maxLength={MAX_LENGTH} showMaxLength={false} value={value} onChange={onChange} />
          </FormGroup>
        </div>

      </div>
    </StoryDocs>
  );
};

export const Playground: Story = ({ maxLength, showMaxLength = true, required, ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <StoryContainer>
      <StoryRow>
        <FormGroup label={LABEL} labelSecondary={!showMaxLength && !!maxLength && `(${value.length}/${maxLength})`} required={required}>
          <Textarea
            required={required}
            placeholder={PLACEHOLDER}
            onChange={onChange}
            maxLength={maxLength}
            showMaxLength={showMaxLength}
            {...args}
          />
        </FormGroup>
      </StoryRow>
    </StoryContainer>
  );
};
