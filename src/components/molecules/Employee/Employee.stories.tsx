import React from 'react';
import Employee, { IEmployeeProps } from './Employee';
import { Story } from '@storybook/react';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { StoryDocs, StoryDocsH1 } from '../../storybook';

export default {
  title: 'components/withTest/Employee',
  component: Employee,
  argTypes: { user: { control: null }, }
};

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>Employee</StoryDocsH1>
      <div style={{ width: '880px', }}>
        <Employee tooltipBackground='default' user={usersMocks[0]} title={'Сотрудник'} />
      </div>
    </StoryDocs >
  );
};

export const Playground: Story<IEmployeeProps> = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <div style={{ width: '880px', }}>
          <Employee title={'Сотрудник'} {...args} user={usersMocks[0]} />
        </div>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A17995',
  },
};
