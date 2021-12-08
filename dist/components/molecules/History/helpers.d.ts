import { VariantClassic } from '../../../types';
import { IRequestPath } from '../../../types/projects.types';
export declare const statusValue: {
    [index: string]: VariantClassic;
};
/** Фильтруем историю компонента.
 * Изначально история свёрнута до одного элемента.
 * Первый элемент в свёрнутом состоянии является последним, ожидающим решения по согласованию, шагом.
 * @param {IRequestPath[]}  history массив элементов истории
 * @param {boolean}  expanded флаг состояния (открыто - закрыто)
 * @returns {IRequestPath[]} отфильтрованный массив элементов истории
 * */
export declare const onPathFilter: (history: IRequestPath[], expanded: boolean) => IRequestPath[];
