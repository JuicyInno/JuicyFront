import React from 'react';
import { Story } from '@storybook/react';

import ControlGroup from '../ControlGroup';
import FormGroup from '../FormGroup';
import Tooltip from '../Tooltip';
import Radio from './Radio';
import Info from '../../../assets/icons/Info';

import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsH3, StoryDocsDescription
} from '../../storybook';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'forms/Radio',
  component: Radio,
  decorators: [withDesign],
  argTypes: {
    disabled: { type: 'boolean' },
    label: { control: null },
    value: { control: null },
  }
};

export const Demo = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>Radio</StoryDocsH1>
      <StoryDocsDescription>
        Радиокнопки применяются, когда есть список опций, из которых пользователь может выбрать только один вариант.
      </StoryDocsDescription>
      <ControlGroup>
        <ControlGroup>
          <Radio
            name='demo-1'
            label='Default'
            value='1'
            defaultChecked
          />
          <Radio
            name='demo-1'
            label='Default'
            value='2'
          />
          <Radio
            name='demo-1'
            label={(
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{ marginRight: 8 }}>Default</div>
                <div style={{
                  height: 24,
                  color: 'var(--basic-tertiary)'
                }}>
                  <Tooltip>
                    <Info />
                    <div>Подсказка</div>
                  </Tooltip>
                </div>
              </div>
            )}
            value='3'
          />
        </ControlGroup>
        <br />
        <ControlGroup>
          <Radio
            name='demo-2'
            label='Default'
            value='1'
            defaultChecked
            disabled
          />
          <Radio
            name='demo-2'
            label='Default'
            value='2'
            disabled
          />
        </ControlGroup>
      </ControlGroup>
      <StoryDocsH2>Варианты группировки</StoryDocsH2>
      <StoryDocsH3>Группа кнопок</StoryDocsH3>
      <FormGroup label='Выберите город'>
        <ControlGroup>
          <Radio
            name='vertical-group'
            label='Город 1'
            value='1'
            defaultChecked
          />
          <Radio
            name='vertical-group'
            label='Город 1'
            value='2'
          />
          <Radio
            name='vertical-group'
            label='Город 3'
            value='3'
          />
        </ControlGroup>
      </FormGroup>
      <StoryDocsH3>Горизонтальная компоновка</StoryDocsH3>
      <FormGroup label='Выберите город'>
        <ControlGroup direction='horizontal'>
          <Radio
            name='horizontal-group'
            label='Город 1'
            value='1'
            defaultChecked
            fullWidth={false}
          />
          <Radio
            name='horizontal-group'
            label='Город 1'
            value='2'
            fullWidth={false}
          />
          <Radio
            name='horizontal-group'
            label='Город 3'
            value='3'
            fullWidth={false}
          />
        </ControlGroup>
      </FormGroup>
    </StoryDocs>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <ControlGroup>
          <Radio
            name='vertical-group'
            label='Город 1'
            value='1'
            defaultChecked
            {...args}
          />
          <Radio
            name='vertical-group'
            label='Город 1'
            value='2'
            {...args}
          />
          <Radio
            name='vertical-group'
            label='Город 3'
            value='3'
            {...args}
          />
        </ControlGroup>
      </StoryRow>
    </StoryContainer>
  );
};


Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18262%3A231294'
  },
};
Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=18262%3A231294'
  },
};
