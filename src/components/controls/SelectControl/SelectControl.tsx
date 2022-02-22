
import React, { ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { Select } from '../../..';
import { ISelectProps } from '../../atoms/Select/Select';

export type ISelectControlProps = Omit<ISelectProps, 'onChange' | 'values'> & IControlProps & {
  formGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const SelectControl = ({
  name, rules, defaultValue = [], control, formState, shouldUnregister, label, formGroupProps, ...props
}: ISelectControlProps) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    shouldUnregister={shouldUnregister}
    defaultValue={defaultValue}
    render={({ field: { ref, value, ...fieldProps } }) => (
      <FormControl name={name} label={label} formState={formState} {...formGroupProps}>
        <Select {...props} values={value} {...fieldProps} />
      </FormControl>
    )}
  />
);

export default SelectControl;
