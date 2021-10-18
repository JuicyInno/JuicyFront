import React from 'react';
import Preloader from './Preloader';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'не проверено/Preloader',
  component: Preloader
};

export const preloader = () => {


  return (
    <Story name='Preloader (Загрузка)'>
      <StoryItem description='При ленивой загрузке компонента или получении данных с сервера вместо пустой страницы стоит отображать прелоудер.'>
        <StoryRow>
          <div style={{
            width: '60px',
            height: '60px',
            marginLeft: '20px',
            position: 'relative'
          }}>
            <Preloader size='l' />
          </div>
        </StoryRow>
      </StoryItem>
    </Story>
  );
};
