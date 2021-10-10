import React from 'react';
import Switch, { ISwitchProps } from './Switch';
import Story from '../../storybook/Story';
import {
  StoryDocsDescription, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import StoryRow from '../../storybook/StoryRow';
import { MobileView } from './previews/mobile-view';

import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'atoms/withTest/Toggle',
  decorators: [withDesign],
  component: Switch,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Text'
    },
    helperText: {
      control: { type: 'text' },
      defaultValue: 'Add text'
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'select' },
      defaultValue: 'm'
    },
  }
};

export const Demo = () => {
  const onChange = (flag: boolean) => {
    console.log(`Новое состояние: ${flag}`);
  };

  return (
    <Story>
      <StoryDocsH1>Switch (Toggle)</StoryDocsH1>

      <StoryDocsDescription>
        Переключатель используется в ситуации, когда нужно переключиться между двумя равнозначными состояними интерфейса. <br/><br/>
        Размер вариации компонента с текстом слева изменяется вручную, может применяться как адаптив на мобильных устройствах.
      </StoryDocsDescription>

      <StoryDocsH2>Вертикальная компоновка</StoryDocsH2>
      <StoryDocsDescription>
        Рекомендованное расстояние между вертикально расположенными комопнентами: 20px для размера M и 16px для размера S
      </StoryDocsDescription>

      <div style={{ display: 'flex' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 100
        }}>
          <div style={{ marginBottom: 20 }} >
            <Switch onChange={onChange} label='Text' size='m' />
          </div>
          <div style={{ marginBottom: 20 }} >
            <Switch onChange={onChange} label='Text' size='m' />
          </div>
          <div style={{ marginBottom: 20 }} >
            <Switch onChange={onChange} label='Text' size='m' />
          </div>

        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>

          <div style={{ marginBottom: 20 }} >
            <Switch onChange={onChange} label='Text' size='s' />
          </div>
          <div style={{ marginBottom: 20 }} >
            <Switch onChange={onChange} label='Text' size='s' />
          </div>
          <div style={{ marginBottom: 20 }} >
            <Switch onChange={onChange} label='Text' size='s' />
          </div>


        </div>
      </div>

      <StoryDocsH2>Вариация с дополнительным текстом</StoryDocsH2>
      <StoryDocsDescription>
        Состояния аналогичны стандартным переключателям
      </StoryDocsDescription>

      <div style={{ display: 'flex' }}>
        <div style={{
          marginRight: 100,
          marginBottom: 20
        }}>
          <Switch
            onChange={onChange}
            label='Text'
            size='m'
            helperText='Add text'
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <Switch
            onChange={onChange}
            label='Text'
            size='s'
            helperText='Add text'
          />
        </div>
      </div>


      <StoryDocsH2>Адаптив (Mobile)</StoryDocsH2>
      <StoryDocsDescription>
        При создании отдельных макетов для мобильных устройств, рекомендуется использовать вариацию комопнента размера
          M с текстом слева, который можно
        вытянуть на всю ширину экрана.
      </StoryDocsDescription>
      <MobileView />
    </Story>
  );
};

Demo.parameters = {
  actions: { disabled: true },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18262%3A231295'
  },
  controls: { disabled: true }
};

export const Playground = (props: ISwitchProps) => (
  <Story>
    <StoryRow>
      <Switch {...props} />
    </StoryRow>
  </Story>
);

export const test = (props: ISwitchProps) => (
  <Story>
    <StoryRow>
      <Switch label='Text'
        size={'s'}
        helperText='Add text' />
    </StoryRow>
  </Story>
);
Playground.parameters = {

  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18262%3A231295'
  },

};
