import React from 'react';
import './StoryDocsH3.scss';

export const StoryDocsH3: React.FC = ({ children }) => {
  return (
    <h3 className='story-docs-h3'>
      {children}
    </h3>
  );
};
