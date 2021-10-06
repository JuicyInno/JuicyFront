import Menu, { MenuContext, IListProps } from './Menu';
import React from 'react';
import { IListElement, IMenuContext } from '../../../types';
import { Button } from '../../../index';
import Story from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import StoryCol from '../../storybook/StoryCol';
import StoryItem from '../../storybook/StoryItem';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    children: { control: null },
    list: { control: null },
    content: { control: null },
    className: { control: null },
    position: { control: null },
    relativeBlock: { control: null }
  }
};

export const menu = ({ portal }: IListProps) => {
  const list: IListElement[] = [
    {
      value: '1',
      label: 'Значение 1',
      url: '/test'
    },
    {
      value: '2',
      label: 'Значение 2'
    },
    {
      value: '3',
      label: 'Неактивное значение 3',
      disabled: true
    },
    {
      value: '4',
      label: 'Значение 4',
      separated: true
    },
    {
      value: '5',
      label: 'Значение 5'
    },
    {
      value: '6',
      label: 'Значение 6',
      separated: true
    }
  ];

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
      <Story name='Menu (Меню 🙄)'>
        <StoryItem description='Выпадающий список с действиями'>
          <StoryRow>
            <StoryCol>
              <Menu list={list} position='right' portal={portal}>
                <Button buttonType='secondary'>
                  Правое меню слева
                </Button>
              </Menu>
            </StoryCol>

            <StoryCol>
              <Menu list={list} portal={portal}>
                <Button buttonType='secondary'>
                  Левое меню
                </Button>
              </Menu>
            </StoryCol>

            <StoryCol>
              <Menu position='right' list={list} portal={portal}>
                <Button buttonType='secondary'>
                  Правое меню
                </Button>
              </Menu>
            </StoryCol>
            <StoryCol>
              <Menu list={list} position='top-right' portal={portal}>
                <Button buttonType='secondary'>
                  Верхнее меню
                </Button>
              </Menu>
            </StoryCol>
            <StoryCol>
              <Menu list={list} position='left' portal={portal}>
                <Button buttonType='secondary'>
                  Левое меню справа
                </Button>
              </Menu>
            </StoryCol>
          </StoryRow>
        </StoryItem>
        <StoryItem description='Выпадающий список с произвольным контентом'>
          <StoryRow>
            <StoryCol>
              <Menu position='right' content={content} portal={portal}>
                <Button buttonType='secondary'>
                  Тут контент 😏
                </Button>
              </Menu>
            </StoryCol>
          </StoryRow>
          <div style={{ height: '300px' }}></div>
          <StoryRow>
            <StoryCol>
              <Menu list={list} position='top-left' portal={portal}>
                <Button buttonType='secondary'>
                top-left
                </Button>
              </Menu>
            </StoryCol>
            <StoryCol>
              <Menu list={list} position='top-right' portal={portal}>
                <Button buttonType='secondary'>
                top-right
                </Button>
              </Menu>
            </StoryCol>
            <StoryCol>
              <Menu list={list} position='top-left' content={content} portal={portal}>
                <Button buttonType='secondary'>
                top-left custom content
                </Button>
              </Menu>
            </StoryCol>
            <StoryCol>
              <Menu list={list} position='left' portal={portal}>
                <Button buttonType='secondary'>
                  Левое меню
                </Button>
              </Menu>
            </StoryCol>
          </StoryRow>
        </StoryItem>
      </Story>
    </BrowserRouter>
  );
};
