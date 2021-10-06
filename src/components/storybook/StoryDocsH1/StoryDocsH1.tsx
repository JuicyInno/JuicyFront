import React from 'react';
import './StoryDocsH1.scss';

export const StoryDocsH1: React.FC = ({ children }) => {
  return (
    <h1 className='story-docs-h1'>
      {children}
    </h1>
  );
};
