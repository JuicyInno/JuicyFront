import { UseControllerProps } from 'react-hook-form';
import { IFormGroup } from '../atoms/FormGroup/FormGroup';
import { IFormErrorControlProps } from './FormControl/FormControl';

export type IControlProps = UseControllerProps & Pick<IFormErrorControlProps, 'formState'>;

export type IPartialFormGroup =
  Omit<IFormGroup, 'children' | 'label' | 'errorMessage' | 'invalid' | 'required'>;
