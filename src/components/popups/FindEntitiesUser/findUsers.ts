import axios, { AxiosInstance } from 'axios';
import { IUser } from '../../../types/projects.types';

const LIMIT = 10;

export const findUsers = (request: AxiosInstance) => (search: string, filter: string, skip: number) => {

  let query = '';

  for (let i = 0; i < search.length; i++) {
    if (!isNaN(+search[i]) || search[i].toLowerCase() !== search[i].toUpperCase()) {
      query += search[i];
    } else {
      query += ' ';
    }
  }

  let url = '';

  if (filter === 'all') {
    if (search.length < 3) {
      return [Promise.resolve([]), null] as [Promise<IUser[]>, null];
    }

    // eslint-disable-next-line max-len
    url = `sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IUserSearch?${search.length ? `$search=${encodeURIComponent(query)}&` : ''}$expand=departmentsPath&$skip=${skip}&$top=${LIMIT}`;
  } else {
    // eslint-disable-next-line max-len
    url = `sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/ITeamSearch?${search.length ? `$search=${encodeURIComponent(query)}&` : ''}$expand=departmentsPath`;
  }

  const signal = axios.CancelToken.source();
  const promise = request.get(url, { cancelToken: signal.token }).then(response => response.data);

  return [promise, null] as [Promise<IUser[]>, null];
};
