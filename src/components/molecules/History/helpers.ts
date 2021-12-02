import { VariantClassic } from '../../../types';
import { IRequestPath } from '../../../types/projects.types';

export const statusValue: {[index: string]: VariantClassic} = {
  '0': 'default',
  '1': 'red',
  '2': 'yellow',
  '3': 'green',
  '4': 'blue'
};

/** Фильтруем историю компонента.
 * Изначально история свёрнута до одного элемента.
 * Первый элемент в свёрнутом состоянии является последним, ожидающим решения по согласованию, шагом.
 * @param {IRequestPath[]}  history массив элементов истории
 * @param {boolean}  expanded флаг состояния (открыто - закрыто)
 * @returns {IRequestPath[]} отфильтрованный массив элементов истории
 * */
export const onPathFilter = (history: IRequestPath[], expanded: boolean): IRequestPath[] => {
  const find = history.findIndex((i: IRequestPath) => {
    return !i.date;
  });

  let step;

  if (find === -1) {
    step = history.length - 1;
  } else {
    step = find;
  }

  return expanded ? history : [history[step]];
};
