import React, { useState } from 'react';
import { Story } from '@storybook/react';

import StoryItem from '../../storybook/StoryItem';
import { IRequestAttachment } from '../../../types/projects.types';
import CertReader, { ICertResult } from './CertReader';
import { pdfFile } from '../PDFViewer/pdf';
import './CertReader.scss';
import StoryContainer from '../../storybook/Story';
import { StoryDocsDescription, StoryDocsH1 } from '../../storybook';

export default {
  title: 'controls/withTest/CertReader',
  component: CertReader,
  argTypes: {
    file: { control: null },
    btnProps: { control: null },
    useMock: { control: null },
  }
};

const file:IRequestAttachment = {
  fileName: 'test',
  base64: pdfFile
};

export const Demo = () => {
  const [sign, setSign] = useState<ICertResult|undefined>(undefined);

  const successHandle = (result:ICertResult) => {
    setSign(result);
    console.log('success:', result);
  };

  const errorHandle = (e:any) => {
    setSign(undefined);
    console.error('Ошибка: ', e);
  };

  return (
    <StoryContainer >
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
            file={file}
            onSuccess={successHandle}
            onError={errorHandle}
          />

          <CertReader
            buttonTitle={'Mock подписание'}
            filter={async(cert) => !!~cert.issuerName.toLowerCase().indexOf('vtb')}
            file={file}
            onSuccess={successHandle}
            onError={errorHandle}
            useMock={true}
          />
        </div>

        <div className={sign ? 'cert__success' : 'cert__error'}>
          {sign ? `Подписано ${sign.cert.name} ${sign.cert.issuerName}` : 'не подписано'}
        </div>
      </StoryItem>
    </StoryContainer>
  );
};

export const Playground: Story = (args) => {
  return (
    <StoryContainer>
      <div style={{ minHeight: '400px' }}>
        <CertReader
          filter={async(cert) => !!~cert.issuerName.toLowerCase().indexOf('vtb')}
          file={file}
          onError={() => console.log('onError')}
          onSuccess={() => console.log('onSuccess')}
          useMock={true}
          {...args}
        />
      </div>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A23436',
  },
};
