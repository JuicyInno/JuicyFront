import React from 'react';
import { Story } from '@storybook/react';

import ControlGroup from '../ControlGroup';
import Checkbox from '../Checkbox';

import {
  StoryDocs, StoryDocsH1, StoryDocsH3, StoryDocsDescription
} from '../../storybook';

// export default {
//   title: 'depricated/ControlGroup',
//   argTypes: {
//     label: { control: { type: 'text' } },
//     disabled: { type: 'boolean' },
//   }
// };

export const controlGroup: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>ControlGroup</StoryDocsH1>
      <StoryDocsDescription>
        Группировка чекбоксов и радиокнопок.
      </StoryDocsDescription>
      <StoryDocsH3>Вертикальная группа</StoryDocsH3>
      <ControlGroup>
        <Checkbox
          label='Default'
        />
        <Checkbox
          label='Default'
        />
      </ControlGroup>
      <StoryDocsH3>Горизонтальная группа</StoryDocsH3>
      <ControlGroup direction='horizontal'>
        <Checkbox
          label='Default'
        />
        <Checkbox
          label='Default'
        />
      </ControlGroup>
    </StoryDocs>
  );
};
