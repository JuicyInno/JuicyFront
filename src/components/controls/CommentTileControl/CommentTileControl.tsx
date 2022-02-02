
import React, { ReactNode } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import CommentTile, { ICommentTileProps } from '../../molecules/CommentTile/CommentTile';
import { IDebounceCommentResult, IRequestAttachment } from '../../../types/projects.types';

export type ICommentTileControlProps = Omit<ICommentTileProps, 'defaultValue'> & IControlProps & {
  fromGroupProps?: IPartialFormGroup;
  label?: ReactNode;
  defaultValue?: {
    value?: string;
    files?: IRequestAttachment[];
  }
};

const CommentTileControl = ({ name, rules, defaultValue, shouldUnregister, label, fromGroupProps, ...props }: ICommentTileControlProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { value = {}, onChange } }) => (
        <FormControl name={name} label={label} {...fromGroupProps}>
          <CommentTile
            initialFiles={defaultValue?.files || value.attachedFiles}
            comment={defaultValue?.value || value.debounceString}
            onDebounce={({ debounceString, attachedFiles }: IDebounceCommentResult) => onChange({
              value: debounceString,
              files: attachedFiles
            })}
            {...props}
          />
        </FormControl>
      )}
    />
  );
};

export default CommentTileControl;
