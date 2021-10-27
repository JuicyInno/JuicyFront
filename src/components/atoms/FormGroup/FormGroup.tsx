import React, { FC } from 'react';
import './FormGroup.scss';

export interface IFormGroup {
  /** Дочерние элементы */
  children: React.ReactNode | React.ReactNode[];
  /** Имя */
  label?: React.ReactNode;
  /** Размер главного лейбла сделать больше */
  showLargeSizeFirstLabel?: boolean;
  /** Имя */
  labelSecondary?: React.ReactNode;
  /** Сообщение об ошибке */
  errorMessage?: string;
  /** Красная подсветка лейбла нижнего */
  invalid?: boolean;
  /** Красная подсветка labelSecondary */
  invalidLabelSecondary?: boolean;
  /** Дополнительный класс */
  className?: string;
  /** Обязательность */
  required?: boolean;
}

const FormGroup: FC<IFormGroup> = ({
  label,
  labelSecondary,
  children,
  errorMessage,
  className = '',
  required = false,
  invalid,
  invalidLabelSecondary,
  showLargeSizeFirstLabel = false
}: IFormGroup) => {
  return (
    <div className={`rf-form-group ${className} `}>
      <div className='rf-form-group__inner'>
        {label && (
          <p
            className={`
          rf-form-group__label
          ${showLargeSizeFirstLabel ? 'rf-form-group__label-large' : ''}
        `}
          >
            {label}
            {required && <span className='rf-form-group__required'>*</span>}
            {!!labelSecondary && <span className={`rf-form-group__label-secondary ${invalidLabelSecondary ? 'rf-form-group__label-secondary-invalid' : ''}`}>{labelSecondary}</span>}
          </p>
        )}
        {children}
      </div>
      {errorMessage && <p
        className={`
          rf-form-group__message
          ${invalid ? 'rf-form-group__message-invalid' : ''}
        `}
      >
        {errorMessage}
      </p>}
    </div>
  );
};

export default FormGroup;
