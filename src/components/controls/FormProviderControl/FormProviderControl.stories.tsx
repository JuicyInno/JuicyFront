import { Story } from '@storybook/react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import InputControl from '../InputControl';
import StoryContainer from '../../storybook/Story';

import FormProvierControl from '../FormProviderControl';
import { Button, FormGroup } from '../../..';
import { StoryDocsH3 } from '../../storybook';

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

export const ValidationForm: Story = () => {
  const methods = useForm<any>();

  const onSubmit = useCallback((data: any) => {
    prompt(JSON.stringify(data, null, 2));
  }, []);

  return (
    <StoryContainer>
      <StoryDocsH3>Форма с валидацией</StoryDocsH3>

      <FormProvierControl formMethods={methods} onSubmit={onSubmit}>
        <div style={{
          display: 'flex',
          columnGap: '20px',
          marginBottom: '20px'
        }}>
          <InputControl label='Имя' name='firstName' defaultValue='value'
            rules={{
              required: 'Обязательное поле',
              maxLength: {
                value: 2,
                message: 'maxLength'
              }
            }} />

          <InputControl label='Фаилия' name='lastName' rules={{ required: 'Обязательное поле' }} />
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
