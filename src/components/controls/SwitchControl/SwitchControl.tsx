
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import Switch, { ISwitchProps } from '../../atoms/Switch/Switch';

export type ISwitchControlProps = ISwitchProps & IControlProps & {
  fromGroupProps?: IPartialFormGroup;
};

const SwitchControl = ({ name, rules, defaultValue, shouldUnregister, fromGroupProps, ...props }: ISwitchControlProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <FormControl name={name} {...fromGroupProps}>
          <Switch {...props} onChange={onChange} value={value} />
        </FormControl>
      )}
    />
  );
};

export default SwitchControl;
