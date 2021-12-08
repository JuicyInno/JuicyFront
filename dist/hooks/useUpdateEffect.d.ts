import { EffectCallback, DependencyList } from 'react';
/**
 * Данный хук анологичен хуку `useEffect`, но пропускает первый вызов коллбека.
 */
declare const useUpdateEffect: (effect: EffectCallback, deps: DependencyList) => void;
export default useUpdateEffect;
