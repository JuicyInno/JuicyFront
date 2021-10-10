import React, { useState } from 'react';
import StoryItem from '../../storybook/StoryItem';

import { IRequestAttachment } from '../../../types/projects.types';
import CertReader, { ICertResult } from './CertReader';
import { pdfFile } from '../PDFViewer/pdf';
import './CertReader.scss';
export default {
  title: 'не проверено/CertReader',
  component: CertReader
};

export const sCertReader = () => {
  const [sign, setSign] = useState<ICertResult|undefined>(undefined);
  const file:IRequestAttachment = {
    fileName: 'test',
    base64: pdfFile
  };
  const successHandle = (result:ICertResult) => {

    setSign(result);
    console.log(result);
  };
  const errorHandle = (e:any) => {
    setSign(undefined);
    console.error('Ошибка: ', e);
  };

  return (


    <StoryItem description='Проверка сертификата'>
      <>
        <a href='https://cryptopro.ru/sites/default/files/products/cades/demopage/cades_bes_sample.html'>
          Проверить работу плагина
        </a>
        <div className='cert__wrapper' >
          <CertReader
            filter={async(cert) => !!~cert.issuerName.toLowerCase().indexOf('vtb')}
            file={file} onSuccess={successHandle} onError={errorHandle}/>
        </div>
        <div className={sign ? 'cert__success' : 'cert__error'}>{sign ? `Подписано ${sign.cert}` : 'не подписано'}</div>

      </>
    </StoryItem>

  );
};
