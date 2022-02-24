import React from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { Checkbox } from '../../..';
import { ICheckboxProps } from '../../atoms/Checkbox/Checkbox';
import { useHookFormController } from '..';

export type ICheckboxControlProps = ICheckboxProps & Omit<IControlProps, 'defaultValue'> & {
  formGroupProps?: IPartialFormGroup;
};

const CheckboxControl = ({
  name, rules, defaultChecked, control, formState, shouldUnregister, formGroupProps, ...props
}: ICheckboxControlProps) => {
  const Controller = useHookFormController();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultChecked}
      render={({ field }) => (
        <FormControl name={name} formState={formState} {...formGroupProps}>
          <Checkbox {...props} {...field} defaultChecked={defaultChecked} />
        </FormControl>
      )}
    />
  );
};

export default CheckboxControl;
