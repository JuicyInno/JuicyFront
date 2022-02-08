import './Layout.scss';

import React, { useState, useMemo } from 'react';

import { classnames } from '../../../utils/classnames';

import { LayoutContext } from './Layout.context';

export interface ILayoutProps {
  /** Максимальная ширина лейаута.*/
  maxWidth: 's' | 'm' | 'l';
  /** Ширина столбцов в двухколоночном лейауте. */
  columns?: [string, string];
}

export const Layout: React.FC<ILayoutProps> = ({ children, maxWidth, columns }) => {
  const [isColumnVisible, setColumnVisible] = useState(false);

  const value = useMemo(() => {
    return {
      isColumnVisible,
      setColumnVisible
    };
  }, [isColumnVisible]);

  return (
    <LayoutContext.Provider value={value}>
      <div className={classnames('layout', `layout--size-${maxWidth}`)} style={{ gridTemplateColumns: columns && columns.join(' ') }}>
        {children}
      </div>
    </LayoutContext.Provider>
  );
};
