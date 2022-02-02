
import React, { ReactNode } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import Datepicker from '../../atoms/Datepicker';
import { IDatepickerProps } from '../../atoms/Datepicker/Datepicker';

export type IInputControlProps = IDatepickerProps & IControlProps & {
  fromGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const DatepickerControl = ({ name, rules, defaultValue, shouldUnregister, label, fromGroupProps, ...props }: IInputControlProps) => {
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
          <Datepicker {...props} {...fieldProps} onChange={(value) => onChange(value.timestamp.value)} />
        </FormControl>
      )}
    />
  );
};

export default DatepickerControl;
