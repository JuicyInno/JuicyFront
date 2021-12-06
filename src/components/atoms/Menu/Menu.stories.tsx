import Menu, { MenuContext } from './Menu';
import React from 'react';
import { Story } from '@storybook/react';

import { IMenuContext } from '../../../types';
import { Button } from '../../../index';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import StoryCol from '../../storybook/StoryCol';
import StoryItem from '../../storybook/StoryItem';
import { BrowserRouter } from 'react-router-dom';
import { _listMenu, _listMenuWithTile } from './mock';

export default {
  title: 'controls/withTest/Menu',
  component: Menu,
  argTypes: {
    children: { control: null },
    list: { control: null },
    content: { control: null },
    className: { control: null },
    relativeBlock: { control: null },
    anchorElement: { control: null },
  }
};

export const Demo = () => {
  const content = (
    <MenuContext.Consumer>
      {({ onClose }: IMenuContext) => (
        <div style={{ padding: '16px 24px' }}>
          <h3>Кто ты сегодня?</h3>
          <p style={{
            marginTop: '8px',
            color: '#333',
            whiteSpace: 'nowrap'
          }}>Кнут-Моррис-Пратт</p>
          <p style={{
            marginTop: '8px',
            color: '#333',
            whiteSpace: 'nowrap'
          }}>Кнут-Моррис-Пряник</p>
          <p style={{
            marginTop: '8px',
            color: '#333',
            whiteSpace: 'nowrap'
          }}>Кнут-Борис-Петрович</p>
          <div style={{ marginTop: '16px' }}>
            <Button onClick={onClose}>Понятно</Button>
          </div>
        </div>
      )}
    </MenuContext.Consumer>
  );

  return (
    <BrowserRouter>
      <StoryContainer name='Menu (Меню 🙄)'>
        <StoryItem description='Выпадающий список с действиями'>
          <StoryRow>
            <StoryCol>
              <Menu list={_listMenu} position='right'>
                <Button buttonType='secondary'>
                  Правое меню слева
                </Button>
              </Menu>
            </StoryCol>

            <StoryCol>
              <Menu list={_listMenu}>
                <Button buttonType='secondary'>
                  Левое меню
                </Button>
              </Menu>
            </StoryCol>

            <StoryCol>
              <Menu position='right' list={_listMenu}>
                <Button buttonType='secondary'>
                  Правое меню
                </Button>
              </Menu>
            </StoryCol>
            <StoryCol>
              <Menu list={_listMenu} position='top-right'>
                <Button buttonType='secondary'>
                  Верхнее меню
                </Button>
              </Menu>
            </StoryCol>
            <StoryCol>
              <Menu list={_listMenu} position='left'>
                <Button buttonType='secondary'>
                  Левое меню справа
                </Button>
              </Menu>
            </StoryCol>
          </StoryRow>
        </StoryItem>
        <StoryItem description='Выпадающий список с произвольным контентом в портале'>
          <StoryRow>
            <StoryCol>
              <Menu position='right' content={content}>
                <Button buttonType='secondary'>
                  Тут контент 😏
                </Button>
              </Menu>
            </StoryCol>
          </StoryRow>

          <StoryRow>
            <StoryCol>
              <Menu position='right' list={_listMenuWithTile}>
                <Button buttonType='secondary'>
                  Меню с заголовком
                </Button>
              </Menu>
            </StoryCol>
          </StoryRow>

          <div style={{ height: '300px' }}></div>
          <StoryRow>
            <StoryCol>
              <Menu list={_listMenu} position='top-left' >
                <Button buttonType='secondary'>
                top-left
                </Button>
              </Menu>
            </StoryCol>
            <StoryCol>
              <Menu list={_listMenu} position='top-right' >
                <Button buttonType='secondary'>
                top-right
                </Button>
              </Menu>
            </StoryCol>
            <StoryCol>
              <Menu list={_listMenu} position='top-left' content={content}>
                <Button buttonType='secondary'>
                  top-left custom content
                </Button>
              </Menu>
            </StoryCol>
            <StoryCol>
              <Menu list={_listMenu} position='left'>
                <Button buttonType='secondary'>
                  Левое меню
                </Button>
              </Menu>
            </StoryCol>
          </StoryRow>
        </StoryItem>
      </StoryContainer>
    </BrowserRouter>
  );
};

export const Playground: Story = (args) => {
  return (
    <BrowserRouter>
      <StoryContainer>
        <div style={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
        }}>
          <div style={{ margin: 'auto' }}>
            <Menu list={_listMenu} {...args}>
              <Button buttonType='secondary'>
                Меню
              </Button>
            </Menu>
          </div>

        </div>

      </StoryContainer>
    </BrowserRouter>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A15727',
  },
};
