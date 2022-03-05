import React, { ReactNode } from 'react';
import './Chip.scss';
import { classnames } from '../../../utils/classnames';
import Tooltip from '../Tooltip';
import { AllClose } from '../../../indexIcon';
import { ITooltipProps } from '../Tooltip/Tooltip';

export interface IChipProps {
  /** Текст */
  children: ReactNode | ReactNode[];
  /** Функция вызываемая при изменении значения */
  onClick?: () => void;
  /** Функция вызываемая при нажатии на крестик */
  onRemove?: () => void;
  /** Дизейбл. */
  disabled?: boolean;
  /**
   * Размер.
   * @default s
   */
  size?: 'xs' | 's';
  /** Вариант отображения.
   * @default primary
   */
  type?: 'primary' | 'secondary' | 'outline' | 'fill';
  /** Иконка. */
  icon?: ReactNode;
  /**
   * Позиция отображения иконки.
   * @default 'left'
   */
  iconPosition?: 'right' | 'left';
  /** Бейдж. */
  badge?: string;
  /** Максимальная длина строки. */
  maxLength?: number;
  /**
   * Цвет tooltip.
   * @default 'white'
   */
  tooltipBackground?: ITooltipProps['background'];
  /**
   * Всплытие события нажатия.
   * @default false
   */
  isBubble?: boolean;
}

const Chip: React.FC<IChipProps> = ({
  children,
  onClick,
  onRemove,
  size = 's',
  type = 'primary',
  icon,
  iconPosition = 'left',
  badge,
  disabled,
  maxLength = 32,
  tooltipBackground = 'white',
  isBubble = false
}: IChipProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    !isBubble && e.stopPropagation();
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
      <div
        className={classnames('rf-chip', `rf-chip--${type}`, `rf-chip--${size}`, disabled && 'rf-chip--disabled', clickableClass)}
        onClick={handleClick}
      >
        {!!icon && iconPosition === 'left' && <div className='rf-chip__icon rf-chip__icon--left'>{icon}</div>}
        {overMaxLength ? children.slice(0, maxLength) + '...' : children}
        {onRemove && (
          <button className={classnames('rf-chip__icon', 'rf-chip__icon--right')} onClick={handleRemove} disabled={disabled}>
            <AllClose size={size === 's' ? 'xxs' : 'xxxs'} />
          </button>
        )}
        {!!icon && iconPosition === 'right' && <div className='rf-chip__icon rf-chip__icon--right'>{icon}</div>}
        {!!badge && <div className='rf-chip__badge'><span className='rf-chip__badge-text'>{badge}</span></div>}
      </div>

      {children}
    </Tooltip>
  );
};

export default Chip;
