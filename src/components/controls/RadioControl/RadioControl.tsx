
import React from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { Radio } from '../../..';
import { IRadioProps } from '../../atoms/Radio/Radio';
import { useHookFormController } from '..';

export type IRadioControlProps = IRadioProps & Omit<IControlProps, 'defaultValue'> & {
  formGroupProps?: IPartialFormGroup;
};

const RadioControl = ({
  name, rules, defaultChecked, control, formState, shouldUnregister, formGroupProps, ...props
}: IRadioControlProps) => {
  const Controller = useHookFormController();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultChecked && props.value}
      render={({ field: { ref, value, ...fieldProps } }) => (
        <FormControl name={name} formState={formState} {...formGroupProps}>
          <Radio {...props} {...fieldProps} checked={value === props.value} onChange={(e) => fieldProps.onChange(e.target.value)} />
        </FormControl>
      )}
    />
  );
};

export default RadioControl;
