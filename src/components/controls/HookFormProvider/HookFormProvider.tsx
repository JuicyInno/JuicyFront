import React, {
  createContext, ReactElement, ReactNode, useContext
} from 'react';
import { ControllerProps } from 'react-hook-form';

type ControllerType = (props: ControllerProps) => ReactElement;

export interface IHookFormProviderProps {
  children: ReactNode;
  controller: ControllerType;
}

export const HookFormContext = createContext<{ controller?: ControllerType }>({ controller: undefined });

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
