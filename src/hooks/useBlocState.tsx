import {useEffect, useState} from 'react';
import {Bloc} from '@core/interactor/Bloc';

export function useBlocState<S>(bloc: Bloc<S>) {
  const [state, setState] = useState(bloc.state);

  useEffect(() => {
    const stateSubscription = (s: S) => {
      setState(s);
    };

    bloc.subscribe(stateSubscription);

    return () => bloc.unsubscribe(stateSubscription);
  }, [bloc]);

  return state;
}
