import React from 'react';

import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import {
  StoryDocs, StoryDocsH1, StoryDocsDescription
} from '../../storybook';

import { Banner, BannerImage } from '.';


export default {
  title: 'components/withTest/Banner',
  component: Banner,
  decorators: [withDesign],
  argTypes: {
    variant: {
      name: 'BannerImage.variant',
      options: [
        'broken-magnifier',
        'close-entrance',
        'default',
        'donut',
        'donut-2',
        'empty',
        'ghost',
        'magnifier-folder',
        'magnifier-not-available',
        'magnifier-zero',
        'not-available',
        'notifications',
        'settings',
        'work'
      ],
      control: { type: 'select' },
      defaultValue: 'default'
    },
    heading: { defaultValue: 'Заголовок' },
    subheading: { defaultValue: 'Описание' },
    primaryText: { defaultValue: 'Button 40' },
    secondaryText: { defaultValue: 'Button 40' },
    icon: { control: false }
  }
};

export const Demo: Story = ({ variant, ...args }) => {
  return (
    <StoryDocs>
      <StoryDocsH1>Banner</StoryDocsH1>
      <StoryDocsDescription>
        Компонент для отображения различных состояний страницы.
      </StoryDocsDescription>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start'
      }}>
        <Banner {...args} icon={<BannerImage variant={variant} />}/>
      </div>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Ui-Home-for-Story-Book?node-id=3010%3A41467',
  },
};
