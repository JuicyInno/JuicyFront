import React from 'react';
import { Story } from '@storybook/react';

import Chip from './Chip';
import StoryItem from '../../storybook/StoryItem';
import { AllDownload } from '../../../indexNewIcon';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import { withDesign } from 'storybook-addon-designs';
import ControlGroup from '../ControlGroup';


export default {
  title: 'controls/withTest/Chip',
  decorators: [withDesign],
  component: Chip,
  argTypes: {
    icon: { control: null },
    children: { control: null }
  }
};

export const Demo = () => {

  const onRemove = () => {
    console.log('remove');
  };

  const onClick = () => {
    console.log('on click');
  };

  const frameStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    border: '2px dashed lightblue',
    borderRadius: 5,
    padding: 16,
    marginRight: 16
  };

  const elementStyle = { marginBottom: 16 };

  return (
    <StoryDocs>
      <StoryDocsH1>Chips</StoryDocsH1>

      <StoryItem subtitle='Chips 40'>
        <div style={{ display: 'flex' }}>
          <div style={frameStyle}>
            <div style={elementStyle}>
              <Chip disabled size='m' onRemove={onRemove}>Size 40</Chip>
            </div>
            <div style={elementStyle}>
              <Chip type='outline' size='m' onRemove={onRemove}>Size 40</Chip>
            </div>
            <div style={{
              ...elementStyle,
              marginBottom: 0
            }}>
              <Chip type='primary' size='m' onRemove={onRemove}>Size 40</Chip>
            </div>
          </div>

          <div style={frameStyle}>
            <div style={elementStyle}>
              <Chip type='secondary' size='m' icon={<AllDownload />} iconPosition='left' onClick={onClick}>Size 40</Chip>
            </div>
            <div style={elementStyle}>
              <Chip type='outline' size='m' icon={<AllDownload />} iconPosition='left' onClick={onClick}>Size 40</Chip>
            </div>
            <div style={{
              ...elementStyle,
              marginBottom: 0
            }}>
              <Chip type='primary' size='m' icon={<AllDownload />} iconPosition='left' onClick={onClick}>Size 40</Chip>
            </div>
          </div>

          <div style={frameStyle}>
            <div style={elementStyle}>
              <Chip type='secondary' size='m' iconPosition='left' onClick={onClick}>Size 40</Chip>
            </div>
            <div style={elementStyle}>
              <Chip type='outline' size='m' iconPosition='left' onClick={onClick}>Size 40</Chip>
            </div>
            <div style={{
              ...elementStyle,
              marginBottom: 0
            }}>
              <Chip type='primary' size='m' iconPosition='left' onClick={onClick}>Size 40</Chip>
            </div>
          </div>
        </div>
      </StoryItem>

      <StoryItem subtitle='Chips 32'>
        <div style={{ display: 'flex' }}>
          <div style={frameStyle}>
            <div style={elementStyle}>
              <Chip type='secondary' size='s' onRemove={onRemove}>Size 32</Chip>
            </div>
            <div style={elementStyle}>
              <Chip type='outline' size='s' onRemove={onRemove}>Size 32</Chip>
            </div>
            <div style={{
              ...elementStyle,
              marginBottom: 0
            }}>
              <Chip type='primary' size='s' onRemove={onRemove}>Size 32</Chip>
            </div>
          </div>
          <div style={frameStyle}>
            <div style={elementStyle}>
              <Chip type='secondary' size='s' icon={<AllDownload />} iconPosition='left' onClick={onClick}>Size 32</Chip>
            </div>
            <div style={elementStyle}>
              <Chip type='outline' size='s' icon={<AllDownload />} iconPosition='left' onClick={onClick}>Size 32</Chip>
            </div>
            <div style={{
              ...elementStyle,
              marginBottom: 0
            }}>
              <Chip type='primary' size='s' icon={<AllDownload />} iconPosition='left' onClick={onClick}>Size 32</Chip>
            </div>
          </div>

          <div style={frameStyle}>
            <div style={elementStyle}>
              <Chip type='secondary' size='s' onClick={onClick}>Text 32</Chip>
            </div>
            <div style={elementStyle}>
              <Chip type='outline' size='s' onClick={onClick}>Tag text</Chip>
            </div>
            <div style={{
              ...elementStyle,
              marginBottom: 0
            }}>
              <Chip type='primary' size='s' onClick={onClick}>Tag text</Chip>
            </div>
          </div>
        </div>
      </StoryItem>

      <StoryItem subtitle='Chips 24'>
        <div style={{ display: 'flex' }}>
          <div style={frameStyle}>
            <div style={elementStyle}>
              <Chip type='secondary' size='xs' onRemove={onRemove}>Size 24</Chip>
            </div>
            <div style={elementStyle}>
              <Chip type='outline' size='xs' onRemove={onRemove}>Size 24</Chip>
            </div>
            <div style={{
              ...elementStyle,
              marginBottom: 0
            }}>
              <Chip type='primary' size='xs' onRemove={onRemove}>Size 24</Chip>
            </div>
          </div>
          <div style={frameStyle}>
            <div style={elementStyle}>
              <Chip type='secondary' size='xs' icon={<AllDownload />} iconPosition='left' onClick={onClick}>Size 24</Chip>
            </div>
            <div style={elementStyle}>
              <Chip type='outline' size='xs' icon={<AllDownload />} iconPosition='left' onClick={onClick}>Size 24</Chip>
            </div>
            <div style={{
              ...elementStyle,
              marginBottom: 0
            }}>
              <Chip type='primary' size='xs' icon={<AllDownload />} iconPosition='left' onClick={onClick}>Size 24</Chip>
            </div>
          </div>

          <div style={frameStyle}>
            <div style={elementStyle}>
              <Chip type='secondary' size='xs' onClick={onClick}>Text 24</Chip>
            </div>
            <div style={elementStyle}>
              <Chip type='outline' size='xs' onClick={onClick}>Tag text</Chip>
            </div>
            <div style={{
              ...elementStyle,
              marginBottom: 0
            }}>
              <Chip type='primary' size='xs' onClick={onClick}>Tag text</Chip>
            </div>
          </div>
        </div>
      </StoryItem>

      <StoryItem subtitle='Chips max length'>
        <div style={{ display: 'flex' }}>
          <div style={frameStyle}>
            <div style={elementStyle}>
              <Chip type='secondary' size='s' onRemove={onRemove}>The size of the line is greater than 32</Chip>
            </div>
            <div style={elementStyle}>
              <Chip type='outline' size='s' onRemove={onRemove}>The size of the line equals 30</Chip>
            </div>
          </div>
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
          <Chip iconPosition='left' {...args} icon={<AllDownload />} >Chip wit icon</Chip>
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
