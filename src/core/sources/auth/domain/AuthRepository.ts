import {Either} from '@core/interactor/Either';
import {DataError} from '@core/interactor/DataError';
import {LoginParamsInterface} from '../../../../interface';
import {LoginDTO} from './dto/LoginDTO';

export interface AuthRepository {
  login(params: LoginParamsInterface): Promise<Either<DataError, LoginDTO>>;
}
