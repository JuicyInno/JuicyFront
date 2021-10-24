import React, { useState } from 'react';
import StoryItem from '../../storybook/StoryItem';

import { IRequestAttachment } from '../../../types/projects.types';
import CertReader, { ICertResult } from './CertReader';
import { pdfFile } from '../PDFViewer/pdf';
import './CertReader.scss';
import Story from '../../storybook/Story';
import { StoryDocsDescription, StoryDocsH1 } from '../../storybook';
export default {
  title: 'controls/withTest/Получение сертификатов',
  component: CertReader
};

export const Demo = () => {
  const [sign, setSign] = useState<ICertResult|undefined>(undefined);
  const file:IRequestAttachment = {
    fileName: 'test',
    base64: pdfFile
  };
  const successHandle = (result:ICertResult) => {

    setSign(result);
    console.log('success:', result);
  };
  const errorHandle = (e:any) => {
    setSign(undefined);
    console.error('Ошибка: ', e);
  };

  return (
    <Story >
      <StoryDocsH1>CertReader </StoryDocsH1>
      <StoryDocsDescription>
        компонент считывает сертификаты с помощью плагина криптопро
      </StoryDocsDescription>
      <StoryItem >
        <a href='https://cryptopro.ru/sites/default/files/products/cades/demopage/cades_bes_sample.html'>
          Проверить работу плагина
        </a>
        <div className='cert__wrapper' >
          <CertReader
            filter={async(cert) => !!~cert.issuerName.toLowerCase().indexOf('vtb')}
            file={file} onSuccess={successHandle} onError={errorHandle}/>
          <CertReader
            buttonTitle={'Mock подписание'}
            filter={async(cert) => !!~cert.issuerName.toLowerCase().indexOf('vtb')}
            file={file} onSuccess={successHandle} onError={errorHandle} useMock={true}/>
        </div>

        <div className={sign ? 'cert__success' : 'cert__error'}>
          {sign ? `Подписано ${sign.cert.name} ${sign.cert.issuerName}` : 'не подписано'}
        </div>
      </StoryItem>


    </Story>

  );
};
