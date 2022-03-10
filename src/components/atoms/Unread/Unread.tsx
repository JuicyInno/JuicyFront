import React, { FC } from 'react';
import './Unread.scss';

export const Unread: FC = ({ children }) => {
  return (
    <div className='unread'>
      {children}
      <div className='unread__badge' />
    </div>
  );
};
