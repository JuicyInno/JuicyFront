import React from 'react';
import Tooltip from './Tooltip';
import Button from '../Button';
import StoryRow from '../../storybook/StoryRow';
import StoryCol from '../../storybook/StoryCol';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsDescription
} from '../../storybook';
import './Tooltip.scss';

export default {
  title: 'popovers/не проверено/Tooltip',
  component: Tooltip
};

export const tooltip = () => {

  const frameStyle: React.CSSProperties = {
    border: '1px dashed #7B61FF',
    borderRadius: 5,
    marginLeft: '72px',
    padding: '40px 55px 55px 40px',
    maxWidth: '558px',
    height: '219px',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'
  };


  return (
    <StoryDocs>
      <StoryDocsH1>Tooltip</StoryDocsH1>

      <StoryDocsH2>Подсказка нового функционала</StoryDocsH2>

      <StoryDocsDescription>
        Когда мы хотим подсветить какой-то функционал, мы автоматически выводим синюю подсказку.
        Она выводится один раз, и мы ее можем закрыть по крестику.
      </StoryDocsDescription>

      <StoryRow>
        <StoryCol>
          <div style={{
            marginLeft: '254px',
            height: '48px'
          }} >
            <Tooltip disposable withClosing background='primary' position='left' className='customClass'>
              <div style={{ width: '10px' }}></div>
              <div>Здесь добавляются ваши действия</div>
            </Tooltip>
          </div>
        </StoryCol>
      </StoryRow>

      <StoryDocsH2>Основная подсказка</StoryDocsH2>
      <StoryDocsDescription>Выводится при наведении на элемент</StoryDocsDescription>


      <div style={frameStyle}>
        <div style={{
          position: 'absolute',
          top: '73px',
          left: '80px',
        }}>
          <Tooltip disposable position='top'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '17px',
          left: '205px',

        }}>
          <Tooltip disposable position='bottom'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '45px',
          left: '375px',
        }}>
          <Tooltip disposable position='left'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '45px',
          left: '420px',
        }}>
          <Tooltip disposable position='right'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>

        <div style={{
          position: 'absolute',
          top: '155px',
          left: '80px',
        }}>
          <Tooltip disposable background='white' position='top'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '100px',
          left: '205px',

        }}>
          <Tooltip disposable background='white' position='bottom'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '127px',
          left: '375px',
        }}>
          <Tooltip disposable background='white' position='left'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
        <div style={{
          position: 'absolute',
          top: '127px',
          left: '420px',
        }}>
          <Tooltip disposable background='white' position='right'>
            <div />
            <div>Tooltip</div>
          </Tooltip>
        </div>
      </div>




      <StoryRow >
        <div style={{
          marginTop: '56px',
          marginBottom: '200px'
        }}>
          <Tooltip disposable withClosing background='white'>
            <Button>Hover me</Button>
            <div style={{ width: '414px' }}>
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

      </StoryRow >
    </StoryDocs >
  );
};
