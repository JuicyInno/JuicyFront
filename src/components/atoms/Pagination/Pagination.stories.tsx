import React from 'react';
import Pagination from './Pagination';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'navigations/withTest/Pagination',
  component: Pagination
};

export const Demo = () => {

  const getCurrentPage = (page: number) => {
    console.log('Current page', page);
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Pagination</StoryDocsH1>
      <Pagination count={23} getCurrentPage={getCurrentPage}/>

    </StoryDocs>

  );
};

Demo.parameters = {
  actions: { disabled: true },
  controls: { disabled: true },
  design: {
    type: 'figma',
    url: '',
  },
};

export const Playground = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Pagination {...args} />
      </StoryRow>
    </StoryContainer>
  );
};
