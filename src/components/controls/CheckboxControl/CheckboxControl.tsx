import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { Checkbox } from '../../..';
import { ICheckboxProps } from '../../atoms/Checkbox/Checkbox';

export type ICheckboxControlProps = ICheckboxProps & Omit<IControlProps, 'defaultValue'> & {
  fromGroupProps?: IPartialFormGroup;
};

const CheckboxControl = ({ name, rules, defaultChecked, shouldUnregister, fromGroupProps, ...props }: ICheckboxControlProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultChecked}
      render={({ field }) => (
        <FormControl name={name} {...fromGroupProps}>
          <Checkbox {...props} {...field} defaultChecked={defaultChecked} />
        </FormControl>
      )}
    />
  );
};

export default CheckboxControl;
