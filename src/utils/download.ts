import { IRequestAttachment } from '../types/projects.types';

export const download = (file: IRequestAttachment, name: string) => {
  // @ts-ignore
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {

    const tmp = (file.base64 || '').split(';base64,');
    const byteCharacters = atob(tmp[1]);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: tmp[0].split(':')[1] });
    // @ts-ignore
    window.navigator.msSaveOrOpenBlob(blob, name);
  } else {

    const a = document.createElement('a');
    a.href = file.base64 || '';
    a.download = name;
    a.click();
  }
};
