import React from 'react';

import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Banner } from './Banner';

export default {
  title: 'components/withTest/Banner',
  component: Banner,
  decorators: [withDesign],
  argTypes: {
    heading: { defaultValue: 'Заголовок' },
    subheading: { defaultValue: 'Описание' },
    primaryText: { defaultValue: 'Основное' },
    secondaryText: { defaultValue: 'Второстепенное' }
  }
};

export const Demo: Story = (args) => {
  return (
    <Banner {...args}/>
  );
};
