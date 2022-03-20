import './Link.scss';

import React, { ReactNode, ElementType } from 'react';

import { classnames } from '../../../utils/classnames';

interface IProps<C extends ElementType> {
  /**
   * Компонент или тег для корневого элемента.
   * @default 'a'
   */
  component?: C;
  /** Текст ссылки. */
  children?: ReactNode;
  /**
   * Цвет ссылки.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary';
  /**
   * Размер ссылки.
   * @default 'md'
   */
  size?: 'md' | 'sm';
  /**
   * Иконка перед текстом.
   */
  startAdornment?: ReactNode;
  /**
   * Иконка после текста.
   */
  endAdornment?: ReactNode;
}

type ILinkProps<C extends React.ElementType> = IProps<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof IProps<C>>

export const Link = <C extends React.ElementType = 'a'>({
  component,
  children,
  color = 'primary',
  size = 'md',
  startAdornment,
  endAdornment,
  ...props
}: ILinkProps<C>) => {
  const Component = component || 'a';

  return (
    <Component data-testid='rf-link' className={classnames('rf-link', `rf-link--${color}`, `rf-link--${size}`)} {...props}>
      {!!startAdornment && <div className='rf-link__adornment rf-link__adornment--start'>{startAdornment}</div>}
      <div className='rf-link--children'>
        {children}
      </div>
      {!!endAdornment && <div className='rf-link__adornment rf-link__adornment--end'>{endAdornment}</div>}
    </Component>
  );
};
