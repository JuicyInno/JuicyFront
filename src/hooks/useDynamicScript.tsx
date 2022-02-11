import { useEffect, useState } from 'react';

interface IProps {
  url: string;
}

/** подгружает динамически скрипт модуля*/
export const useDynamicScript = ({ url }: IProps) => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!url) {
      return;
    }

    const element = document.createElement('script');

    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${url}`);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};

/** регистрирует модуль*/
export function loadComponent(scope: string, module: string) {
  return async () => {
    // @ts-ignore
    await __webpack_init_sharing__('default');
    // @ts-ignore
    const container = window[scope];
    // Initialize the container, it may provide shared modules
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await window[scope].get(module);
    return factory();
  };
}
