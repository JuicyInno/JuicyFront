import React from 'react';
import './StoryDocs.scss';

export const StoryDocs: React.FC = ({ children }) => {
  return (
    <div className='story-docs'>
      {children}
    </div>
  );
};
