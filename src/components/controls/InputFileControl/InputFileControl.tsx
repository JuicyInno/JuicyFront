
import React, { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { InputFile } from '../../..';
import { IFileInputProps } from '../../atoms/InputFile/InputFile';
import { useHookFormController } from '..';

export type IInputFileControlProps = Omit<IFileInputProps, 'setFile'> & IControlProps & {
  formGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const InputFileControl = ({
  name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props
}: IInputFileControlProps) => {
  const Controller = useHookFormController();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { ref, onChange, ...fieldProps } }) => (
        <FormControl name={name} label={label} formState={formState} {...formGroupProps}>
          <InputFile {...props} {...fieldProps} setFile={onChange} />
        </FormControl>
      )}
    />
  );
};

export default InputFileControl;
