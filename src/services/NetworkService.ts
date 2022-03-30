import NetworkApiClient from './NetworkClient';

function requestAPI(
  url: string,
  timeOut: number,
  headers: any,
  callback: (val: any) => void,
) {
  const apiClient = new NetworkApiClient(url, headers, timeOut);
  let promise = apiClient.getWithHeadersConfiguration(url, headers, timeOut);
  promise.then(
    (result: any) => {
      callback(result);
    },
    (error: unknown) => {
      callback(error);
    },
  );
}

export default requestAPI;
