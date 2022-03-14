import {
  createContext, useContext, Dispatch, SetStateAction
} from 'react';

export interface ILayoutContextValue {
  isColumnVisible: boolean;
  setColumnVisible: Dispatch<SetStateAction<boolean>>;
}

export const LayoutContext = createContext<ILayoutContextValue | null>(null);

export const useLayoutContext = () => {
  const value = useContext(LayoutContext);

  if (!value) {
    throw new Error('No provider for LayoutContext.');
  }

  return value;
};
