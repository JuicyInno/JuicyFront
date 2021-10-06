import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import PDFViewer from './PDFViewer';
import { pdfFile } from './pdf';
import { IRequestAttachment } from '../../../types/projects.types';

jest.mock('react-pdf', () => {
  const Page = () => <div>page</div>;

  return {
    pdfjs: {
      GlobalWorkerOptions: {
        workerSrc: 'abc'
      }
    },
    Outline: null,
    Page,
    Document: () => {
      return <Page />;
    }
  };
});

describe('Tests for <PDFViewer /> component', () => {
  it('should render 1 download button without url', () => {
    render(<PDFViewer file={{ base64: pdfFile } as IRequestAttachment} />);

    expect(screen.getByText('Скачать')).toBeInTheDocument();
  });

  it('should render 2 buttons with url', () => {
    const { container } = render(<PDFViewer file={{ base64: pdfFile } as IRequestAttachment} url={'/test'} />);

    expect(getByTestId(container, 'pdf-download-btn')).toBeInTheDocument();
    expect(getByTestId(container, 'pdf-download-btn').textContent).toHaveLength(0);
    expect(screen.getByText('Просмотреть')).toBeInTheDocument();
  });
});
