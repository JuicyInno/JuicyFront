import { IRequestPath } from '../../../types/projects.types';

/** Функция сортировки истории для боковой истории
 * В свёрнутом состоянии компонента показываем 4 элемента. Если у нас всего 4 пункта, показыаем как есть
 * (в этом случае свёрнутая итосрия совпадает с развёрнутой). В ином случае - читать комментарии в теле функции
 * @param {IRequestPath[]}  path массив элементов истории
 * @param {boolean}  isOpen флаг состояния (открыто - закрыто)
 * @returns {IRequestPath[]} отсортированный массив элементов истории
 */
export const sortPaths = (path: IRequestPath[], isOpen: boolean): IRequestPath[] => {
/** Если пунктов в истори 4 или меньше, показываем без изменений */
  if (path.length <= 4) {
    return path;
  }

  /** В ином случае (элементов >4) и компонент свёрнут, действует логика ниже */
  if (!isOpen) {
    /** Необходимо выяснить есть ли в списке пользователь, участвующий в согласовании ("Вы")
     * В этом случае, такой пользователь в быстром просмотре (свёрнутом состоянии компонента)
     * должен видеть 1 согласующего до него и 1 согласующего после него (если они есть)
     */
    const indexOfMe = path.findIndex((item: IRequestPath) => item.user[0].fullName === 'Вы');

    /** Обработчик случая, когда просматривающий согласование не являются согласующим.
     * indexOfMe элемента нет в списке массива
     */
    if (indexOfMe === -1) {
      /** В случае отсутствия "Вы" фокус отображения смещается на первый несогласованный шаг.
       * В этом шаге выясняем есть ли хоть один несогласованный шаг.
       */
      const indexOfReconciliation = path.findIndex((item: IRequestPath) => item.criticality === '0');

      /** Если все шаги согласованы, показываем последние 4 результата согласования цепочки */
      if (indexOfReconciliation === -1) {
        const lastFourResults = path.slice(-4);
        return lastFourResults;
      }

      /** Если все шаги не согласованы (заявка в начале согласования), показываем первые 4 шага согласования цепочки */
      if (indexOfReconciliation === 0) {
        const firstFourSteps = path.slice(0, 4);
        return firstFourSteps;
      }

      /** Если несогласованый шаг - предпоследний, показываем 2 результата до него, и один после */
      if (indexOfReconciliation === path.length - 2) {
        const fourSteps = path.slice(indexOfReconciliation - 2, indexOfReconciliation + 2);
        console.log(path[indexOfReconciliation + 1]);
        console.log(fourSteps);
        return fourSteps;
      }

      /** Если несогласованый шаг - последний, показываем 3 результата до него */
      if (indexOfReconciliation === path.length - 1) {
        const fourSteps = path.slice(-4);
        return fourSteps;
      }

      /** Во всех остальных случаях показываем 1 шаг до несогласованного шага, и два после (если такие есть) */
      const results = path
        .slice(indexOfReconciliation - 1, indexOfReconciliation + 3)
        .filter(item => !!item);

      return results;
    }

    /** Пользователь "Вы" присутствует в списке, показываем шаг до его решения, и 2 шага после его решения
     * (если они есть)
     */
    const results = path
      .slice(indexOfMe - 1, indexOfMe + 2)
      .filter(item => !!item);
    return results;
  }

  /** Во всех остальных случаях компонент развёрнут, показываем историю полностью с самого начала */
  return path;
};
