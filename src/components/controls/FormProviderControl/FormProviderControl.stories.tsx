import { Story } from '@storybook/react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import StoryContainer from '../../storybook/Story';
import FormExample, { IFormExampleData, RATE_OPTIONS } from './FormExample';

import FormProvierControl from '../FormProviderControl';
import { StoryDocsH3 } from '../../storybook';

export default {
  title: 'controls/FormProvierControl',
  component: FormProvierControl,
  argTypes: {}
};

export const ValidationForm: Story = () => {
  const methods = useForm<IFormExampleData>();

  const onSubmit = useCallback((data: any) => {
    prompt(JSON.stringify(data, null, 2));
  }, []);

  return (
    <StoryContainer>
      <StoryDocsH3>Форма с валидацией</StoryDocsH3>

      <FormExample formMethods={methods} onSubmit={onSubmit} />
    </StoryContainer>
  );
};

export const DefaultValuesForm: Story = () => {
  const methods = useForm<IFormExampleData>({
    defaultValues: {
      'email': 'email@mail.ru',
      'firstName': 'firstName',
      'lastName': 'lastName',
      'year': 2020,
      'date-birth': new Date(),
      'rate': [RATE_OPTIONS[0]],
      'password': 'password',
      'password-confirm': 'password',
      'comment': { debounceString: 'comment' },
      'text': 'comment',
      'vertical-group': '1',
      'vertical-name': '2',
      'privacy': true,
      'phone': '+712312345'
    }
  });

  const onSubmit = useCallback((data: any) => {
    prompt(JSON.stringify(data, null, 2));
  }, []);

  return (
    <StoryContainer>
      <StoryDocsH3>Форма с валидацией</StoryDocsH3>

      <FormExample formMethods={methods} onSubmit={onSubmit} />
    </StoryContainer>
  );
};
