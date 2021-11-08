
import { Story } from '@storybook/react';

import AvatarStatus, { IAvatarStatusProps } from './AvatarStatus';

import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'components/withTest/AvatarStatus',
  component: AvatarStatus
};

export const Demo = () => {
  return <div style={{ padding: '20px' }}><AvatarStatus hasIcon /></div>;
};


export const Playground: Story = (args: IAvatarStatusProps) => {
  return (
    <StoryContainer>
      <StoryRow>
        <AvatarStatus { ...args } />
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A1347',
  },
};
