import React, { ReactNode } from 'react';
import './Tag.scss';
import { Variant } from '../../../types';
import { AllClose } from '../../../indexIcon';

export interface ITagProps {
  /** Цвет тега. */
  variant?: 'grey' | Variant;
  /** Иконка в начале тега. */
  icon?: ReactNode;
  /** Коллбек клика по тегу. */
  onClick?: () => void;
  /** Коллбек клика по кнопке удаления. */
  onRemove?: () => void;
  /** Дизейбл клика по тегу и кнопке удаления. */
  disabled?: boolean;
  /** Максимальная длина строки */
  maxLength?: number;
}

const Tag: React.FC<ITagProps> = ({ children, icon, onClick, onRemove, disabled, variant = 'default', maxLength = 32 }) => {

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick && onClick();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove && onRemove();
  };

  // -------------------------------------------------------------------------------------------------------------------

  const clickableClass = onClick && !disabled ? 'rf-tag--clickable' : '';

  // -------------------------------------------------------------------------------------------------------------------

  const overMaxLength = typeof children === 'string' && children.length > maxLength;

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className={`rf-tag ${clickableClass} rf-tag--${variant}`} onClick={ onClick ? handleClick : undefined}>
      {!!icon && (
        <div className='rf-tag__icon'>
          {icon}
        </div>
      )}
      {overMaxLength ? children.slice(0, maxLength) + '...' : children}
      {!!onRemove && <button type='button' className='rf-tag__remove' onClick={handleRemove} disabled={disabled} aria-label='Удалить'>
        <AllClose />
      </button>}
    </div>
  );
};

export default Tag;
