import React, { CSSProperties } from 'react';

import { classnames } from '../../../utils/classnames';
import './Shimmer.scss';

export interface IShimmerProps {
  /** Вариант компонента (аватар/заголовок/картинка)
   * @default title
   */
  variant?: 'title' | 'avatar-title' | 'text' | 'avatar' | 'image';
  /** Тема
   * @default light
   */
  theme?: 'light' | 'dark';
  /** Ширина */
  width?: string | number;
  /** Высота */
  height?: string | number;
  /** Стили */
  style?: CSSProperties;
}

const Shimmer = ({ variant = 'title', theme = 'light', width, height, style }: IShimmerProps) =>
  <div
    className={classnames('rf-shimmer', `rf-shimmer--${variant}`, `rf-shimmer--${theme}`)}
    style={{
      width,
      height,
      ...style
    }}
  >
    <div className='rf-shimmer__wrap rf-shimmer__avatar'>
      <div className='rf-shimmer__inner' />
    </div>

    <div className='rf-shimmer__wrap'>
      <div className='rf-shimmer__inner' />
    </div>
  </div>;

export default Shimmer;
