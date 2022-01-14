import React from 'react';
import './StoryDocsH4.scss';

export const StoryDocsH4: React.FC = ({ children }) => {
  return (
    <h3 className='story-docs-h4'>
      {children}
    </h3>
  );
};
