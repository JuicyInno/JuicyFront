import React from 'react';
import { Story } from '@storybook/react';

import { IFileData } from '../../../types';
import { initialFiles } from '../../../utils/helpers';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';
import InputFile, { IFileInputProps } from './InputFile';
import { StoryDocsH1, StoryDocs } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import { Notifications } from '../../../index';


export default {
  title: 'forms/withTest/InputFile',
  component: InputFile,
  argTypes: {
    files: { control: null },
    placeholder: { defaultValue: 'Выберите файлы' },
    name: { defaultValue: 'file' },
    className: { control: null },
    customPlaceholder: { control: null },
    type: { control: null },
    startAdornment: { control: null },
    endAdornment: { control: null },
    pressedCondition: { control: null },
  }
};

/** Получаем файл */
const setFile = (file: IFileData[]) => {
  console.log(file);
};

export const Demo: Story = () => {

  return (
    <StoryDocs>
      <StoryDocsH1>Input File</StoryDocsH1>
      <StoryItem description='Простой выбор файла'>
        <InputFile name='file' buttonType='light' files={initialFiles} placeholder='Выберите файлы' setFile={setFile} />
      </StoryItem>
      <StoryItem description='Выбор определенного типа файлов'>
        <StoryRow>
          <InputFile name='file' buttonType='light' placeholder='Выберите PDF' accept='application/pdf' multiple setFile={setFile} />
        </StoryRow>
        <StoryRow>
          <InputFile
            name='file'
            placeholder='Изображение PNG (50кБ)'
            accept='image/png'
            buttonType='light'
            setFile={setFile}
            maxSize={50}
          />
        </StoryRow>
      </StoryItem>
      <StoryItem description='Неактивное поле'>
        <InputFile name='file' placeholder='Это поле неактивно' setFile={setFile} disabled={true} />
      </StoryItem>

      <Notifications/>
    </StoryDocs>
  );
};


export const Playground: Story<IFileInputProps> = (args) => {
  return (
    <StoryContainer>
      <StoryRow>
        <InputFile {...args} setFile={setFile}/>
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A17989',
  },
};
