import NetworkApiClient from './NetworkClient';

function requestAPI(
  url: string,
  params: any,
  timeOut?: number,
  callback?: (val: any) => void,
) {
  const apiClient = new NetworkApiClient(
    (url = 'https://jsonplaceholder.typicode.com'),
    (timeOut = 9000),
  );
  let promise = apiClient.getWithQueryParamsConfiguration(url, params, timeOut);
  promise.then(
    (result: any) => {
      callback!(result);
    },
    (error: Error) => {
      callback!(error);
    },
  );
}

export default requestAPI;
