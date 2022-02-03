
import React, { ReactNode } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { InputFile } from '../../..';
import { IFileInputProps } from '../../atoms/InputFile/InputFile';

export type IInputFileControlProps = Omit<IFileInputProps, 'setFile'> & IControlProps & {
  fromGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const InputFileControl = ({ name, rules, defaultValue, shouldUnregister, label, fromGroupProps, ...props }: IInputFileControlProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { ref, onChange, ...fieldProps } }) => (
        <FormControl name={name} label={label} {...fromGroupProps}>
          <InputFile {...props} {...fieldProps} setFile={onChange} />
        </FormControl>
      )}
    />
  );
};

export default InputFileControl;
