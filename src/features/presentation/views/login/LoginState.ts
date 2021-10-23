export interface RequestLoginState {
  kind: 'RequestLoginState';
  params: {};
}

export interface LoadingLoginState {
  kind: 'LoadingLoginState';
}

export interface SuccessLoginState {
  kind: 'SuccessLoginState';
  token: string;
}

export interface ErrorLoginState {
  kind: 'ErrorLoginState';
  error: string;
}

export type LoginState =
  | RequestLoginState
  | LoadingLoginState
  | SuccessLoginState
  | ErrorLoginState;

export const loginInitialState: LoginState = {
  kind: 'RequestLoginState',
  params: {},
};
