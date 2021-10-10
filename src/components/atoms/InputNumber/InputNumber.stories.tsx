import React from 'react';
import InputNumber from './InputNumber';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';

export default {
  title: 'не проверено/InputNumber',
  component: InputNumber
};


export const inputNumber = () => {

  return (
    <Story name='InputNumber' description='Поле для ввода чисел.' width={600}>
      <StoryItem>
        <InputNumber name='number' defaultValue={2000.20} max={10000.50} floatPoints={1} />
      </StoryItem>
    </Story>
  );
};
