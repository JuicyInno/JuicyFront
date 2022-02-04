
import React, { ReactNode } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import Textarea, { ITextareaProps } from '../../atoms/Textarea';

export type ITextareaControlProps = ITextareaProps & IControlProps & {
  fromGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const TextareaControl = ({ name, rules, defaultValue, shouldUnregister, label, fromGroupProps, ...props }: ITextareaControlProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { ref, ...fieldProps } }) => (
        <FormControl name={name} label={label} {...fromGroupProps}>
          <Textarea {...props} {...fieldProps} />
        </FormControl>
      )}
    />
  );
};

export default TextareaControl;
