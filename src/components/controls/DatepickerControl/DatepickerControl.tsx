
import React, { ReactNode } from 'react';

import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import Datepicker from '../../atoms/Datepicker';
import { IDatepickerProps } from '../../atoms/Datepicker/Datepicker';
import { useHookFormController } from '..';

export type IInputControlProps = IDatepickerProps & IControlProps & {
  formGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const DatepickerControl = ({
  name, rules, defaultValue, control, shouldUnregister, formState, label, formGroupProps, ...props
}: IInputControlProps) => {
  const Controller = useHookFormController();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { ref, onChange, value, ...fieldProps } }) => (
        <FormControl name={name} label={label} formState={formState} {...formGroupProps}>
          <Datepicker {...props} {...fieldProps} defaultValue={value} onChange={(value) => onChange(value.timestamp.value)} />
        </FormControl>
      )}
    />
  );
};

export default DatepickerControl;
