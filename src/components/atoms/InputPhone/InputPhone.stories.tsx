import React from 'react';
import InputPhone, { IInputPhoneCountry } from './InputPhone';
import { Story } from '@storybook/react';
import StoryItem from '../../storybook/StoryItem';
import { FormGroup } from '../../../index';
import {
  StoryDocs, StoryDocsH1, StoryDocsH4,
} from '../../storybook';
import FlagGB from './FlagGB';
import FlagRU from './FlagRU';
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
    onClear: {
      table: { disable: true },
      defaultValue: null
    },
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

      <div style={{
        marginBottom: '40px',
        maxWidth: '400px'
      }}>
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

      <div style={{
        marginBottom: '40px',
        maxWidth: '400px'
      }}>
        <div style={{ fontSize: '16px' }}>
          <p>Filled</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <FormGroup label='Номер телефона'>
            <InputPhone name='phone' defaultValue={'7 926 278 2356'} countries={COUNTRIES} />
          </FormGroup>
        </div>
      </div>

      <div style={{
        marginBottom: '40px',
        maxWidth: '400px'
      }}>
        <div style={{ fontSize: '16px' }}>
          <p>disabled</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <FormGroup label='Номер телефона'>
            <InputPhone name='phone' disabled defaultValue={'+7 926 278 23^&'} countries={COUNTRIES} />
          </FormGroup>
        </div>
      </div>

      <div style={{
        marginBottom: '40px',
        maxWidth: '400px'
      }}>
        <div style={{ fontSize: '16px' }}>
          <p>DefaultCountry</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <FormGroup label='Номер телефона'>
            <InputPhone defaultCountry={COUNTRIES[1]} name='phone' countries={COUNTRIES} />
          </FormGroup>
        </div>
      </div>

      <div style={{
        marginBottom: '40px',
        maxWidth: '400px'
      }}>
        <div style={{ fontSize: '16px' }}>
          <p>Invalid</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <FormGroup label='Номер телефона' errorMessage='Error text'>
            <InputPhone name='phone' invalid countries={COUNTRIES} />
          </FormGroup>
        </div>
      </div>
    </StoryDocs>
  );
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

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A21190',
  },
};
