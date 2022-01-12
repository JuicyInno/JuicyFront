import React from 'react';
import InputPhone, { IInputPhoneCountry } from './InputPhone';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { FormGroup } from '../../../index';

import FlagGB from '../../../assets/icons/FlagGB';
import FlagRU from '../../../assets/icons/FlagRU';


export default {
  title: 'forms/не проверено/InputPhone',
  component: InputPhone
};

const COUNTRIES: IInputPhoneCountry[] = [
  {
    flag: FlagRU,
    text: 'Россия',
    code: 7
  },
  {
    flag: FlagGB,
    text: 'Великобритания',
    code: 44
  }
];

export const inputPhone = () => {


  return (
    <Story name='InputPhone' description='Поле для ввода номера телефона. Доступен ввод только чисел.' width={600}>
      <StoryItem >
        <FormGroup label='Номер телефона'>
          <InputPhone name='phone' defaultValue={'79999999999'} countries={COUNTRIES}/>
        </FormGroup>
      </StoryItem>
      <StoryItem >
        <FormGroup label='Номер телефона'>
          <InputPhone name='phone' defaultValue='+79999999999' countries={COUNTRIES} disabled />
        </FormGroup>
      </StoryItem>
      <StoryItem >
        <FormGroup label='Номер телефона'>
          <InputPhone className='invalid' name='phone' defaultValue='+7999' countries={COUNTRIES} />
        </FormGroup>
      </StoryItem>
      <StoryItem >
        <FormGroup label='Номер телефона без выбора страны'>
          <InputPhone name='phone' />
        </FormGroup>
      </StoryItem>
      <div style={{ height: '300px' }}></div>
    </Story>
  );
};
