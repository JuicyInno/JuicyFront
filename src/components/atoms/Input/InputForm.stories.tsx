import React, { useEffect } from 'react';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import Input from './Input';
import { useForm, useWatch } from 'react-hook-form';
import Button from '../Button';

export default {
  title: 'не проверено/InputHook',
  component: Input
};

export const InputFormStories = () => {
  const fields = { test: 'defalutValue - пример' };
  const { handleSubmit, control, register } = useForm({ defaultValues: fields });
  const value = useWatch({
    control,
    name: 'test'
  });

  useEffect(() => {
    console.log(`Эффект получил новое значение из безконтрольного инпута! :: ${value}`);
  }, [value]);

  const inputJSX = <Input {...register('test')} onClear={() => {}} />;

  const onSubmit = (val: any) => {
    console.log(val);
  };
  return (
    <Story name='InputForm - пример react-hook-form' description='Однострочное поле ввода для Hook Form' width={600}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StoryItem subtitle='Состояния инпута'>{inputJSX}</StoryItem>
        <Button type='submit'>GO</Button>
      </form>
    </Story>
  );
};
