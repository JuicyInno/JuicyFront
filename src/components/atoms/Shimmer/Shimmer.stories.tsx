import React from 'react';
import { Story } from '@storybook/react';

import StoryContainer from '../../storybook/Story';
import { StoryDocsH1, StoryDocsH2 } from '../../storybook';
import StoryRow from '../../storybook/StoryRow';
import Shimmer from './Shimmer';
import Tile from '../Tile';

export default {
  title: 'components/withTest/Shimmer',
  component: Shimmer,
  argTypes: {}
};

export const Demo: Story = () => {
  return (
    <StoryContainer>
      <StoryDocsH1>Shimmer</StoryDocsH1>

      <StoryDocsH2>Цвета</StoryDocsH2>

      <p style={{ marginBottom: '10px' }}>theme='light'</p>
      <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '20px'
      }}>
        <Shimmer variant='title' />
        <Shimmer variant='text' />
        <Shimmer variant='avatar-title' />
        <Shimmer variant='text' />
      </div>

      <p style={{ marginBottom: '10px' }}>theme='dark'</p>
      <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        <Shimmer theme='dark' variant='title' />
        <Shimmer theme='dark' variant='text' />
        <Shimmer theme='dark' variant='avatar-title' />
        <Shimmer theme='dark' variant='text' />
      </div>

      <StoryDocsH2>Варианты</StoryDocsH2>

      <p style={{ marginBottom: '10px' }}>variant='title'</p>
      <div style={{ marginBottom: '20px' }}>
        <Shimmer variant='title' />
      </div>

      <p style={{ marginBottom: '10px' }}>variant='text'</p>
      <div style={{ marginBottom: '20px' }}>
        <Shimmer variant='text' />
      </div>

      <p style={{ marginBottom: '10px' }}>variant='avatar'</p>
      <div style={{ marginBottom: '20px' }}>
        <Shimmer variant='avatar' />
      </div>

      <p style={{ marginBottom: '10px' }}>variant='avatar-title'</p>
      <div style={{ marginBottom: '20px' }}>
        <Shimmer variant='avatar-title' />
      </div>

      <p style={{ marginBottom: '10px' }}>variant='image'</p>
      <div style={{ marginBottom: '20px' }}>
        <Shimmer variant='image' />
      </div>

      <StoryDocsH2>Примеры использования</StoryDocsH2>

      <Tile>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {new Array(3).fill('').map((_, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 33%'
            }}>
              <Shimmer variant='image' width='100%' style={{ marginBottom: '16px' }} />
              <Shimmer variant='title' style={{ marginBottom: '8px' }} />
              <Shimmer variant='text' />
            </div>
          ))}
        </div>
      </Tile>

      <div style={{ marginTop: '40px' }}>
        <Shimmer variant='title' width='320px' style={{ marginBottom: '44px' }} />

        {new Array(3).fill('').map((_, index) => (
          <div key={index} style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            marginBottom: '20px',
            gap: '32px'
          }}>
            <div style={{ display: 'flex' }}>
              <Shimmer variant='avatar' style={{ marginRight: '32px' }} />

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
              }}>
                <Shimmer variant='title' style={{ marginBottom: '6px' }} />
                <Shimmer variant='text' />
              </div>
            </div>
            <Shimmer variant='title' />
            <Shimmer variant='title' />
            <Shimmer variant='title' />
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px'
      }}>
        {new Array(2).fill('').map((_, index) => (
          <div
            key={index}
            // eslint-disable-next-line max-len
            style={{
              boxShadow: '0px 42px 71px rgba(12, 15, 16, 0.04), 0px 17.5466px 29.6621px rgba(12, 15, 16, 0.0287542), 0px 9.38125px 15.8588px rgba(12, 15, 16, 0.0238443), 0px 5.25905px 8.8903px rgba(12, 15, 16, 0.02), 0px 2.79304px 4.72157px rgba(12, 15, 16, 0.0161557), 0px 1.16225px 1.96475px rgba(12, 15, 16, 0.0112458)',
              borderRadius: '20px',
              border: '1px solid #F1F2F4',
              overflow: 'hidden'
            }}
          >
            <Shimmer variant='image' theme='dark' width='100%' style={{ borderRadius: '0px' }} />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '16px'
            }}>
              <Shimmer variant='title' style={{ marginBottom: '8px' }} />
              <Shimmer variant='text' />
            </div>
          </div>
        ))}
      </div>
    </StoryContainer>
  );
};

export const Playground: Story = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Shimmer {...args} />
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Ui-Home-for-Story-Book?node-id=3196%3A85442',
  },
};
