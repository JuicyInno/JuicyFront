
import React, { ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { RatePicker } from '../../..';
import { IPickerProps } from '../../atoms/RatePicker/RatePicker';

export type IInputControlProps = IPickerProps & IControlProps & {
  formGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const RatepickerControl = ({
  name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props
}: IInputControlProps) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    shouldUnregister={shouldUnregister}
    defaultValue={defaultValue}
    render={({ field: { value, onChange } }) => (
      <FormControl name={name} label={label} formState={formState} {...formGroupProps}>
        <RatePicker {...props} defaultPickedValue={value} getRate={onChange} />
      </FormControl>
    )}
  />
);

export default RatepickerControl;
