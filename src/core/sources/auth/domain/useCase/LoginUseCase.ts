import {LoginParamsInterface} from '../../../../../interface';
import {DataError} from '../../../../interactor/DataError';
import {Either} from '../../../../interactor/Either';
import {AuthRepository} from '../AuthRepository';
import {LoginDTO} from '../dto/LoginDTO';

export class LoginUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  execute(params: LoginParamsInterface): Promise<Either<DataError, LoginDTO>> {
    return this.authRepository.login(params);
  }
}
