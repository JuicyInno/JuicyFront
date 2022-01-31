import { useRef } from 'react';

/**
 * Сохранение значения в `ref`. Удобно для прокидывания функции в эффект без его перезапуска.
 * @param value Значение для сохранения
 */
export const useLatest = <T>(value: T): { readonly current: T } => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};
