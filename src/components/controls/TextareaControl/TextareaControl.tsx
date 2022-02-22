
import React, { ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import Textarea, { ITextareaProps } from '../../atoms/Textarea';

export type ITextareaControlProps = ITextareaProps & IControlProps & {
  formGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const TextareaControl = ({
  name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props
}: ITextareaControlProps) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    shouldUnregister={shouldUnregister}
    defaultValue={defaultValue}
    render={({ field: { ref, ...fieldProps } }) => (
      <FormControl name={name} label={label} formState={formState} {...formGroupProps}>
        <Textarea {...props} {...fieldProps} />
      </FormControl>
    )}
  />
);

export default TextareaControl;
