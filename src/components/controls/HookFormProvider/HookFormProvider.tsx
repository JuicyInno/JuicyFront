import React, {
  createContext, ReactNode, useContext
} from 'react';
import { Controller } from 'react-hook-form';

export interface IHookFormProviderProps {
  children: ReactNode;
  controller: typeof Controller;
}

export const HookFormContext = createContext<{ controller?: typeof Controller }>({ controller: undefined });

export const useHookFormController = () => {
  const { controller } = useContext(HookFormContext);

  if (!controller) {
    throw new Error('Context not found. Please use <HookFormProvider /> for your form.');
  }

  return controller;
};

const HookFormProvider = ({ children, controller }: IHookFormProviderProps) => (
  <HookFormContext.Provider value={{ controller }}>{children}</HookFormContext.Provider>
);

export default HookFormProvider;
