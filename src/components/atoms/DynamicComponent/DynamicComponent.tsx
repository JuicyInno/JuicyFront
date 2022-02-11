import React, { useMemo } from 'react';
import { loadComponent, useDynamicScript } from '../../../hooks/useDynamicScript';
import Preloader from '../Preloader';

interface IProps {
  url: string;
  scope: string;
  module: string;
  basename?: string;
}

const DynamicComponent: React.FC<IProps> = ({ url, scope, module, basename = '' }: IProps) => {
  const { ready, failed } = useDynamicScript({ url });
  const Component = useMemo(() => React.lazy(loadComponent(scope, module)), [scope, module]);

  if (!ready) {
    console.log('Loading dynamic script' + url);
  }

  if (failed) {
    console.log('Failed to load dynamic script:' + url);
  }

  return (
    <React.Suspense fallback={ <Preloader size='l'/> }>
      { ready ? <Component basename={ basename }/> : <Preloader size='l'/> }
    </React.Suspense>
  );
};

export default DynamicComponent;
