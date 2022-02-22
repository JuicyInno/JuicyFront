
import React, { ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { InputPhone } from '../../..';
import { IInputPhoneProps } from '../../atoms/InputPhone';

export type IInputNumberControlProps = IInputPhoneProps & IControlProps & {
  formGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const InputPhoneControl = ({
  name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props
}: IInputNumberControlProps) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    shouldUnregister={shouldUnregister}
    defaultValue={defaultValue}
    render={({ field: { ref, onBlur, value, ...fieldProps } }) => (
      <FormControl name={name} label={label} formState={formState} {...formGroupProps}>
        <InputPhone {...props} {...fieldProps} defaultValue={value} />
      </FormControl>
    )}
  />
);

export default InputPhoneControl;
