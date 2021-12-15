import { IRequestPath } from '../../../types/projects.types';

export const sortPaths = (path: IRequestPath[], isOpen: boolean): IRequestPath[] => {
  if (path.length <= 5) {
    return path;
  }

  if (!isOpen) {
    const indexOfMe = path.findIndex((item: IRequestPath) => item.user[0].fullName === 'Вы');

    if (indexOfMe === -1) {
      const indexOfReconciliation = path.findIndex((item: IRequestPath) => item.criticality === '0');

      if (indexOfReconciliation === -1) {
        const firstFiveResults = path.slice(0, 5);
        return firstFiveResults;
      }

      if (indexOfReconciliation === path.length - 1) {
        const lastFiveResults = path.slice(-5);
        return lastFiveResults;
      }

      let results;

      if (indexOfReconciliation === Number('0')) {
        results = path
          .slice(0, 5)
          .filter(item => !!item);
      } else if (indexOfReconciliation === Number('1')) {
        results = path
          .slice(0, 5)
          .filter(item => !!item);
      } else {
        results = path
          .slice(indexOfReconciliation - 2, indexOfReconciliation + 3)
          .filter(item => !!item);
      }

      return results;
    }

    const results = path
      .slice(indexOfMe - 2, indexOfMe + 2)
      .filter(item => !!item);
    return results;
  }

  return path;
};
