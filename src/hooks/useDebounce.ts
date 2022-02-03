import { useEffect, useRef } from 'react';
import { useLatest } from './useLatest';

/**
 * @param value Значение для дебаунса
 * @param delay Задержка
 * @param callback Функция которую нужно выполнить после задержки
 */
export const useDebounce = <T>(value: T, delay: number, callback: (value: T) => void) => {
  const latestCallback = useLatest(callback);
  const isMounted = useRef(false);

  useEffect(
    () => {
      // Не запускаем дебаунс при первом рендере - повторяет старое поведение с keyup.
      if (!isMounted.current) {
        isMounted.current = true;
        return;
      }

      const timeout = setTimeout(() => {
        latestCallback.current(value);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    },
    [value, delay]
  );
};
