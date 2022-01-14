import React, {
  useCallback, useEffect, useState
} from 'react';
import './CertReader.scss';
import { IRequestAttachment } from '../../../types/projects.types';
import Menu, { IListProps } from '../../atoms/Menu';
import { Button } from '../../../index';
import { IListElement } from '../../../types';
import {
  Certificate, createSignature, getUserCertificates
} from 'crypto-pro';
import { IButtonProps } from '../../atoms/Button/Button';
import { mockCerts } from './CertReader.mock';
import Modal from '../../atoms/Modal';

export interface ICertReader {
  /** входящий файл на подпись*/
  file: IRequestAttachment;
  /** успех*/
  onSuccess:(result:ICertResult)=>void
  /** ошибка в тч и с плагинами*/
  onError:(e: any) => void;
  /** название кнопки*/
  buttonTitle?: string
  /** фильтр сертификатов */
  filter?: (cert: Certificate) => Promise<boolean>;
  /** пропсы для кнопки */
  btnProps?: IButtonProps;
  /** позиция для меню сертификатов */
  menuPos?: IListProps['position'];
  /** для тестов */
  useMock?: boolean;
  /** Render-prop для контента попапа начала подписи */
  confirmContent?: (cert: IBrowserCert, file: IRequestAttachment) => React.ReactNode;
}

export interface IBrowserCert extends Certificate {
  /** имя пользователя*/
  issuerName: string;
  /** название сертификата*/
  name: string;
  /** персональный ключ*/
  thumbprint: string;
  /** Дата выпуска сертификата */
  validFrom: string;
  /** Дата срока годности сертификата */
  validTo: string;
}

export interface ICertResult {
  data: IRequestAttachment
  cert: IBrowserCert,

}
const CertReader: React.FC<ICertReader> = ({
  file,
  onSuccess,
  useMock = false,
  onError,
  buttonTitle = 'Подписать ЭП (электронная подпись)',
  btnProps = {},
  menuPos = 'left',
  filter = async (_cert: Certificate) => true,
  confirmContent
}: ICertReader) => {
  /** Все доступные сертификаты */
  const [certs, setCerts] = useState<null | Certificate[]>(null);
  /** Выбранный сертификат */
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [openConfirmPopup, setOpenConfirmPopup] = useState(false);

  const closePopup = useCallback(() => {
    setSelectedCert(null);
    setOpenConfirmPopup(false);
  }, []);

  // ===================================================================================================================
  /** асинхронное получение серификатов с ключа*/
  useEffect(() => {
    async function getCertificates() {
      try {
        let certs = await getUserCertificates();
        const filteredAsync = await Promise.all(certs.map(filter));
        certs = certs.filter((_cert, i) => filteredAsync[i]);

        if (certs.length) {
          setCerts(certs);
        }
      } catch (e) {

        setCerts(null);
        onError(e);
      }
    }

    if (useMock) {
      // @ts-ignore
      setCerts(mockCerts);
    } else {
      getCertificates().then();
    }
  }, []);

  /**  Добавляем в список заголовок */
  const getCertsWithTitle = (certs: IListElement[]): IListElement[] => [
    {
      isTitle: true,
      label: 'Выберите сертификат'
    },
    ...certs
  ];

  // ===================================================================================================================
  /** формирование меню*/
  const menuBuilder = (certs: Certificate[]): IListElement[] => {
    return [...certs].map((item: Certificate) => {
      const label = `${item.name} (${item.issuerName})`;

      return {
        label,
        value: item.thumbprint,
        handler: () => {
          setSelectedCert(item);
          setOpenConfirmPopup(true);
        }
      };
    });
  };

  // ===================================================================================================================

  const signFile = async (cert: Certificate) => {
    try {
      onSuccess({
        data: {
          ...file,
          singBase64: (await createSignature(cert.thumbprint, file.base64.split('base64,')[1])).replace(/[\r\n]+/g, ''),
          cert: cert.thumbprint
        },
        cert
      });
    } catch (e) {
      if (useMock) {
        onSuccess({
          data: {
            ...file,
            singBase64: 'подписанный файл',
            cert: cert.thumbprint
          },
          cert
        });

      } else {
        onError(e);
      }
    } finally {
      closePopup();
    }
  };

  // ===================================================================================================================

  return <>
    <Menu position={menuPos} list={certs ? getCertsWithTitle(menuBuilder(certs)) : undefined}>
      <Button {...btnProps} disabled={!certs}>{buttonTitle}</Button>
    </Menu>

    {openConfirmPopup &&
      <Modal size='l' header={<h5>Подтверждение</h5>} onClose={closePopup}>

        {confirmContent ? !!selectedCert && confirmContent(selectedCert, file) : <>
          <p className='cert-reader__confirm-text'>Перейти к подписанию документа?</p>
          {!!selectedCert && <p className='cert-reader__certificate'>
            Сертификат: {`${selectedCert.name} (${selectedCert.issuerName})`}
          </p>}
        </>}


        <div className='cert-reader__confirm-actions'>
          <Button size='l' buttonType='light' onClick={closePopup}>Отменить</Button>
          <Button size='l' disabled={!selectedCert} onClick={() => selectedCert && signFile(selectedCert)}>
            Подтвердить
          </Button>
        </div>
      </Modal>}
  </>;
};

export default CertReader;
