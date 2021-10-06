import React from 'react';
import { IFileData } from '../../../types';
import Story from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';
import InputFile from './InputFile';

export default {
  title: 'Form Controls/InputFile',
  component: InputFile
};

export const inputFile = () => {
  /** Получаем файл */
  const setFile = (file: IFileData[]) => {
    console.log(file);
  };

  return (
    <Story name='FileInput (Выбор файла)'>
      <StoryItem description='Простой выбор файла'>
        <InputFile name='file' placeholder='Выберите файлы' setFile={setFile} />
      </StoryItem>
      <StoryItem description='Выбор определенного типа файлов'>
        <StoryRow>
          <InputFile name='file' placeholder='Выберите pdf' accept='application/*' multiple setFile={setFile} />
        </StoryRow>
        <StoryRow>
          <InputFile
            name='file'
            placeholder='Изображение PNG (50кБ)'
            accept='image/png'
            setFile={setFile}
            max={50}
          />
        </StoryRow>
        <StoryRow>
          <InputFile name='file' placeholder='Выберите текстовый файл' accept='text/*' setFile={setFile} />
        </StoryRow>
      </StoryItem>
      <StoryItem description='Неактивное поле'>
        <InputFile name='file' placeholder='Это поле неактивно' setFile={setFile} disabled={true} />
      </StoryItem>
    </Story>
  );
};
