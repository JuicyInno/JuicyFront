import React from 'react';
import './StoryDocsH2.scss';

export const StoryDocsH2: React.FC = ({ children }) => {
  return (
    <h2 className='story-docs-h2'>
      {children}
    </h2>
  );
};
