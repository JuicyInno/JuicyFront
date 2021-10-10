import React, { useState } from 'react';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';
import StatusPicker, { IPickerProps } from './StatusPicker';


export default {
  title: 'не проверено/Status Picker',
  component: StatusPicker,
};


export const statusPicker = (args: IPickerProps) => {

  const [arrayData, setArrayData] = useState(Array(4).fill(['', '', '']));

  const statusHandler = (value: number, array: string[][]) => {
    setArrayData(array);
    console.log(value);
  };


  return (
    <Story name='Status Picker' description='Status Picker элемент'>
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
    </Story>
  );
};
