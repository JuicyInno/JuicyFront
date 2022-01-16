import React from 'react';
import { getByText, render, waitFor } from '@testing-library/react';

import { IRequestAttachment } from '../../../types/projects.types';
import { pdfFile } from '../PDFViewer/pdf';

import CertReader, {IBrowserCert} from './CertReader';
import userEvent from '@testing-library/user-event';
import { byText } from 'testing-library-selector';

const file: IRequestAttachment = {
  fileName: 'test',
  base64: pdfFile,
};
const onError = jest.fn();
const onSuccess = jest.fn();

describe('Test <CertReader /> component', () => {
  /** Обработка ошибок */
  const originalError = console.error;

  afterEach(() => (console.error = originalError));
  beforeEach(() => (console.error = () => {}));

  it('should render <CertReader /> ', () => {
    const { container } = render(<CertReader buttonTitle='test' file={file} onError={onError} onSuccess={onSuccess} />);
    expect(getByText(container, 'test')).toBeTruthy();
  });

  it('should success sign with mock ', async () => {
    render(<CertReader useMock buttonTitle='test' file={file} onError={onError} onSuccess={onSuccess} />);
    userEvent.click(byText('test').get());
    expect(byText('Гомер Симпсон (CN=VTB Group CA 3, O=VTB, C=RU)').get()).toBeTruthy();
    expect(byText('Барт Симпсон (CN=VTB Group DSO CA 7, O=VTB, C=RU)').get()).toBeTruthy();
    userEvent.click(byText('Гомер Симпсон (CN=VTB Group CA 3, O=VTB, C=RU)').get());
    userEvent.click(byText('Подтвердить').get());

    await waitFor(() => {
      expect(onSuccess).toBeCalled();
    });
  });

  it('should render custom confirm content', async () => {
    const custom = (cert: IBrowserCert, file: IRequestAttachment) => <div>{file.fileName} {cert.name} {file.fileName}</div>;
    render(<CertReader useMock buttonTitle='test' file={file} onError={onError} onSuccess={onSuccess} confirmContent={custom} />);
    userEvent.click(byText('test').get());
    expect(byText('Гомер Симпсон (CN=VTB Group CA 3, O=VTB, C=RU)').get()).toBeTruthy();
    userEvent.click(byText('Гомер Симпсон (CN=VTB Group CA 3, O=VTB, C=RU)').get());

    expect(byText('test Гомер Симпсон test').get()).toBeTruthy();
  });
});
