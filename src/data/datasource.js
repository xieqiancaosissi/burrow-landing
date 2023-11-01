import { parseResponse, URLForEndpoint } from './request';
import { getConfig, defaultNetwork } from '../services/config';

const config = getConfig(defaultNetwork);

class DataSource {
  static get shared() {
    if (!DataSource.instance) {
      DataSource.instance = new DataSource();
    }
    return DataSource.instance;
  }

  // eslint-disable-next-line class-methods-use-this,default-param-last
  async callAPI(endPoint, method = 'GET', queryObject, requestBody, host) {
    const url = URLForEndpoint(endPoint, queryObject, host);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');

    const request = {
      headers,
      method,
    };
    if (method !== 'GET' && requestBody) {
      request.body = JSON.stringify(requestBody);
    }

    let response;
    try {
      response = await fetch(url, request);
    } catch (err) {
      throw new Error('Failed to connect server');
    }

    try {
      const json = await parseResponse(response);
      return json;
    } catch (err) {
      throw err;
    }
  }

  getBurrowData() {
    return this.callAPI(`/get_burrow_data`, 'GET', null, null, config?.internalApi);
  }
}

export default DataSource;
