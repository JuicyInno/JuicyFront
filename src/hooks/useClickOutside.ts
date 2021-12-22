import { RefObject, useEffect } from 'react';

const useClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void) => {
  useEffect(
    () => {
      /** Функция для отслеживания клика вне элемента */
      const listener = (event: Event) => {
        /** При клике на элемент или на элементы внутри него - ничего не делаем */
        if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [ref, handler]
  );
};

export default useClickOutside;
