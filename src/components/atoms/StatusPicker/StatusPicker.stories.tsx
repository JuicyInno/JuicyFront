
import React, { useState } from 'react';
import { Story } from '@storybook/react';
import StoryContainer from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';
import StatusPicker, { IPickerProps } from './StatusPicker';


export default {
  title: 'forms/withTests/Status Picker',
  component: StatusPicker,
};

export const Demo = () => {
  const [arrayData, setArrayData] = useState(Array(3).fill(['', '', '']));

  const statusHandler = (value: number, array: string[][], pos: number) => {
    console.log(value, pos, array);
    setArrayData(array);
  };
  return <StoryContainer>
    <StoryRow>
      <StoryItem description='состояние оцeнщика'>
        <StoryRow >
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            {arrayData.map((item, index) => {
              return <StatusPicker key={index} position={index} pickedValues={arrayData} getRate={statusHandler} />;
            })}
          </div>
        </StoryRow>
      </StoryItem>
    </StoryRow>
  </StoryContainer>;
};

export const Playground: Story<IPickerProps> = (args: IPickerProps) => {

  const [arrayData, setArrayData] = useState(Array(3).fill(['', '', '']));

  const statusHandler = (value: number, array: string[][]) => {


    setArrayData(array);
  };

  return <StoryRow>
    <StoryItem description='состояние оцeнщика'>
      <StoryRow >
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          {arrayData.map((item, index) => {
            return <StatusPicker key={index} {...args} position={index} pickedValues={arrayData} getRate={statusHandler} />;
          })}
        </div>
      </StoryRow>
    </StoryItem>
  </StoryRow>;
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gDl8sDPM8Zmh5ol4ywzLrj/Design-System-VTB-Home?node-id=23419%3A170080',
  },
};
