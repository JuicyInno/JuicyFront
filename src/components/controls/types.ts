import { Control, UseControllerProps } from 'react-hook-form';
import { IFormGroup } from '../atoms/FormGroup/FormGroup';
import { IFormErrorControlProps } from './FormControl/FormControl';

export type IControlProps = Omit<UseControllerProps, 'control'> & Pick<IFormErrorControlProps, 'formState'> & {
  control?: Control<Record<string, any>>;
};

export type IPartialFormGroup =
  Omit<IFormGroup, 'children' | 'label' | 'errorMessage' | 'invalid' | 'required'>;
