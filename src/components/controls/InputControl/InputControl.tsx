
import React, { ReactNode } from 'react';
import Input, { IInputProps } from '../../atoms/Input';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { useHookFormController } from '../HookFormProvider/HookFormProvider';

export type IInputControlProps = IInputProps & IControlProps & {
  formGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const InputControl = ({
  name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props
}: IInputControlProps) => {
  const Controller = useHookFormController();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl name={name} label={label} formState={formState} {...formGroupProps}>
          <Input {...props} {...field} />
        </FormControl>
      )}
    />
  );
};

export default InputControl;
