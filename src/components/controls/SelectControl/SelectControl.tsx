
import React, { ReactNode } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { Select } from '../../..';
import { ISelectProps } from '../../atoms/Select/Select';

export type ISelectControlProps = Omit<ISelectProps, 'onChange' | 'values'> & IControlProps & {
  fromGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const SelectControl = ({ name, rules, defaultValue = [], shouldUnregister, label, fromGroupProps, ...props }: ISelectControlProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { ref, value, ...fieldProps } }) => (
        <FormControl name={name} label={label} {...fromGroupProps}>
          <Select {...props} values={value} {...fieldProps} />
        </FormControl>
      )}
    />
  );
};

export default SelectControl;
