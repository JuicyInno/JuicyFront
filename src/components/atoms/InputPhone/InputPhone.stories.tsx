import React from 'react';
import InputPhone, { IInputPhoneCountry } from './InputPhone';
import { Story } from '@storybook/react';
import StoryItem from '../../storybook/StoryItem';
import { FormGroup } from '../../../index';
import {
  StoryDocs, StoryDocsH1, StoryDocsH4,
} from '../../storybook';
import FlagGB from '../../../assets/icons/FlagGB';
import FlagRU from '../../../assets/icons/FlagRU';
import StoryContainer from '../../storybook/Story';

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


export default {
  title: 'forms/withTest/InputPhone',
  component: InputPhone,
  argTypes: {
    className: { table: { disable: true } },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    defaultCountry: {
      options: COUNTRIES,
      control: { type: 'object' },
      defaultValue: COUNTRIES[0]
    },
    countries: {
      controle: { type: 'array' },
      defaultValue: COUNTRIES
    },
    defaultValue: {
      controle: { type: 'string' },
      defaultValue: '7 777 777 77 77'
    },
    onClear: { table: { disable: true } },
    debounce: { table: { disable: true } },
    icon: { table: { disable: true } },
    startAdornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
    onDebounce: { table: { disable: true } },
    ref: { table: { disable: true } },
  }
};


export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>Phone Input</StoryDocsH1>

      <StoryDocsH4>Состояния</StoryDocsH4>

      <div style={{ marginBottom: '40px' }}>
        <div style={{ fontSize: '16px' }}>
          <p>Default</p>
          <p> По дефолту стоит флаг России, но можно выбрать <br /> любой другой</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <FormGroup label='Введите номер телефона'>
            <InputPhone name='phone' defaultValue={'7'} countries={COUNTRIES} />
          </FormGroup>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <div style={{ fontSize: '16px' }}>
          <p>Filled</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <FormGroup label='Номер телефона'>
            <InputPhone name='phone' defaultValue={'7 926 278 2356'} countries={COUNTRIES} />
          </FormGroup>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <div style={{ fontSize: '16px' }}>
          <p>Disable</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <FormGroup label='Номер телефона'>
            <InputPhone disabled name='phone' defaultValue={'7'} countries={COUNTRIES} />
          </FormGroup>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <div style={{ fontSize: '16px' }}>
          <p>Error</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <FormGroup label='Номер телефона' errorMessage='Error text'>
            <InputPhone name='phone' defaultValue={'+7 926 278 23^&'} countries={COUNTRIES} />
          </FormGroup>
        </div>
      </div>

      <div style={{ height: '300px' }}></div>
    </StoryDocs >
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/Проекты-ВТБ-основной?node-id=18262%3A231291',
  },
};


export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryItem>
        <FormGroup label='Номер телефона'>
          <InputPhone name='phone' {...args} />
        </FormGroup>
      </StoryItem>
    </StoryContainer>
  );
};
