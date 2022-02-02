import React, { ReactNode } from 'react';
import {
  FormProvider, SubmitHandler, UseFormReturn
} from 'react-hook-form';

export interface IFormProviderControlProps<T> {
  children: ReactNode;
  className?: string;
  formMethods: UseFormReturn<T>;
  onSubmit: SubmitHandler<any>;
}

const FormProviderControl = ({ children, className = '', formMethods, onSubmit, }: IFormProviderControlProps<any>) => {
  return <FormProvider {...formMethods} >
    <form onSubmit={formMethods.handleSubmit(onSubmit)} className={`base-form-provider ${className}`}>
      {children}
    </form>
  </FormProvider>;
};

export default FormProviderControl;
