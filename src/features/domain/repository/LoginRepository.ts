import {DataError} from '@core/common/interactor/DataError';
import {Either} from '@core/common/interactor/Either';
import {LoginDTO} from '@domain/entities/LoginDTO';

export interface LoginRepository {
  post(
    username: string,
    password: string,
  ): Promise<Either<DataError, LoginDTO>>;
}
