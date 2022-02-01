import React from 'react';

import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import {
  StoryDocs, StoryDocsH1, StoryDocsDescription
} from '../../storybook';

import { Banner, BannerImage } from '.';

import BrokenMagnifier from '../../../assets/illustrations/broken-magnifier.png';
import CloseEntrance from '../../../assets/illustrations/close-entrance.png';
import Default from '../../../assets/illustrations/default.png';
import Donut from '../../../assets/illustrations/donut.png';
import Donut2 from '../../../assets/illustrations/donut-2.png';
import Empty from '../../../assets/illustrations/empty.png';
import Ghost from '../../../assets/illustrations/ghost.png';
import MagnifierFolder from '../../../assets/illustrations/magnifier-folder.png';
import MagnifierNotAvailable from '../../../assets/illustrations/magnifier-not-available.png';
import MagnifierZero from '../../../assets/illustrations/magnifier-zero.png';
import NotAvailable from '../../../assets/illustrations/not-available.png';
import Notifications from '../../../assets/illustrations/notifications.png';
import Settings from '../../../assets/illustrations/settings.png';
import Work from '../../../assets/illustrations/work.png';

const ICONS = {
  BrokenMagnifier,
  CloseEntrance,
  Default,
  Donut,
  Donut2,
  Empty,
  Ghost,
  MagnifierFolder,
  MagnifierNotAvailable,
  MagnifierZero,
  NotAvailable,
  Notifications,
  Settings,
  Work
};

export default {
  title: 'components/withTest/Banner',
  component: Banner,
  decorators: [withDesign],
  argTypes: {
    icon: {
      options: Object.keys(ICONS),
      control: { type: 'select' },
      defaultValue: 'Default'
    },
    heading: { defaultValue: 'Заголовок' },
    subheading: { defaultValue: 'Описание' },
    primaryText: { defaultValue: 'Button 40' },
    secondaryText: { defaultValue: 'Button 40' }
  }
};

export const Demo: Story = ({ icon, ...args }) => {
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
        <Banner {...args} icon={<BannerImage src={ICONS[icon]} />}/>
      </div>
    </StoryDocs>
  );
};
