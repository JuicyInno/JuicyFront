import React from 'react';
import Segment from './Segment';

import { Story } from '@storybook/react';

import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';
import { IOption } from '../../../types';
import { _segmentList, _segmentList2 } from './mock';

export default {
  title: 'navigations/withTest/Segment',
  component: Segment,
  argTypes: {
    list: { control: null },
    value: { control: null },
  }
};

export const Demo = () => {

  const onChange = (option: IOption) => {
    console.log(option);
  };

  return (
    <StoryContainer name='Segment (Сегмент 🧐)' description='Текстовый переключатель.'>

      <StoryItem>
        <StoryRow>
          <Segment list={_segmentList} onChange={onChange} />
        </StoryRow>
        <StoryRow>
          <Segment list={_segmentList} value={_segmentList[1]} onChange={onChange} />
        </StoryRow>
        <StoryRow>
          <Segment list={_segmentList2} value={_segmentList2[1]} onChange={onChange} />
        </StoryRow>
      </StoryItem>
    </StoryContainer>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Segment list={_segmentList} value={_segmentList[1]} onChange={() => {}} {...args} />
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A29002',
  },
};
