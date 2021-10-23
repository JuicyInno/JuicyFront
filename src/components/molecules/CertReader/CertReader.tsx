import React, { useEffect, useState } from 'react';
import './CertReader.scss';
import { IRequestAttachment } from '../../../types/projects.types';
import Menu from '../../atoms/Menu';
import { Button } from '../../../index';
import { IListElement } from '../../../types';
import {
  Certificate, createSignature, getUserCertificates
} from 'crypto-pro';
import { IButtonProps } from '../../atoms/Button/Button';
import { mockCerts } from './CertReader.mock';

export interface IProps {
  /** входящий файл на подпись*/
  file: IRequestAttachment;
  /** успех*/
  onSuccess:(result:ICertResult)=>void
  /** ошибка в тч и с плагинами*/
  onError:(e:any)=> void;
  /** название кнопки*/
  buttonTitle?:string
  /** фильтр сертификатов */
  filter?: (cert: Certificate) => Promise<boolean>;
  /** пропсы для кнопки */
  btnProps?: IButtonProps;
  /** позиция для меню сертификатов */
  menuPos?: 'left' | 'right' | 'top-left' | 'top-right';
  /** для тестов */
  useMock?:boolean

}
export interface IBrowserCert{
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
  data:IRequestAttachment
  cert:IBrowserCert,

}
const CertReader: React.FC<IProps> = ({ file,
  onSuccess,
  useMock = false,
  onError,
  buttonTitle = 'Подписать ЭП (электронная подпись)',
  btnProps = {},
  menuPos = 'left',
  filter = async (_cert: Certificate) => true }: IProps) => {
  /** все доступные сертификаты*/
  const [ certs, setCerts ] = useState<null|Certificate[]>(null);
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
  // ===================================================================================================================
  /** формирование меню*/
  const menuBuilder = (certs:Certificate[]):IListElement[] => {
    return certs.map((item:Certificate) => {
      const l = `${item.name} (${item.issuerName})`;
      return {
        label: l.length < 100 ? l : l.slice(0, 100) + '...',
        value: item.thumbprint,
        handler: async() => {
          try {
            onSuccess({
              data: {
                ...file,
                singBase64: (await createSignature(item.thumbprint, file.base64.split('base64,')[1])).replace(/[\r\n]+/g, ''),
                cert: item.thumbprint
              },
              cert: item
            });
          } catch (e) {
            if (useMock) {
              onSuccess({
                data: {
                  ...file,
                  singBase64: 'подписанный файл',
                  cert: item.thumbprint
                },
                cert: item
              });

            } else {
              onError(e);
            }
          }
        }
      };
    });
  };


  // ===================================================================================================================
  return <>
    <Menu position={menuPos} list={certs ? menuBuilder(certs) : undefined} >
      <Button {...btnProps} disabled={!certs}>{buttonTitle}</Button>
    </Menu>
  </>;
};

export default CertReader;
