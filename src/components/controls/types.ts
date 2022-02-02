import { UseControllerProps } from 'react-hook-form';
import { IFormGroup } from '../atoms/FormGroup/FormGroup';

export type IControlProps = Omit<UseControllerProps, 'control'>;

export type IPartialFormGroup = Omit<IFormGroup, 'children' | 'label' | 'errorMessage' | 'invalid' | 'required'>;
