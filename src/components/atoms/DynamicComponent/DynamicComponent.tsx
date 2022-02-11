import React, { ReactNode, useMemo } from 'react';
import { loadComponent, useDynamicScript } from '../../../hooks/useDynamicScript';
import Preloader from '../Preloader';
import ErrorBoundary from '../ErrorBoundary';

interface IProps {
  url: string;
  scope: string;
  module: string;
  basename?: string;
  fallback?: ReactNode;
  error?: ReactNode;
}

const DynamicComponent: React.FC<IProps> = ({ url, scope, module, basename = '', fallback, error = '' }: IProps) => {
  const { ready, failed } = useDynamicScript({ url });
  const Component = useMemo(() => React.lazy(loadComponent(scope, module)), [scope, module]);

  if (!ready) {
    console.log('Loading dynamic script' + url);
  }

  if (failed) {
    console.log('Failed to load dynamic script:' + url);
  }

  return (
    <ErrorBoundary error={ error }>
      { failed ? error : (
        <React.Suspense fallback={ fallback || <Preloader size='l'/> }>
          { ready ? <Component basename={ basename }/> : <Preloader size='l'/> }
        </React.Suspense>
      ) }
    </ErrorBoundary>
  );
};

export default DynamicComponent;
