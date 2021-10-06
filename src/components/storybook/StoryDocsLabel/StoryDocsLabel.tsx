import React from 'react';
import './StoryDocsLabel.scss';

export const StoryDocsLabel: React.FC = ({ children }) => {
  return (
    <div className='story-docs-label'>
      {children}
    </div>
  );
};
