import {PostLoginUseCase} from '@domain/usecase/LoginUseCase';
import {LoginPloc} from '@presentation/views/login/LoginPloc';

function provideLoginPloc(): LoginPloc {
  // const loginRepository=new LoginRe
  const postLoginUseCase = new PostLoginUseCase();
  const loginPloc = new LoginPloc(postLoginUseCase);
  return loginPloc;
}

export default provideLoginPloc;
