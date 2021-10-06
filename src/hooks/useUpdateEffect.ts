import {
  useEffect, useRef, EffectCallback, DependencyList
} from 'react';

/**
 * Данный хук анологичен хуку `useEffect`, но пропускает первый вызов коллбека.
 */
const useUpdateEffect = (effect: EffectCallback, deps: DependencyList) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      return effect();
    }

    isMounted.current = true;
  }, deps);
};

export default useUpdateEffect;
