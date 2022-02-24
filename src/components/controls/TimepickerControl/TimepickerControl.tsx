
import React, { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { Timepicker } from '../../..';
import { ITimepickerProps } from '../../atoms/Timepicker/Timepicker';
import { useHookFormController } from '..';

export type ITimepcikerControlProps = ITimepickerProps & IControlProps & {
  formGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const TimepickerControl = ({
  name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props
}: ITimepcikerControlProps) => {
  const Controller = useHookFormController();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { value, onChange } }) => (
        <FormControl name={name} label={label} formState={formState} {...formGroupProps}>
          <Timepicker {...props} initialValue={value} onChangeValue={onChange} />
        </FormControl>
      )}
    />
  );
};

export default TimepickerControl;
