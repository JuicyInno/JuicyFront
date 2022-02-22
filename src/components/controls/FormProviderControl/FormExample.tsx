import React, { useRef } from 'react';
import { useWatch } from 'react-hook-form';

import FormProviderControl from '.';
import {
  Button,
  ControlGroup,
  InputControl,
  CommentTileControl,
  DatepickerControl,
  InputNumberControl,
  SelectControl,
  CheckboxControl,
  RadioControl,
  TextareaControl,
  InputFileControl,
  InputPhoneControl,
  RatepickerControl,
  SwitchControl,
  TimepickerControl
} from '../../..';
import { IFileData, IOption } from '../../../types';
import { IFormProviderControlProps } from './FormProviderControl';

export const RATE_OPTIONS: IOption[] = [
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

export type IFormExampleData = {
  'email': string;
  'firstName': string;
  'lastName': string;
  'year': number | string;
  'date-birth': Date | string | number;
  'rate': IOption[];
  'password': string;
  'password-confirm': string;
  'comment': { debounceString: string, attachedFiles: IFileData[] };
  'text': string;
  'vertical-group': string;
  'vertical-name': string;
  'privacy': boolean;
  'phone': string;
  'rates': number;
  'switch': boolean;
  'time': number | string;
}

export interface IFormExampleProps extends Omit<IFormProviderControlProps<any>, 'children'> {
  withReset?: boolean;
}

const FormExample = ({ withReset = true, ...props }: IFormExampleProps) => {
  const password = useRef({});
  password.current = useWatch({
    control: props.formMethods.control,
    name: 'password'
  });

  const onReset = () => props.formMethods.reset();

  return <FormProviderControl {...props}>
    <div style={{
      display: 'flex',
      columnGap: '20px',
      marginBottom: '20px'
    }}>
      <InputControl
        label='Email'
        name='email'
        rules={{
          required: 'Обязательное поле',
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Не валидный email'
          }
        }}
      />

      <InputPhoneControl label='Телефон' name='phone' rules={{ required: 'Обязательное поле' }} />
    </div>

    <div style={{
      display: 'flex',
      columnGap: '20px',
      marginBottom: '20px'
    }}>
      <InputControl
        label='Имя'
        name='firstName'
        defaultValue='value'
        rules={{
          required: 'Обязательное поле',
          minLength: {
            value: 2,
            message: 'Минимальная длина 2 символа'
          }
        }}
      />

      <InputControl label='Фаилия' name='lastName' rules={{ required: 'Обязательное поле' }} />
    </div>

    <div style={{
      display: 'flex',
      columnGap: '20px',
      marginBottom: '20px'
    }}>
      <InputNumberControl
        label='Год'
        name='year'
        rules={{ required: 'Обязательное поле' }}
      />

      <DatepickerControl
        label='Дата рождения'
        name='date-birth'
        rules={{ required: 'Обязательное поле' }}
      />

      <TimepickerControl label='Время' name='time' rules={{ required: 'Обязательное поле' }} />

      <SelectControl
        label='Период'
        name='rate'
        readOnly
        placeholder='Выберите период'
        options={RATE_OPTIONS}
        rules={{ required: 'Обязательное поле' }}
      />
    </div>

    <div style={{
      display: 'flex',
      columnGap: '20px',
      marginBottom: '20px'
    }}>
      <InputControl label='Пароль' name='password' rules={{ required: 'Обязательное поле' }} type='password' />
      <InputControl
        label='Подтверждение пароля'
        name='password-confirm'
        rules={{
          required: 'Обязательное поле',
          validate: (value) => value === password.current || 'Пароль не совпадает'
        }}
        type='password'
      />
    </div>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      columnGap: '20px',
      marginBottom: '20px'
    }}>
      <RatepickerControl label='Рейтинг' name='rates' isStarPicker />
      <TextareaControl name='text' label='Оставьте комментарий' rules={{ required: 'Обязательное поле' }} />
      <InputFileControl name='file' rules={{ required: 'Обязательное поле' }} placeholder='Прикрепить файл' />
    </div>

    <div style={{
      display: 'flex',
      columnGap: '20px',
      marginBottom: '20px'
    }}>
      <ControlGroup>
        <RadioControl
          name='vertical-group'
          label='Город 1'
          value='1'
        />
        <RadioControl
          name='vertical-group'
          label='Город 1'
          value='2'
        />
        <RadioControl
          name='vertical-group'
          label='Город 3'
          value='3'
        />
      </ControlGroup>

      <ControlGroup>
        <RadioControl
          name='vertical-name'
          label='Город 4'
          value='1'
        />
        <RadioControl
          name='vertical-name'
          label='Город 6'
          value='2'
        />
        <RadioControl
          name='vertical-name'
          label='Город 7'
          value='3'
        />
      </ControlGroup>
    </div>

    <div style={{
      display: 'flex',
      columnGap: '20px',
      marginBottom: '20px'
    }}>
      <CheckboxControl name='privacy' label='Соглашаюсь с правилами' rules={{ required: 'Обязательное поле' }} />
      <SwitchControl name='switch' label='Переключить' rules={{ required: 'Обязательное поле' }} />
    </div>

    <div style={{
      display: 'flex',
      columnGap: '20px',
      marginBottom: '20px'
    }}>
      <CommentTileControl name='comment' />
    </div>

    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Button onClick={onReset} buttonType='light'>Очистить</Button>
      <Button type='submit'>Отправить</Button>
    </div>
  </FormProviderControl>;
};

export default FormExample;
