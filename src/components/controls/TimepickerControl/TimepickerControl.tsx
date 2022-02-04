
import React, { ReactNode } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { Timepicker } from '../../..';
import { ITimepickerProps } from '../../atoms/Timepicker/Timepicker';

export type ITimepcikerControlProps = ITimepickerProps & IControlProps & {
  fromGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const TimepickerControl = ({ name, rules, defaultValue, shouldUnregister, label, fromGroupProps, ...props }: ITimepcikerControlProps) => {
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
          <Timepicker {...props} initialValue={value} onChangeValue={onChange} />
        </FormControl>
      )}
    />
  );
};

export default TimepickerControl;
