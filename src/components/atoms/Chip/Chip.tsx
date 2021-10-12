import React, { ReactNode } from 'react';
import './Chip.scss';
import { sizeClass } from '../../../utils/helpers';
import { Close } from '../../../index';
import { classnames } from '../../../utils/classnames';

export interface ITagProps {
  /** Текст */
  children: ReactNode | ReactNode[];
  /** Функция вызываемая при изменении значения */
  onClick?: () => void;
  /** Функция вызываемая при нажатии на крестик */
  onRemove?: () => void;
  /** залочен или нет */
  disabled?: boolean;
  /** размер */
  size?: 's' | 'm';
  /** Вариант отображения */
  type?: 'primary' | 'secondary' | 'outline';
  /** Иконка */
  icon?: ReactNode;
  /** Позиция отображения иконки */
  iconPosition?: 'right' | 'left';
}

const Chip: React.FC<ITagProps> = ({
  children,
  onClick,
  onRemove,
  size = 'm',
  type = 'primary',
  icon,
  iconPosition,
  disabled,
}: ITagProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick && onClick();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove && !disabled && onRemove();
  };

  // -------------------------------------------------------------------------------------------------------------------

  const clickableClass = onClick && !disabled ? 'rf-chip--clickable' : '';

  // -------------------------------------------------------------------------------------------------------------------
  return (
    <div className={classnames('rf-chip', `rf-chip--${disabled ? 'secondary' : type}`, sizeClass[size], clickableClass)} onClick={handleClick}>
      {icon && iconPosition && iconPosition === 'left' && <div className='rf-chip__left-icon'>{icon}</div>}
      {children}
      {onRemove && (
        <div className={classnames('rf-chip__right-icon', disabled && 'rf-chip__not-clickable')} onClick={handleRemove}>
          <Close />
        </div>
      )}
      {icon && iconPosition && iconPosition === 'right' && <div className='rf-chip__right-icon'>{icon}</div>}
    </div>
  );
};

export default Chip;
