import {DataError} from '@core/common/interactor/DataError';
import {Ploc} from '@core/common/interactor/Ploc';
import {PostLoginUseCase} from '@domain/usecase/LoginUseCase';
import {loginInitialState, LoginState} from './LoginState';

export class LoginPloc extends Ploc<LoginState> {
  constructor(private loginUseCase: PostLoginUseCase) {
    super(loginInitialState);
  }

  async requestLogin({email, password}: any) {
    const loginResult = await this.loginUseCase.execute(email, password);

    loginResult.fold(
      error => this.changeState(this.handleError(error)),
      loginData =>
        this.changeState({
          kind: 'SuccessLoginState',
          token: loginData.access_token,
        }),
    );
  }

  private handleError(error: DataError): LoginState {
    switch (error.kind) {
      case 'UnexpectedError': {
        return {
          kind: 'ErrorLoginState',
          error: error.error.message,
        };
      }
    }
  }
}
