import React, { useState } from 'react';
import Textarea from './Textarea';
import FormGroup from '../FormGroup';
import type { Story } from '@storybook/react';

import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'forms/не проверено/Textarea',
  component: Textarea,
  argTypes: {
    disabled: { type: 'boolean' },
    MAX_LENGTH: {
      type: 'number',
      defaultValue: 255
    }
  }
};

const LABEL = 'Комментарий';
const PLACEHOLDER = 'Оставить комментарий';
const LONG_DEFAULT_VALUE = 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которо';
const DEFAULT_VALUE = 'Какой-то комментарий';
const MAX_LENGTH = 255;
const errorMassage = 'Additional text';

export const Demo = () => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const getCurrentLength = (value: string) => value.length > MAX_LENGTH ? MAX_LENGTH : value.length;

  /** Получить комментарий */
  const getValue = (text: string) => {
    console.log(text);
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Textarea</StoryDocsH1>
      <div style={{
        display: 'grid',
        gap: 32,
        maxWidth: 435
      }}>
        <FormGroup showLargeSizeFirstLabel label={LABEL} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
          <Textarea placeholder={PLACEHOLDER} maxLength={MAX_LENGTH} getValue={getValue} />
        </FormGroup>
        <FormGroup showLargeSizeFirstLabel label={LABEL} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
          <Textarea placeholder={PLACEHOLDER} maxLength={MAX_LENGTH} getValue={getValue} onClear={() => {}} />
        </FormGroup>
        <FormGroup showLargeSizeFirstLabel label={LABEL} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
          <Textarea placeholder={PLACEHOLDER} defaultValue={DEFAULT_VALUE} maxLength={MAX_LENGTH} />
        </FormGroup>
        <FormGroup showLargeSizeFirstLabel label={LABEL} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
          <Textarea placeholder={PLACEHOLDER} defaultValue={DEFAULT_VALUE} maxLength={MAX_LENGTH} onClear={() => {}} />
        </FormGroup>
        <FormGroup showLargeSizeFirstLabel label={LABEL} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
          <Textarea disabled maxLength={MAX_LENGTH} />
        </FormGroup>
        <FormGroup showLargeSizeFirstLabel label={LABEL} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
          <Textarea placeholder={PLACEHOLDER} defaultValue={DEFAULT_VALUE} disabled maxLength={MAX_LENGTH} />
        </FormGroup>
        <FormGroup showLargeSizeFirstLabel invalid={false} errorMessage={errorMassage} label={LABEL} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
          <Textarea placeholder={PLACEHOLDER} maxLength={MAX_LENGTH} />
        </FormGroup>
        <FormGroup showLargeSizeFirstLabel errorMessage={errorMassage} label={LABEL} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
          <Textarea placeholder={PLACEHOLDER} invalid maxLength={MAX_LENGTH} value={value} onChange={onChange} />
        </FormGroup>
        <FormGroup showLargeSizeFirstLabel label={LABEL} labelSecondary={`(${getCurrentLength(value || LONG_DEFAULT_VALUE)}/${MAX_LENGTH})`}>
          <Textarea placeholder={PLACEHOLDER} value={LONG_DEFAULT_VALUE} maxLength={MAX_LENGTH} />
        </FormGroup>
        <FormGroup showLargeSizeFirstLabel label={LABEL} labelSecondary={`(${getCurrentLength(value || LONG_DEFAULT_VALUE)}/${MAX_LENGTH})`}>
          <Textarea autoResize placeholder={PLACEHOLDER} value={LONG_DEFAULT_VALUE} maxLength={MAX_LENGTH} />
        </FormGroup>
        <FormGroup showLargeSizeFirstLabel invalidLabelSecondary label={LABEL} labelSecondary={`(${getCurrentLength(LONG_DEFAULT_VALUE)}/${MAX_LENGTH})`}>
          <Textarea autoResize placeholder={PLACEHOLDER} value={LONG_DEFAULT_VALUE} maxLength={MAX_LENGTH} />
        </FormGroup>
      </div>
    </StoryDocs>
  );
};

export const Playground: Story = ({ MAX_LENGTH = 255, ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const onClear = () => {
    setValue('');
  };

  return (
    <StoryContainer>
      <StoryRow>
        <div style={{ width: 435 }}>
          <FormGroup showLargeSizeFirstLabel label={LABEL} labelSecondary={`(${value.length}/${MAX_LENGTH})`}>
            <Textarea {...args} placeholder={PLACEHOLDER} maxLength={MAX_LENGTH} value={value} onClear={onClear} onChange={onChange} />
          </FormGroup>
        </div>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A31587',
  },
};
