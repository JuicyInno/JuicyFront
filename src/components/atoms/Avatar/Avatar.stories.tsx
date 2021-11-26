import React from 'react';
import { Story } from '@storybook/react';
import Avatar, { IAvatarProps } from './Avatar';
import Tooltip from '../Tooltip';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsDescription
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { usersMocks } from '../../popups/FindUsers/users.mocks';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'components/withTest/Avatar',
  component: Avatar,
  decorators: [withDesign],
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
        'xxxl',
        'xxxxl'
      ],
      control: { type: 'select' },
      defaultValue: 'm'
    },
    photo: { type: 'string' },
    fullName: { type: 'string' },
    backgroundColor: {
      options: [
        'default',
        'white',
        'grey',
        'black'
      ],
      control: { type: 'select' },
      defaultValue: 'default'
    },
    hasIcon: { type: 'boolean' },
  }
};

const sizes = [
  'xxs',
  'xs',
  's',
  'm',
  'l',
  'xl',
  'xxl',
  'xxxl',
  'xxxxl'
];

export const Demo: Story = () => {

  return (
    <StoryDocs>
      <StoryDocsH1>Avatars</StoryDocsH1>
      <StoryDocsH2>Main component</StoryDocsH2>
      <StoryDocsDescription>Основной компонент, который используется в макетах</StoryDocsDescription>
      <div style={{
        display: 'flex',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 30,
          left: -15,
          width: 725,
          height: 115,
          border: '1px dashed #8A96A8',
          borderRadius: 5
        }} />
        {sizes.map((size: any) =>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 32
          }}>
            <div style={{
              fontSize: 12,
              marginBottom: 32,
              fontFamily: 'VTB Group UI',
              lineHeight: '16px',
              textAlign: 'center',
              color: '#626F84'
            }}>{size}</div>
            <div><Avatar fullName='K M' size={size} hasIcon /></div>
          </div>)
        }
      </div>
      <StoryDocsH2>Source</StoryDocsH2>
      <StoryDocsDescription>Компоненты, которые переключаются внутри основного компонента</StoryDocsDescription>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' photo={usersMocks[0].photo} /></div>
        <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' hasIcon /></div>
        <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' backgroundColor='white' /></div>
        <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' /></div>
        <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' backgroundColor='grey' /></div>
        <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' backgroundColor='black' /></div>
      </div>
      <StoryDocsH2>Scale text</StoryDocsH2>
      <StoryDocsDescription>
        Допускается использование одной или двух букв для обозначения пользователя (в размере XXS, XS только одна буква).
      </StoryDocsDescription>
      <div style={{
        display: 'flex',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 30,
          left: -15,
          width: 725,
          height: 115,
          border: '1px dashed #8A96A8',
          borderRadius: 5
        }} />
        {sizes.map((size: any) =>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 32
          }}>
            <div style={{
              fontSize: 12,
              marginBottom: 32,
              fontFamily: 'VTB Group UI',
              lineHeight: '16px',
              textAlign: 'center',
              color: '#626F84'
            }}>{size}</div>
            <div><Avatar fullName='Н С' size={size} /></div>
          </div>)
        }
      </div>
      <StoryDocsH2>Hover</StoryDocsH2>
      <StoryDocsDescription>При ховере под аватаром показывается Tooltip с именем пользователя.</StoryDocsDescription>
      <Tooltip position='bottom'>
        <Avatar hasIcon />
        <div>Андрей Борисов</div>
      </Tooltip>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=3%3A342',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: IAvatarProps) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Avatar { ...args }>
        </Avatar>
      </StoryRow>
    </StoryContainer>
  );
};
