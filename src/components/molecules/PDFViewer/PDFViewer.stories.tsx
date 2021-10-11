import React from 'react';
import PDFViewer from './PDFViewer';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { pdfFile } from './pdf';
import { IRequestAttachment } from '../../../types/projects.types';

export default {
  title: 'не проверено/PDFViewer',
  component: PDFViewer
};

export const sPDFViewer = () => {
  const file:IRequestAttachment = {
    fileName: 'test',
    base64: pdfFile
  };

  return (
    <Story name='Просмотр PDF' description='Компонент просматривает и листает pdf'>

      <div style={{ width: '400px' }}>
        <StoryItem description='Ширина блока меньше ширины старницы pdf'>
          <PDFViewer file={file} url={'test'} />
        </StoryItem>
      </div>

      <StoryItem description='Ширина блока больше ширины старницы pdf'>
        <PDFViewer file={file} />
      </StoryItem>

    </Story>
  );
};
