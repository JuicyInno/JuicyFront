import React, { ReactNode } from 'react';
import {
  FormProvider, SubmitHandler, UseFormReturn
} from 'react-hook-form';

export interface IBaseFormProviderProps {
  children: ReactNode;
  className?: string;
  formMethods: UseFormReturn;
  onSubmit: SubmitHandler<any>;
}

const FormProviderControl = ({ children, className = '', formMethods, onSubmit, }: IBaseFormProviderProps) => {
  return <FormProvider {...formMethods} >
    <form onSubmit={formMethods.handleSubmit(onSubmit)} className={`base-form-provider ${className}`}>
      {children}
    </form>
  </FormProvider>;
};

export default FormProviderControl;
