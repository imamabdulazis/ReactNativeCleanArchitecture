import axios, {AxiosInstance} from 'axios';

interface GetClientInterface {
  baseUrl: string;
  headers: object | any;
  timeout: number;
}

const getClient = ({baseUrl, headers, timeout}: GetClientInterface) => {
  const options = {
    baseURL: baseUrl,
    headers: headers,
    timeout: timeout,
  };

  const axiosClient = axios.create(options);
  return axiosClient;
};

class NetworkApiClient {
  client!: AxiosInstance;

  constructor(baseUrl: string, headers: object | any, timeout: number = 60000) {
    if (baseUrl === undefined) {
      console.log('Error while creating api client: baseUrl missing');
    } else {
      let clientParams: GetClientInterface = {baseUrl, headers, timeout};
      this.client = getClient(clientParams);
    }
  }

  getEncryptedParams(params: any) {
    return params;
  }

  decryptResponse(response: any) {
    return response;
  }

  request(endpoint: string, config = {}) {
    let configWithUrl = {...config, ...{url: endpoint}};
    return this.client
      .request(configWithUrl)
      .then(response => {
        console.log(response.data);
        return Promise.resolve(response);
      })
      .catch(responseError => {
        console.log(responseError);
        return Promise.reject(responseError);
      });
  }

  /**
   * GET
   */
  get(endpoint: string, config = {}) {
    return this.request(endpoint, {...config, ...{method: 'get'}});
  }

  getWithConfiguration(
    endpoint: string,
    headers: any,
    queryParams: any,
    timeout: number,
  ) {
    return this.get(endpoint, {
      headers: headers,
      params: queryParams,
      timeout: timeout,
    });
  }

  getWithHeadersConfiguration(endpoint: string, headers: any, timeout: number) {
    return this.get(endpoint, {headers: headers, timeout: timeout});
  }

  getWithQueryParamsConfiguration(
    endpoint: any,
    queryParams: any,
    timeout: number,
  ) {
    return this.get(endpoint, {params: queryParams, timeout: timeout});
  }

  getWithTimeoutConfiguration(endpoint: string, timeout: number) {
    return this.get(endpoint, {timeout: timeout});
  }

  /**
   * DELETE
   */
  delete(endpoint: string, config = {}) {
    return this.request(endpoint, {...config, ...{method: 'delete'}});
  }

  deleteWithConfiguration(
    endpoint: string,
    headers: any,
    queryParams: any,
    timeout: number,
  ) {
    return this.delete(endpoint, {
      headers: headers,
      params: queryParams,
      timeout: timeout,
    });
  }

  deleteWithHeadersConfiguration(
    endpoint: string,
    headers: any,
    timeout: number,
  ) {
    return this.delete(endpoint, {headers: headers, timeout: timeout});
  }

  deleteWithQueryParamsConfiguration(
    endpoint: string,
    queryParams: any,
    timeout: number,
  ) {
    return this.delete(endpoint, {params: queryParams, timeout: timeout});
  }

  deleteWithTimeoutConfiguration(endpoint: string, timeout: number) {
    return this.delete(endpoint, {timeout: timeout});
  }

  /**
   * HEAD
   */
  head(endpoint: string, config = {}) {
    return this.request(endpoint, {...config, ...{method: 'head'}});
  }

  headWithConfiguration(
    endpoint: string,
    headers: any,
    queryParams: any,
    timeout: number,
  ) {
    return this.head(endpoint, {
      headers: headers,
      params: queryParams,
      timeout: timeout,
    });
  }

  headWithHeadersConfiguration(
    endpoint: string,
    headers: any,
    timeout: number,
  ) {
    return this.head(endpoint, {headers: headers, timeout: timeout});
  }

  headWithQueryParamsConfiguration(
    endpoint: string,
    queryParams: any,
    timeout: number,
  ) {
    return this.head(endpoint, {params: queryParams, timeout: timeout});
  }

  headWithTimeoutConfiguration(endpoint: string, timeout: number) {
    return this.head(endpoint, {timeout: timeout});
  }

  /**
   * OPTIONS
   */
  options(endpoint: string, config = {}) {
    return this.request(endpoint, {...config, ...{method: 'options'}});
  }

