import React from 'react';
import Tooltip, { ITooltipProps } from './Tooltip';
import { Story } from '@storybook/react';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { variantsTooltip } from '../../../types';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsDescription
} from '../../storybook';
import './Tooltip.scss';

export default {
  title: 'popovers/withTest/Tooltip',
  component: Tooltip,
  argTypes: {
    size: {
      options: ['m', 'l'],
      control: { type: 'select' },
      defaultValue: 'm'
    },
    position: {
      options: variantsTooltip,
      control: { type: 'select' },
      defaultValue: 'right'
    },
    open: { type: 'boolean', },
    portal: {
      type: 'boolean',
      defaultValue: false
    },
    color: {
      options: ['default', 'white', 'primary'],
      control: { type: 'select' },
      defaultValue: 'default'
    },
    children: { control: null }
  }
};

export const Demo: Story = () => {
  const frameStyle: React.CSSProperties = {
    border: '1px dashed #7B61FF',
    borderRadius: 5,
    marginLeft: '72px',
    marginBottom: '40px',
    padding: '40px 55px 55px 40px',
    maxWidth: '558px',
    height: '219px',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  };

  const largeFrameStyle: React.CSSProperties = {
    border: '1px dashed #7B61FF',
    borderRadius: 5,
    marginLeft: '72px',
    marginBottom: '40px',
    padding: '40px 55px 55px 40px',
    maxWidth: '792px',
    height: '284px',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',

  };

  return (
    <StoryDocs>
      <StoryDocsH1>Tooltip</StoryDocsH1>
      <StoryDocsH2>Основная подсказка</StoryDocsH2>
      <StoryDocsDescription>Выводится при наведении на элемент</StoryDocsDescription>


      <div style={frameStyle}>
        <div style={{
          position: 'absolute',
          top: '73px',
          left: '80px',
        }}>
          <Tooltip open position='top'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '17px',
          left: '205px',

        }}>
          <Tooltip open position='bottom'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '45px',
          left: '375px',
        }}>
          <Tooltip open position='left'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '45px',
          left: '420px',
        }}>
          <Tooltip open position='right'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>

        <div style={{
          position: 'absolute',
          top: '155px',
          left: '80px',
        }}>
          <Tooltip open color='white' position='top'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '100px',
          left: '205px',

        }}>
          <Tooltip open color='white' position='bottom'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '127px',
          left: '375px',
        }}>
          <Tooltip open color='white' position='left'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '127px',
          left: '420px',
        }}>
          <Tooltip open color='white' position='right'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
      </div>

      <div style={largeFrameStyle} >
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '10px'
        }}>
          <Tooltip open color='white' size='l' position='right-start'>
            <div></div>
            <div style={{ width: '280px' }}>
              <p style={{
                color: '#626F84',
                marginBottom: '8px'
              }}>ГБЛ</p>
              <p style={{ marginBottom: '16px' }}>ППиК ГО</p>

              <p style={{
                color: '#626F84',
                marginBottom: '8px'
              }}>Департамент</p>
              <p style={{ marginBottom: '16px' }}>Департамент технологического развития общебанковских систем</p>
              <p style={{
                color: '#626F84',
                marginBottom: '8px'
              }}>Управление</p>
              <p style={{ marginBottom: '16px' }}>Управление автоматизации рабочего пространства и документооборота</p>
            </div>
          </Tooltip>
        </div>

        <div style={{
          position: 'absolute',
          right: '200px',
          bottom: '8px'
        }}>
          <Tooltip open color='white' size='l' position='top'>
            <div></div>
            <div style={{ width: '280px' }}>
              <p style={{
                color: '#626F84',
                marginBottom: '8px'
              }}>ГБЛ</p>
              <p style={{ marginBottom: '16px' }}>ППиК ГО</p>

              <p style={{
                color: '#626F84',
                marginBottom: '8px'
              }}>Департамент</p>
              <p style={{ marginBottom: '16px' }}>Департамент технологического развития общебанковских систем</p>
              <p style={{
                color: '#626F84',
                marginBottom: '8px'
              }}>Управление</p>
              <p style={{ marginBottom: '16px' }}>Управление автоматизации рабочего пространства и документооборота</p>
            </div>
          </Tooltip>
        </div>
      </div>

    </StoryDocs >
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/Проекты-ВТБ-основной?node-id=13613%3A76090',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground = (args: ITooltipProps) => {
  return (
    <StoryContainer>
      <StoryRow>
        <div style={{
          marginLeft: '100px',
          marginTop: '50px'
        }}>
          <Tooltip {...args}>
            <button
              style={{
                padding: '12px 16px',
                background: 'var(--basic-primary)',
                color: 'var(--text-static-white)',
                borderRadius: 8
              }}
            >
              Button
            </button>

            <div>
              <p> Tooltip  </p>
            </div>
          </Tooltip>
        </div>
      </StoryRow>
    </StoryContainer>
  );
};
