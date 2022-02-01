import { IRequestAttachment } from '../types/projects.types';
import { sendNotification } from '../index';
import { IFileData } from '../types';

const defaultID = '00000000-0000-0000-0000-000000000000';

export const download = (file: IRequestAttachment, name?: string, host = window.location.origin) => {
  if (file.base64) {
    /** При наличии base64 в файле скачиваем через blob */
    // @ts-ignore
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {

      const tmp = (file.base64).split(';base64,');
      const byteCharacters = atob(tmp[1]);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: tmp[0].split(':')[1] });
      // @ts-ignore
      window.navigator.msSaveOrOpenBlob(blob, name || file.fileName);
    } else {

      const a = document.createElement('a');
      a.href = file.base64 || '';
      a.download = name || file.fileName;
      a.click();
    }
  } else if (file.id && file.id !== '' && file.id !== defaultID) {
    /** Если у файла нет base64, но есть ID, то скачиваем через файловый сервер */
    if (host.includes('127.0.0') || host.includes('6006')) {
      host = 'https://sapd-fes-ap01.vtb24.ru:44310';
    }

    const url = `${host}/sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IAttachmentContent(${file.id})/content`;
    window.open(url, '_blank');
  } else {
    sendNotification({
      message: 'Файл не обнаружен.',
      variant: 'red'
    });
  }
};

export const downloadWithLoading = ({ file, base64, id }: IFileData, setLoading: (f: boolean) => void) => {
  let url = id || base64;

  if (id && id !== '' && id !== defaultID) {
    let host = window.location.origin;

    if (host.includes('127.0.0') || host.includes('6006')) {
      host = 'https://sapd-fes-ap01.vtb24.ru:44310';
    }

    url = `${host}/sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IAttachmentContent(${id})/content`;
  }

  setLoading(true);
  fetch(url)
    .then((res) => res.blob())
    .then((blob: Blob) => {
      const ext = file.name.split('.');

      let fileUrl;

      if (ext[1] === 'pdf') {
        blob = blob.slice(0, blob.size, `application/${ext[1]}`);
        fileUrl = window.URL.createObjectURL(blob);

        window.open(fileUrl, '_blank');
      } else {
        const a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = file.name;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    })
    .catch((e) => {
      sendNotification({
        message: 'Файл не обнаружен.',
        variant: 'red'
      });
    })
    .finally(() => {
      setLoading(false);
    });
};
