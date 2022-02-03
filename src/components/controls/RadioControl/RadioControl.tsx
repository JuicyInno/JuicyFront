
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import { Radio } from '../../..';
import { IRadioProps } from '../../atoms/Radio/Radio';

export type IRadioControlProps = IRadioProps & Omit<IControlProps, 'defaultValue'> & {
  fromGroupProps?: IPartialFormGroup;
};

const RadioControl = ({ name, rules, defaultChecked, shouldUnregister, fromGroupProps, ...props }: IRadioControlProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultChecked && props.value}
      render={({ field: { ref, value, ...fieldProps } }) => (
        <FormControl name={name} {...fromGroupProps}>
          <Radio {...props} {...fieldProps} checked={value === props.value} onChange={(e) => fieldProps.onChange(e.target.value)} />
        </FormControl>
      )}
    />
  );
};

export default RadioControl;
