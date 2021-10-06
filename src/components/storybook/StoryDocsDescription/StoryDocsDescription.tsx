import React from 'react';
import './StoryDocsDescription.scss';

export const StoryDocsDescription: React.FC = ({ children }) => {
  return (
    <p className='story-docs-description'>
      {children}
    </p>
  );
};
