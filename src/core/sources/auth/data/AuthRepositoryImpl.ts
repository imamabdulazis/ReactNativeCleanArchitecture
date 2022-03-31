import {LoginParamsInterface} from '../../../../interface';
import requestAPI from '../../../../services/NetworkService';
import {DataError} from '../../../interactor/DataError';
import {Either} from '../../../interactor/Either';
import {AuthRepository} from '../domain/AuthRepository';
import {LoginDTO} from '../domain/dto/LoginDTO';

//dummy
const data: LoginDTO = {
  data: '',
};

export class AuthRepositoryImpl implements AuthRepository {
  login(params: LoginParamsInterface): Promise<Either<DataError, LoginDTO>> {
    return new Promise((resolve, reject) => {
      try {
        requestAPI('/todos', params, 3000, response => {
          if (response === Error) {
            resolve(Either.left(response));
          } else {
            //dummy
            resolve(Either.right(data));
          }
        });
      } catch (error) {
        reject(Either.left({kind: 'UnexpectedError', error}));
      }
    });
  }
}
