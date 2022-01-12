import React, { ReactNode } from 'react';
import './Chip.scss';
import { sizeClass } from '../../../utils/helpers';
import { classnames } from '../../../utils/classnames';
import Tooltip from '../Tooltip';
import Close from '../../../assets/icons/Close';

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
  /** Максимальная длина строки */
  maxLength?: number;
  /**
   * Цвет tooltip
   * @default 'default'
   */
  tooltipBackground?: 'default' | 'white'
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
  maxLength = 32,
  tooltipBackground = 'default'
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

  const overMaxLength = typeof children === 'string' && children.length > maxLength;

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <Tooltip background={tooltipBackground} position={'bottom'} isVisible={overMaxLength}>

      <div className={classnames('rf-chip', `rf-chip--${disabled ? 'secondary' : type}`, sizeClass[size], clickableClass)}
        onClick={handleClick}>
        {icon && iconPosition && iconPosition === 'left' && <div className='rf-chip__left-icon'>{icon}</div>}
        {overMaxLength ? children.slice(0, maxLength) + '...' : children}
        {onRemove && (
          <div className={classnames('rf-chip__right-icon', disabled && 'rf-chip__not-clickable')} onClick={handleRemove}>
            <Close />
          </div>
        )}
        {icon && iconPosition && iconPosition === 'right' && <div className='rf-chip__right-icon'>{icon}</div>}
      </div>
      {children}
    </Tooltip>
  );
};

export default Chip;
