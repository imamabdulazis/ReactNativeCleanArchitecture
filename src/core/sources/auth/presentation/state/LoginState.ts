import {LoginDTO} from '../../domain/dto/LoginDTO';

export interface RequestLoginState {
  params: {};
}

export interface LoadingLoginState {
  kind: 'LoadingLoginState';
}

export interface SuccessLoginState {
  kind: 'SuccessLoginState';
  data: LoginDTO;
}

export interface ErrorLoginState {
  kind: 'ErrorLoginState';
  error: string;
}

export type LoginState =
  | LoadingLoginState
  | SuccessLoginState
  | ErrorLoginState;

export const loginInitialState: LoginState & RequestLoginState = {
  kind: 'LoadingLoginState',
  params: {},
};
