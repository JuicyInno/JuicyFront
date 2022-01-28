import { AxiosInstance } from 'axios';
import { FeedbackData } from './Feedback';
/**
 * Создание функции для отправки запроса на обратную связь
 * @param request Экземпляр axios'а для запросов.
 */
export const createPostFeedback = (request: AxiosInstance) =>
  /**
   * Создание заявки на обратную связь
   * @param data данные для обратной связи
   */
  (data: FeedbackData): Promise<any[]> => {
    const url = 'sap/opu/odata/sap/ZHRXSS_FDBK_SERV_NEW_SRV/messagesSet';

    return request.post(url, { ...data }).then(response => response.data.value);
  };

export default createPostFeedback;
