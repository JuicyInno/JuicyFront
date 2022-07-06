import React from 'react';
import { Story } from '@storybook/react';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsDescription
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { withDesign } from 'storybook-addon-designs';
import AvatarStatus from './AvatarStatus';
import { usersMocks } from '../../popups/FindUsers/users.mocks';
import { AllUser } from '../../../indexIcon';

export default {
  title: 'components/withTest/AvatarStatus',
  component: AvatarStatus,
  decorators: [withDesign],
  argTypes: {
    variant: {
      options: [
        'blue',
        'green',
        'default',
        'yellow',
        'red',
        'white'
      ],
      control: { type: 'select' }
    },
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
    icon: { control: false },
    type: {
      options: [
        'online',
        'icon',
        'decline',
        'load',
        'in',
        'out',
        'vacation',
        'birthday',
        'disease',
        'businessTrip',
        'remoteWork',
        'decree',
        'boss',
        'edit'
      ],
      control: { type: 'select' },
      defaultValue: 'online'
    },
    stickerSize: ['s', 'm', 'l'],
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

const variants = [
  {
    variant: 'green',
    status: 'icon',
    title: 'Done'
  },
  {
    variant: 'blue',
    status: 'icon',
    title: 'You'
  },
  {
    variant: 'default',
    status: 'icon',
    title: 'Next'
  },
  {
    variant: 'yellow',
    status: 'load',
    title: 'On completion'
  },
  {
    variant: 'red',
    status: 'decline',
    title: 'Decline'
  }
];

const scale = sizes.map((size: any) =>
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
    <div><AvatarStatus type='online' size={size} icon={AllUser} /></div>
  </div>);

const getStatusesWithSticker = (hasSticker = true) => {
  const statusesWithSticker = variants.map((variant: any) =>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: 32
    }}>
      <div style={{
        fontSize: 12,
        marginBottom: 32,
        fontFamily: 'VTB Group UI',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#626F84'
      }}>{variant.title}</div>
      <div style={{ marginBottom: 40 }}>
        <AvatarStatus
          variant={variant.variant}
          size='l'
          type={variant.status}
          photo={usersMocks[0].photo}
        />
      </div>
      <AvatarStatus
        variant={variant.variant}
        size='l'
        photo={usersMocks[0].photo}
      />

    </div>);
  return statusesWithSticker;
};


export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>Avatar Status</StoryDocsH1>
      <StoryDocsDescription>Дополнительный компонент который исполюзуется в истории виджет</StoryDocsDescription>
      <div style={{ display: 'flex' }}>
        {getStatusesWithSticker()}
      </div>
      <StoryDocsH2>Scale sticker</StoryDocsH2>
      <StoryDocsDescription>Используется с компонентом статус</StoryDocsDescription>
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
        {scale}
      </div>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A1347',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <AvatarStatus { ...args } />
      </StoryRow>
    </StoryContainer>
  );
};
