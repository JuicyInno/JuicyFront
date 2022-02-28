import React from 'react';
import Tooltip, { ITooltipProps } from './Tooltip';
import Button from '../Button';
import StoryContainer from '../../storybook/Story';
import { Story } from '@storybook/react';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';
import { withDesign } from 'storybook-addon-designs';
import {
  StoryDocs, StoryDocsDescription, StoryDocsH1
} from '../../storybook';

export default {
  title: 'popovers/withTest/Tooltip',
  component: Tooltip,
  decorators: [withDesign],
  argTypes: {
    background: {
      options: ['black', 'white'],
      control: { type: 'select' },
      defaultValue: 'white'
    },
    position: {
      options: [
        'top',
        'right',
        'bottom',
        'left'
      ],
      control: { type: 'select' },
      defaultValue: 'right'
    }
  }
};

export const Demo: Story<ITooltipProps> = (props: ITooltipProps) => {
  return (
    <StoryDocs>
      <StoryDocsH1>Tooltip</StoryDocsH1>
      <StoryDocsDescription>Компонент tooltip</StoryDocsDescription>
      <StoryItem subtitle={`${props.position} ${props.background} tooltip `}>
        <Tooltip {...props}>
          <Button>
            Button
          </Button>
          <div>Tooltip</div>
        </Tooltip>
      </StoryItem>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A15742',
  },
};


export const Playground: Story<ITooltipProps> = (args: ITooltipProps) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Tooltip {...args}>
          <Button>
            Button
          </Button>
          <div>Tooltip</div>
        </Tooltip>
      </StoryRow>
    </StoryContainer>
  );
};
