import {Navigation} from 'react-native-navigation';
import {setInitialRoot} from '@core/navigation/roots';

export function initializeApp() {
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setInitialRoot();
  });
}
