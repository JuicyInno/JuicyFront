
import React, { ReactNode } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { RatePicker } from '../../..';
import { IPickerProps } from '../../atoms/RatePicker/RatePicker';

export type IInputControlProps = IPickerProps & IControlProps & {
  fromGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const RatepickerControl = ({ name, rules, defaultValue, shouldUnregister, label, fromGroupProps, ...props }: IInputControlProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { value, onChange } }) => (
        <FormControl name={name} label={label} {...fromGroupProps}>
          <RatePicker {...props} defaultPickedValue={value} getRate={onChange} />
        </FormControl>
      )}
    />
  );
};

export default RatepickerControl;
