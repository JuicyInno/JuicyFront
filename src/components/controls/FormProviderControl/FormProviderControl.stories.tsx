import { Story } from '@storybook/react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import InputControl from '../InputControl';
import StoryContainer from '../../storybook/Story';
import FormExample from './FormExample';

import FormProvierControl from '../FormProviderControl';
import { Button, FormGroup } from '../../..';
import { StoryDocsH3 } from '../../storybook';
import { IOption } from '../../../types';

export default {
  title: 'controls/FormProvierControl',
  component: FormProvierControl,
  argTypes: {}
};

export const SimpleForm: Story = () => {
  const methods = useForm();

  const onSubmit = useCallback((data: any) => {
    prompt(JSON.stringify(data, null, 2));
  }, []);

  return (
    <StoryContainer>
      <StoryDocsH3>Простая форма</StoryDocsH3>

      <FormProvierControl formMethods={methods} onSubmit={onSubmit}>
        <div style={{
          display: 'flex',
          columnGap: '20px',
          marginBottom: '20px'
        }}>
          <FormGroup label='Имя'>
            <InputControl name='firstName' />
          </FormGroup>

          <FormGroup label='Фамилия'>
            <InputControl name='lastName' />
          </FormGroup>
        </div>

        <div style={{
          display: 'flex',
          columnGap: '20px',
          marginBottom: '20px'
        }}>
          <FormGroup label='Пароль'>
            <InputControl name='password' />
          </FormGroup>

          <FormGroup label='Подтверждение пароля'>
            <InputControl name='confirm-password' />
          </FormGroup>
        </div>

        <Button type='submit'>Отправить</Button>
      </FormProvierControl>
    </StoryContainer>
  );
};

const RATE_OPTIONS: IOption[] = [
  {
    value: '3',
    label: '3 месяца'
  },
  {
    value: '6',
    label: '6 месяцев'
  },
  {
    value: '12',
    label: '12 месяцев'
  },
  {
    value: 'other',
    label: 'Другой период'
  },
];

export const ValidationForm: Story = () => {
  const methods = useForm<any>();

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
  const methods = useForm<any>({
    defaultValues: {
      'email': 'email@mail.ru',
      'firstName': 'firstName',
      'lastName': 'lastName',
      'year': 2020,
      'date-birth': new Date(),
      'rate': [RATE_OPTIONS[0]],
      'password': 'password',
      'password-confirm': 'password',
      'comment': { debounceString: 'comment' }
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
