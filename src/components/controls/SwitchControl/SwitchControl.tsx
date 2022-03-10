
import React from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import Switch, { ISwitchProps } from '../../atoms/Switch/Switch';
import { useHookFormController } from '../HookFormProvider';

export type ISwitchControlProps = ISwitchProps & IControlProps & {
  formGroupProps?: IPartialFormGroup;
};

const SwitchControl = ({
  name, rules, defaultValue, control, formState, shouldUnregister, formGroupProps, ...props
}: ISwitchControlProps) => {
  const Controller = useHookFormController();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <FormControl name={name} formState={formState} {...formGroupProps}>
          <Switch {...props} onChange={onChange} value={value} />
        </FormControl>
      )}
    />
  );
};

export default SwitchControl;
