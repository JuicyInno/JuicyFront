import React from 'react';
import { Story } from '@storybook/react';
import AvatarStack from './AvatarStack';
import {
  StoryDocs, StoryDocsH1, StoryDocsDescription
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { withDesign } from 'storybook-addon-designs';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

export default {
  title: 'components/withTest/AvatarStack',
  component: AvatarStack,
  decorators: [withDesign],
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
        'xxxl',
        'xxxxl'
      ],
      control: { type: 'select' },
      defaultValue: 'm'
    }
  }
};

export const Demo: Story = () => {

  return (
    <StoryDocs>
      <StoryDocsH1>AvatarStack</StoryDocsH1>
      <StoryDocsDescription>
        При необходимости компоненты можно группировать. В этом случае они выстраиваются по горизонтали с отрицательным
        отступом -2px и внешней обводкой 2px в цвет фона страницы. При группировке статусы не отображаются.
      </StoryDocsDescription>
      <StoryDocsDescription>
        <ul style={{ padding: '0px 20px' }}>
          <li>
            При достижении условного максимума отображаемых аватаров,
            последним ставится аватар с отображением количеством скрытых элемнентов
          </li>
          <li>В этом случае они выстраиваются по горизонтали с отрицательным отступом -2px и внешней обводкой 2px в цвет фона страницы.</li>
          <li>При группировке статусы не отображаются.</li>
          <li>При ховере на аватар стек показывается весь список</li>
          <li>Вы в списке, выводится первым и подсвечивается активным цветом. Остальные сортируются по алфавитному порядку</li>
        </ul>
      </StoryDocsDescription>

      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <AvatarStack list={usersMocks} currentUserId={'#100500'} />
      </div>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A1895',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow>
        <AvatarStack { ...args } list={usersMocks} currentUserId={'#100500'}>
        </AvatarStack>
      </StoryRow>
    </StoryContainer>
  );
};
