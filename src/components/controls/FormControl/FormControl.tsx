import { ErrorMessage } from '@hookform/error-message';
import React, { ReactElement, ReactNode } from 'react';
import { FieldValues, FormState } from 'react-hook-form';
import { FormGroup } from '../../..';
import { IFormGroup } from '../../atoms/FormGroup/FormGroup';

export interface IFormErrorControlProps extends Omit<IFormGroup, 'invalid' | 'errorMessage'> {
  name: string;
  children: ReactNode;
  formState?: FormState<FieldValues>;
}

const FormControl = ({ name, children, formState, ...props }: IFormErrorControlProps) => {
  const { errors = {} } = formState || {};
  const invalid = !!errors[name];

  return (
    <FormGroup
      invalid={invalid}
      errorMessage={
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => message}
        />
      }
      {...props}
    >
      {React.cloneElement(children as ReactElement<any>, { invalid })}
    </FormGroup>
  );
};

export default FormControl;
