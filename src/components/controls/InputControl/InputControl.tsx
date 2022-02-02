
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Input, { IInputProps } from '../../atoms/Input';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';

export type IInputControlProps = IInputProps & IControlProps & {
  fromGroupProps?: IPartialFormGroup;
};

const InputControl = ({ name, rules, defaultValue, shouldUnregister, label, fromGroupProps, ...props }: IInputControlProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl name={name} label={label} {...fromGroupProps}>
          <Input {...props} {...field} />
        </FormControl>
      )}
    />
  );
};

export default InputControl;
