import React from 'react';
import Tooltip from './Tooltip';
import Button from '../Button';
import Story from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import StoryCol from '../../storybook/StoryCol';
import StoryItem from '../../storybook/StoryItem';

export default {
  title: 'popovers/не проверено/Tooltip',
  component: Tooltip
};

export const tooltip = () => {
  return (
    <Story name='Tooltip (Подсказка)'>
      <StoryItem description='Подсказка при наведении на элемент.'>
        <StoryRow>
          <StoryCol>
            <Tooltip background='default'>
              <Button>Hover right</Button>
              <div>Tooltip text</div>
            </Tooltip>
          </StoryCol>

          <StoryCol>
            <Tooltip background='white' position='left'>
              <Button>Hover left</Button>
              <div>Tooltip text</div>
            </Tooltip>
          </StoryCol>
        </StoryRow>

        <StoryRow>
          <StoryCol>
            <Tooltip background='white' position='bottom'>
              <Button>Hover bottom</Button>
              <div>Tooltip text</div>
            </Tooltip>
          </StoryCol>

          <StoryCol>
            <Tooltip background='default' position='top'>
              <Button>Hover top</Button>
              <div>Tooltip text</div>
            </Tooltip>
          </StoryCol>
        </StoryRow>
      </StoryItem>

      <StoryItem description='В некоторых случаях подсказку нужно отображать на уровне body. Для этого существует свойство portal.'>
        <Tooltip portal>
          <Button>Hover me</Button>
          <div>Эта подсказка лежит в body </div>
        </Tooltip>
      </StoryItem>
    </Story>
  );
};
