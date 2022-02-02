
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import InputNumber, { IInputNumberProps } from '../../atoms/InputNumber/InputNumber';

export type IInputNumberControlProps = IInputNumberProps & IControlProps & {
  fromGroupProps?: IPartialFormGroup;
};

const InputNumberControl = ({ name, rules, defaultValue, shouldUnregister, label, fromGroupProps, ...props }: IInputNumberControlProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { onChange, ...fieldProps } }) => (
        <FormControl name={name} label={label} {...fromGroupProps}>
          <InputNumber {...props} {...fieldProps} onInputChange={value => onChange(+value.replace(/\s/g, ''))} />
        </FormControl>
      )}
    />
  );
};

export default InputNumberControl;
