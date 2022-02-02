import { ErrorMessage } from '@hookform/error-message';
import React, { ReactElement, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormGroup } from '../../..';
import { IFormGroup } from '../../atoms/FormGroup/FormGroup';

export interface IFormErrorControlProps extends Omit<IFormGroup, 'invalid' | 'errorMessage'> {
  name: string;
  children: ReactNode;
}

const FormControl = ({ name, children, ...props }: IFormErrorControlProps) => {
  const {
    formState: { errors },
  } = useFormContext();

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
