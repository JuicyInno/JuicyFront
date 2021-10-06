import React from 'react';
import Tag from './Tag';

import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

import Placeholder16 from '../../../assets/icons/Placeholder16';


export default {
  title: 'Tag',
  component: Tag,
  argTypes: { icon: { control: null } }
};

export const Demo = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>Tag</StoryDocsH1>
      <div style={{
        display: 'grid',
        gap: 16,
        justifyItems: 'flex-start'
      }}>
        <Tag variant='yellow'>Отпуск</Tag>
        <Tag variant='green'>Подбор</Tag>
        <Tag variant='grey'>+2</Tag>
        <Tag variant='purple'>Увольнение</Tag>
        <Tag variant='red'>Отклонено</Tag>
        <Tag variant='magenta'>Декрет</Tag>
        <Tag onRemove={() => {}}>Москва</Tag>
        <Tag variant='blue' outlined onRemove={() => {}}>Москва</Tag>
        <Tag icon={<Placeholder16 />}>Москва</Tag>
        <Tag variant='blue' outlined icon={<Placeholder16 />}>Москва</Tag>
      </div>
    </StoryDocs>
  );
};

Demo.parameters = {
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Tag {...args} onRemove={undefined}>Вариант</Tag>
      </StoryRow>
      <StoryRow>
        <Tag {...args}>Вариант</Tag>
      </StoryRow>
      <StoryRow>
        <Tag {...args} icon={<Placeholder16 />} onRemove={undefined}>Вариант</Tag>
      </StoryRow>
      <StoryRow>
        <Tag {...args} icon={<Placeholder16 />}>Вариант</Tag>
      </StoryRow>
    </StoryContainer>
  );
};
