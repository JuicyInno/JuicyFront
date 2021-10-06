import React from 'react';
import Switch, { ISwitchProps } from './Switch';
import Story from '../../storybook/Story';
import {
  StoryDocsDescription, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import StoryRow from '../../storybook/StoryRow';
import { MobileView } from './previews/mobile-view';
import { States } from './previews/states';

export default {
  title: 'Toggle',
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
          <Switch onChange={onChange} label='Text' size='m' style={{ marginBottom: 20 }} />
          <Switch onChange={onChange} label='Text' size='m' style={{ marginBottom: 20 }} />
          <Switch onChange={onChange} label='Text' size='m' style={{ marginBottom: 20 }} />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Switch onChange={onChange} label='Text' size='s' style={{ marginBottom: 20 }} />
          <Switch onChange={onChange} label='Text' size='s' style={{ marginBottom: 20 }} />
          <Switch onChange={onChange} label='Text' size='s' style={{ marginBottom: 20 }} />
        </div>
      </div>

      <StoryDocsH2>Вариация с дополнительным текстом</StoryDocsH2>
      <StoryDocsDescription>
        Состояния аналогичны стандартным переключателям
      </StoryDocsDescription>

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 100 }}>
          <Switch
            onChange={onChange}
            label='Text'
            size='m'
            style={{ marginBottom: 20 }}
            helperText='Add text'
          />
        </div>
        <div>
          <Switch
            onChange={onChange}
            label='Text'
            size='s'
            style={{ marginBottom: 20 }}
            helperText='Add text'
          />
        </div>
      </div>

      <StoryDocsH2>Состояния</StoryDocsH2>
      <States />

      <StoryDocsH2>Адаптив (Mobile)</StoryDocsH2>
      <StoryDocsDescription>
        При создании отдельных макетов для мобильных устройств, рекомендуется использовать вариацию комопнента размера M с текстом слева, который можно
        вытянуть на всю ширину экрана.
      </StoryDocsDescription>
      <MobileView />
    </Story>
  );
};

Demo.parameters = {
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground = (props: ISwitchProps) => (
  <Story>
    <StoryRow>
      <Switch {...props} />
    </StoryRow>
  </Story>
);
