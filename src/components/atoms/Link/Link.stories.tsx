import { Link } from './Link';

import React from 'react';

import { Story } from '@storybook/react';
import { StoryDocs, StoryDocsH1 } from '../../storybook';

import { AllIconPlace } from '../../../indexIcon';

export default {
  title: 'controls/withTest/Link',
  component: Link,
  argTypes: {
    component: { control: { disable: true } },
    children: {
      control: { type: 'text' },
      defaultValue: 'Ссылка'
    },
    startAdornment: { control: { disable: true } },
    endAdornment: { control: { disable: true } }
  }
};

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>Link</StoryDocsH1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '8px'
      }}>
        <Link
          startAdornment={<AllIconPlace size='xs' />}
          endAdornment={<AllIconPlace size='xs' />}
          href='#'
        >
          Ссылка
        </Link>
        <Link
          startAdornment={<AllIconPlace size='xs' />}
          endAdornment={<AllIconPlace size='xs' />}
          href='#'
          color='secondary'
        >
          Ссылка
        </Link>
        <Link
          component='button'
          startAdornment={<AllIconPlace size='xs' />}
          endAdornment={<AllIconPlace size='xs' />}
          disabled
        >
          Ссылка
        </Link>

        <Link
          startAdornment={<AllIconPlace size='xxs' />}
          endAdornment={<AllIconPlace size='xxs' />}
          href='#'
          size='sm'
        >
          Ссылка
        </Link>
        <Link
          startAdornment={<AllIconPlace size='xxs' />}
          endAdornment={<AllIconPlace size='xxs' />}
          href='#'
          color='secondary'
          size='sm'
        >
          Ссылка
        </Link>
        <Link
          component='button'
          startAdornment={<AllIconPlace size='xxs' />}
          endAdornment={<AllIconPlace size='xxs' />}
          disabled
          size='sm'
        >
          Ссылка
        </Link>
      </div>
    </StoryDocs>
  );
};

export const Playground: Story = (args) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '8px'
    }}>
      <Link
        {...args}
        startAdornment={<AllIconPlace size={args.size === 'sm' ? 'xxs' : 'xs'} />}
        endAdornment={<AllIconPlace size={args.size === 'sm' ? 'xxs' : 'xs'} />}
        href='#'
      />
      <Link
        {...args}
        component='button'
        startAdornment={<AllIconPlace size={args.size === 'sm' ? 'xxs' : 'xs'} />}
        endAdornment={<AllIconPlace size={args.size === 'sm' ? 'xxs' : 'xs'} />}
      />
      <Link
        {...args}
        component='button'
        startAdornment={<AllIconPlace size={args.size === 'sm' ? 'xxs' : 'xs'} />}
        endAdornment={<AllIconPlace size={args.size === 'sm' ? 'xxs' : 'xs'} />}
        disabled
      />
    </div>
  );
};
