import {LoginParamsInterface} from '../../../../../interface';
import {
  loginInitialState,
  LoginState,
} from '@core/sources/auth/presentation/state/LoginState';
import {Bloc} from '../../../../interactor/Bloc';
import {DataError} from '../../../../interactor/DataError';
import {LoginUseCase} from '../../domain/useCase/LoginUseCase';

export class LoginBloc extends Bloc<LoginState> {
  constructor(private loginUseCase: LoginUseCase) {
    super(loginInitialState);
  }

  async requestLogin(params: LoginParamsInterface) {
    const loginResult = await this.loginUseCase.execute(params);

    loginResult.fold(
      error => {
        console.log('ERROR');
        this.changeState(this.handleError(error));
      },
      loginData => {
        console.log('DATA');
        this.changeState({
          kind: 'SuccessLoginState',
          data: loginData,
        });
      },
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
