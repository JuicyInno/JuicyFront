
import React, { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import CommentTile, { ICommentTileProps } from '../../molecules/CommentTile/CommentTile';
import { IRequestAttachment } from '../../../types/projects.types';
import { useHookFormController } from '../HookFormProvider';

export type ICommentTileControlProps = Omit<ICommentTileProps, 'defaultValue'> & IControlProps & {
  formGroupProps?: IPartialFormGroup;
  label?: ReactNode;
  defaultValue?: {
    value?: string;
    files?: IRequestAttachment[];
  }
};

const CommentTileControl = ({
  name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props
}: ICommentTileControlProps) => {
  const Controller = useHookFormController();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { value = {}, onChange } }) => (
        <FormControl name={name} label={label} formState={formState} {...formGroupProps}>
          <CommentTile
            initialFiles={value.attachedFiles}
            comment={value.debounceString}
            onDebounce={onChange}
            {...props}
          />
        </FormControl>
      )}
    />
  );
};

export default CommentTileControl;
