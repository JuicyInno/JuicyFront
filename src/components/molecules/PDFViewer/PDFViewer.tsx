import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
import './PDFViewer.scss';
import { IRequestAttachment } from '../../../types/projects.types';

import DownloadIcon from '../../../assets/icons/Download';
import { download } from '../../../utils/download';
import ButtonPages from '../../atoms/ButtonPages/ButtonPages';
import { Button } from '../../../index';
// @ts-ignore
import { Page, Document } from 'react-pdf/dist/esm/entry.webpack';
import OpenNewTab from '../../../assets/icons/OpenNewTab';


export interface IProps {
  /** Файл на просмотр с base64 */
  file: IRequestAttachment;
  /**
   * Ссылка для открытия в новой вкладке.
   * Должна включать полный путь до файла: host + path.
   * Инлайн data:<type>;base64,* ссылки не работают в IE 11!
   * */
  url?: string;
}

const PDFViewer: React.FC<IProps> = ({ file, url = '' }: IProps) => {
  /** Всего страниц в документе */
  const [numPages, setNumPages] = useState(1);
  /** Текущая страница */
  const [currentPage, setCurrentPage] = useState(1);

  const [pageWidth, setPageWidth] = useState(0);
  const pdfWrapper = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    setNumPages(1);
    setCurrentPage(1);
  }, [file]);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  /** Переключение страницы */
  const onPageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  /** Определение ширины страницы */
  const calculatePageWidth = (page:any) => {
    if (pdfWrapper.current) {
      const blockWidth = pdfWrapper.current?.getBoundingClientRect().width;
      const pageWidth = page.getViewport({ scale: 1 }).width;

      setPageWidth(Math.min(pageWidth, blockWidth - 16));
    }
  };

  const onClickDownload = () => {
    download(file, file.fileName);
  };

  const onClickOpen = () => {
    window.open(url, '_blank');
  };
  // -------------------------------------------------------------------------------------------------------------------

  return (
    <>
      { file &&
      <div ref={pdfWrapper} className='pdf-document'>
        <Document file={ file.base64 } onLoadSuccess={ onDocumentLoadSuccess }>
          <Page width={pageWidth} pageNumber={ currentPage } onLoadSuccess={calculatePageWidth} />
        </Document>
        <div className='pdf-document__download'>

          {!!url &&
            <div className='pdf-document__open'>
              <Button
                buttonType='white'
                size='s'
                onClick={onClickOpen}
                endAdornment={<OpenNewTab className='pdf-document__icon'/>}>
                Просмотреть
              </Button>
            </div>
          }

          <Button
            data-testid='pdf-download-btn'
            buttonType='white'
            size='s'
            onClick={onClickDownload}
            endAdornment={<DownloadIcon className='pdf-document__icon'/>}>
            {url ? '' : 'Скачать'}
          </Button>
        </div>
        <div className='pdf-document__pager'>
          <ButtonPages max={numPages} onChange={onPageChange}/>
        </div>
      </div>
      }
    </>
  );
};

export default PDFViewer;
