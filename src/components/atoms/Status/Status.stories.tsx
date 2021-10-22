import React from 'react';
import Status from './Status';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { Demo } from '../../molecules/Card/Card.stories';
import { withDesign } from 'storybook-addon-designs';

import { statuses } from './Status.mock';

export default {
  title: 'atoms/withTest/Status',
  component: Status,
  decorators: [withDesign]
};

const style = { display: 'flex' };
const margin = {
  marginRight: 24,
  padding: 4
};
const lastMargin = {
  marginRight: 0,
  padding: 4
};

export const status = () => {
  return <Story name='Status'>
    <StoryItem>
      <div style={style}>
        {statuses.map((item, i) => {
          return (
            <div style={i !== statuses.length - 1 ? margin : lastMargin} key={i}>
              <Status statusText={item.statusText} criticality={item.criticality} />
            </div>
          );
        })}
      </div>
    </StoryItem>
  </Story>;
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gDl8sDPM8Zmh5ol4ywzLrj/Design-System-VTB-Home?node-id=20799%3A70850',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};
