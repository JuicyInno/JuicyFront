import React, { useRef } from 'react';
import { Story } from '@storybook/react';

import { StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import Copy from './Copy';

export default {
  title: 'components/withTest/Copy',
  component: Copy,
  argTypes: { children: { control: null }, }
};

export const Demo = () => {
  const containerRef = useRef<HTMLDivElement>();

  return <StoryContainer>
    <StoryDocsH1>Copy</StoryDocsH1>

    <StoryRow>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Copy tooltipLabel='tooltipLabel' copyMessage='copyMessage' successCopyMessage='successCopyMessage' />
        <span style={{ marginLeft: '20px' }}>Default</span>
      </div>
    </StoryRow>

    <StoryRow>
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Copy tooltipLabel='tooltipLabel' copyMessage='copyMessage' successCopyMessage='successCopyMessage' containerRef={containerRef} />
        <span style={{ marginLeft: '20px' }}>Position Toast</span>
      </div>
    </StoryRow>

    <StoryRow>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Copy tooltipLabel='tooltipLabel' copyMessage='copyMessage' successCopyMessage='successCopyMessage' disabled />
        <span style={{ marginLeft: '20px' }}>Disabled</span>
      </div>
    </StoryRow>

    <StoryRow>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Copy tooltipLabel='tooltipLabel' copyMessage='copyMessage' successCopyMessage='successCopyMessage' tooltipProps={{
          position: 'top',
          background: 'white'
        }} />
        <span style={{ marginLeft: '20px' }}>Tooltip props</span>
      </div>
    </StoryRow>
  </StoryContainer>;
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Copy tooltipLabel='tooltipLabel' copyMessage='copyMessage' successCopyMessage='successCopyMessage' {...args} />
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Ui-Home-for-Story-Book?node-id=3330%3A64350',
  },
};
