import Modal from './Modal';
import React, { useState } from 'react';
import { Button } from '../../../index';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';
import StoryCol from '../../storybook/StoryCol';

export default {
  title: 'Modal',
  component: Modal
};

export const modal = () => {
  const [show, toggle] = useState(false);

  const modalFooter = (
    <StoryRow>
      <StoryCol>
        <Button> Согласен </Button>
      </StoryCol>
      <StoryCol>
        <Button buttonType='ghost' onClick={() => toggle(false)}> Отмена </Button>
      </StoryCol>
    </StoryRow>
  );

  return (
    <Story name='Modal (Модальное окно)'>
      <StoryItem description='Модальное окно открывается поверх страницы.'>
        <Button onClick={ () => toggle(true) }>Открыть</Button>
        { show && (
          <Modal onClose={ () => toggle(false) } header='Header' footer={ modalFooter }>
            <div style={ { width: '500px' } }>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur ea laudantium nihil nisi quos
              soluta
              veritatis? Ad aliquid doloribus esse fugiat minus officiis perferendis praesentium, qui quis quos!
              Eligendi
              error exercitationem fuga fugiat illum impedit pariatur placeat quam similique unde. Alias amet aut autem
              dolor hic illum qui sit.
            </div>
          </Modal>
        ) }
      </StoryItem>
    </Story>
  );
};
