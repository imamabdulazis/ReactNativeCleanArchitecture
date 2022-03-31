import {AuthRepositoryImpl} from '../sources/auth/data/AuthRepositoryImpl';
import {LoginUseCase} from '../sources/auth/domain/useCase/LoginUseCase';
import {LoginBloc} from '../sources/auth/presentation/bloc/LoginBloc';

function providerAuthBloc(): LoginBloc {
  const authRepository = new AuthRepositoryImpl();

  /**
   * UseCase
   */
  const loginUseCase = new LoginUseCase(authRepository);

  /**
   * Bloc
   */
  const loginBloc = new LoginBloc(loginUseCase);

  return loginBloc;
}

export const dependenciesLocator = {
  providerAuthBloc,
};
