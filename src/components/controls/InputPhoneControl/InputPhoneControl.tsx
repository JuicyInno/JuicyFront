
import React, { ReactNode } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { InputPhone } from '../../..';
import { IInputPhoneProps } from '../../atoms/InputPhone';

export type IInputNumberControlProps = IInputPhoneProps & IControlProps & {
  fromGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const InputPhoneControl = ({ name, rules, defaultValue, shouldUnregister, label, fromGroupProps, ...props }: IInputNumberControlProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { ref, onBlur, value, ...fieldProps } }) => (
        <FormControl name={name} label={label} {...fromGroupProps}>
          <InputPhone {...props} {...fieldProps} defaultValue={value} />
        </FormControl>
      )}
    />
  );
};

export default InputPhoneControl;
