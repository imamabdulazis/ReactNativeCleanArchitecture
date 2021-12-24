import {DataError} from '@core/interactor/DataError';
import {Either} from '@core/interactor/Either';
import {LoginDTO} from '@domain/entities/LoginDTO';
import {LoginRepository} from '@domain/repository/LoginRepository';

export class PostLoginUseCase {
  private loginRepository: LoginRepository;

  constructor(loginRepository: LoginRepository) {
    this.loginRepository = loginRepository;
  }

  execute(
    email: string,
    password: string,
  ): Promise<Either<DataError, LoginDTO>> {
    return this.loginRepository.post(email, password);
  }
}
