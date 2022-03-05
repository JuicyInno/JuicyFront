import React from 'react';

import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';
import StoryContainer from '../../storybook/Story';

import { AllDownload } from '../../../indexIcon';

import Chip from './Chip';
import ControlGroup from '../ControlGroup';


export default {
  title: 'controls/withTest/Chip',
  decorators: [withDesign],
  component: Chip,
  argTypes: {
    icon: { control: null },
    children: { control: null },
    badge: { control: null }
  }
};

export const Demo = () => {

  const onRemove = () => {
    console.log('remove');
  };

  const onClick = () => {
    console.log('on click');
  };

  const getChips = (size: 's' | 'xs') => (
    <>
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px'
      }}>
        <Chip type='outline' size={size} onRemove={onRemove}>Size 32</Chip>
        <Chip type='primary' size={size} onRemove={onRemove}>Size 32</Chip>
        <Chip type='secondary' size={size} onRemove={onRemove}>Size 32</Chip>
        <Chip type='fill' size={size} onRemove={onRemove}>Size 32</Chip>
      </div>

      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px'
      }}>
        <Chip type='outline' size={size} icon={<AllDownload size={size === 's' ? 'xxs' : 'xxxs'} />} onClick={onClick}>Size 32</Chip>
        <Chip type='primary' size={size} icon={<AllDownload size={size === 's' ? 'xxs' : 'xxxs'} />} onClick={onClick}>Size 32</Chip>
        <Chip type='secondary' size={size} icon={<AllDownload size={size === 's' ? 'xxs' : 'xxxs'} />} onClick={onClick}>Size 32</Chip>
        <Chip type='fill' size={size} icon={<AllDownload size={size === 's' ? 'xxs' : 'xxxs'} />} onClick={onClick}>Size 32</Chip>
      </div>

      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px'
      }}>
        <Chip type='outline' size={size} onClick={onClick}>Tag text</Chip>
        <Chip type='primary' size={size} onClick={onClick}>Tag text</Chip>
        <Chip type='secondary' size={size} onClick={onClick}>Text 32</Chip>
        <Chip type='fill' size={size} onClick={onClick}>Text 32</Chip>
      </div>

      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px'
      }}>
        <Chip type='outline' size={size} onClick={onClick} badge='5'>Tag text</Chip>
        <Chip type='primary' size={size} onClick={onClick} badge='5'>Tag text</Chip>
        <Chip type='secondary' size={size} onClick={onClick} badge='5'>Text 32</Chip>
        <Chip type='fill' size={size} onClick={onClick} badge='5'>Text 32</Chip>
      </div>

      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px'
      }}>
        <Chip type='outline' size={size} icon={<AllDownload size={size === 's' ? 'xxs' : 'xxxs'} />} disabled>Size 32</Chip>
        <Chip type='primary' size={size} icon={<AllDownload size={size === 's' ? 'xxs' : 'xxxs'} />} disabled>Size 32</Chip>
        <Chip type='secondary' size={size} icon={<AllDownload size={size === 's' ? 'xxs' : 'xxxs'} />} disabled>Size 32</Chip>
        <Chip type='fill' size={size} icon={<AllDownload size={size === 's' ? 'xxs' : 'xxxs'} />} disabled>Size 32</Chip>
      </div>

      <div style={{
        display: 'flex',
        gap: '8px'
      }}>
        <Chip type='outline' size={size} badge='5' disabled>Size 32</Chip>
        <Chip type='primary' size={size} badge='5' disabled>Size 32</Chip>
        <Chip type='secondary' size={size} badge='5' disabled>Size 32</Chip>
        <Chip type='fill' size={size} badge='5' disabled>Size 32</Chip>
      </div>
    </>
  );

  return (
    <StoryDocs>
      <StoryDocsH1>Chips</StoryDocsH1>

      <StoryItem subtitle='Chips 32'>
        {getChips('s')}
      </StoryItem>

      <StoryItem subtitle='Chips 24'>
        {getChips('xs')}
      </StoryItem>

      <StoryItem subtitle='Chips max length'>
        <div style={{
          display: 'flex',
          gap: '8px'
        }}>
          <Chip type='secondary' size='s' onRemove={onRemove}>The size of the line is greater than 32</Chip>
          <Chip type='outline' size='s' onRemove={onRemove}>The size of the line equals 30</Chip>
        </div>
      </StoryItem>
    </StoryDocs>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <ControlGroup>
          <Chip {...args}>Chip</Chip>
          <Chip iconPosition='left' {...args} icon={<AllDownload size={args.size === 'xs' ? 'xxxs' : 'xxs'}/>} >Chip with icon</Chip>
          <Chip {...args} badge='42' onRemove={undefined}>Chip with badge</Chip>
        </ControlGroup>
      </StoryRow>
    </StoryContainer>
  );
};
/* eslint-disable max-len */
Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18262%3A231296',
  },
};