  optionsWithConfiguration(
    endpoint: string,
    headers: any,
    queryParams: any,
    timeout: number,
  ) {
    return this.options(endpoint, {
      headers: headers,
      params: queryParams,
      timeout: timeout,
    });
  }

  optionsWithHeadersConfiguration(
    endpoint: string,
    headers: any,
    timeout: number,
  ) {
    return this.options(endpoint, {headers: headers, timeout: timeout});
  }

  optionsWithQueryParamsConfiguration(
    endpoint: string,
    queryParams: any,
    timeout: number,
  ) {
    return this.options(endpoint, {params: queryParams, timeout: timeout});
  }

  optionsWithTimeoutConfiguration(endpoint: string, timeout: number) {
    return this.options(endpoint, {timeout: timeout});
  }

  /**
   *  POST
   */
  post(endpoint: string, params = {}, config = {}) {
    return this.request(endpoint, {
      ...config,
      ...{method: 'post', data: params},
    });
  }

  postWithConfiguration(
    endpoint: string,
    params: any,
    headers: any,
    queryParams: any,
    timeout: number,
  ) {
    return this.post(endpoint, params, {
      headers: headers,
      timeout: timeout,
      params: queryParams,
    });
  }

  postWithHeadersConfiguration(endpoint: string, params: any, headers: any) {
    return this.post(endpoint, params, headers);
  }

  postWithTimeoutConfiguration(
    endpoint: string,
    params: any,
    timeout: number,
    queryParams: any,
  ) {
    return this.post(endpoint, params, {timeout: timeout, params: queryParams});
  }

  postWithQueryParamsConfiguration(
    endpoint: string,
    params: any,
    queryParams: any,
    timeout: number,
  ) {
    return this.post(endpoint, params, {params: queryParams, timeout: timeout});
  }

  /**
   * PUT
   */
  put(endpoint: string, params = {}, config = {}) {
    return this.request(endpoint, {
      ...config,
      ...{method: 'put', data: params},
    });
  }

  putWithConfiguration(
    endpoint: string,
    params: any,
    headers: any,
    queryParams: any,
    timeout: number,
  ) {
    return this.put(endpoint, params, {
      headers: headers,
      timeout: timeout,
      params: queryParams,
    });
  }

  putWithHeadersConfiguration(endpoint: string, params: any, headers: any) {
    return this.put(endpoint, params, headers);
  }

  putWithTimeoutConfiguration(
    endpoint: string,
    params: any,
    timeout: number,
    queryParams: any,
  ) {
    return this.put(endpoint, params, {timeout: timeout, params: queryParams});
  }

  putWithQueryParamsConfiguration(
    endpoint: string,
    params: any,
    queryParams: any,
    timeout: number,
  ) {
    return this.put(endpoint, params, {params: queryParams, timeout: timeout});
  }

  /**
   * PATCH
   */
  patch(endpoint: string, params = {}, config = {}) {
    return this.request(endpoint, {
      ...config,
      ...{method: 'patch', data: params},
    });
  }

  patchWithConfiguration(
    endpoint: string,
    params: any,
    headers: any,
    queryParams: any,
    timeout: number,
  ) {
    return this.patch(endpoint, params, {
      headers: headers,
      timeout: timeout,
      params: queryParams,
    });
  }

  patchWithHeadersConfiguration(endpoint: string, params: any, headers: any) {
    return this.patch(endpoint, params, headers);
  }

  patchWithTimeoutConfiguration(
    endpoint: string,
    params: any,
    timeout: number,
    queryParams: any,
  ) {
    return this.patch(endpoint, params, {
      timeout: timeout,
      params: queryParams,
    });
  }

  patchWithQueryParamsConfiguration(
    endpoint: string,
    params: any,
    queryParams: any,
    timeout: number,
  ) {
    return this.patch(endpoint, params, {
      params: queryParams,
      timeout: timeout,
    });
  }

  /**
   * UPLOAD FILE
   */
  uploadWithConfiguration(
    endpoint: string,
    params: any,
    headers: any,
    queryParams: any,
    timeout: number,
    method = 'post',
    config = {},
  ) {
    return this.request(endpoint, {
      ...config,
      ...{
        method: method,
        data: params,
        params: queryParams,
        headers: headers,
        timeout: timeout,
      },
    });
  }
}

export default NetworkApiClient;
