import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import Modal from './Modal';
import { Button } from '../../../index';
import StoryContainer from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryCol from '../../storybook/StoryCol';
import StoryRow from '../../storybook/StoryRow';
import { StoryDocs, StoryDocsH1 } from '../../storybook';

export default {
  title: 'atoms/withTest/Modal',
  component: Modal,
  decorators: [withDesign],
  argTypes: {
    header: { control: null },
    footer: { control: null },
    children: { control: null }
  }
};

const ModalFooter = ({ toggle }) => (
  <StoryRow>
    <StoryCol>
      <Button> Согласен </Button>
    </StoryCol>
    <StoryCol>
      <Button buttonType='ghost' onClick={() => toggle(false)}> Отмена </Button>
    </StoryCol>
  </StoryRow>
);

export const Demo = () => {
  const [show, toggle] = useState(false);

  return (
    <StoryDocs>
      <StoryDocsH1>Modal</StoryDocsH1>

      <StoryItem description='Модальное окно открывается поверх страницы.'>
        <Button onClick={ () => toggle(true) }>Открыть</Button>

        { show && (
          <Modal onClose={ () => toggle(false) } header='Header' footer={ <ModalFooter toggle={toggle} /> }>
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
    </StoryDocs>
  );
};


export const Playground: Story = (args) => {
  const [show, toggle] = useState(false);

  return (
    <StoryContainer>
      <StoryItem description='Модальное окно открывается поверх страницы.'>
        <Button onClick={ () => toggle(true) }>Открыть</Button>

        { show && (
          <Modal {...args} header='Header' footer={ <ModalFooter toggle={toggle} /> } onClose={ () => toggle(false) }>
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
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18262%3A231290',
  },
};
