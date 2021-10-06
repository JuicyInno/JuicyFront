import React from 'react';
import Hint, { IHintProps } from './Hint';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import Button from '../Button';
import { variantsClassic } from '../../../types';


export default {
  title: 'Hint',
  component: Hint,
  argTypes: {
    icon: {
      control: 'radio',
      defaultValue: 'info'
    },
    className: { table: { disable: true } },
    children: {
      control: 'text',
      defaultValue: 'Cамый длинный предлинный тект Cамый длинный предлинный тект Cамый длинный предлинный тект' +
        'Cамый длинный предлинный тект Cамый длинный предлинный тект Cамый длинный предлинный тект'
    },
    title: {
      control: 'text',
      defaultValue: 'Название'
    },
    button: { table: { disable: true } },
    variant: {
      options: variantsClassic,
      control: { type: 'radio' },
      defaultValue: 'default'
    },
    maxWidth: {
      control: 'text',
      defaultValue: '648px'
    }

  }
};

export const hint = (args: IHintProps) => {

  return (
    <Story name='Hint' description='Общее уведомление'>
      <StoryItem subtitle='Простое уведомление'>
        <Hint variant={ args.variant }
          maxWidth={ args.maxWidth } showLine
          title={ args.title } button={ undefined }>
          { args.children }
        </Hint>
      </StoryItem>
      <StoryItem subtitle='Простое уведомление c иконкой'>
        <Hint variant={ args.variant }
          icon={ args.icon }
          maxWidth={ args.maxWidth }
          title={ args.title } button={ undefined }>
          { args.children }
        </Hint>
      </StoryItem>
      <StoryItem subtitle='Простое уведомление c кнопкой'>
        <Hint variant={ args.variant }
          icon={ args.icon }
          maxWidth={ args.maxWidth }
          title={ args.title }
          button={ <Button buttonType='text' textColor='green'>Нажми меня</Button> }>
          { args.children }
        </Hint>
      </StoryItem>
    </Story>
  );
};
