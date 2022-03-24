import {Navigation} from 'react-native-navigation';
import {setInitialRoot} from '@navigation/roots';
import {registerComponent, setDefaultOptions} from '@navigation/navigation';
import {setDefaultOrientation} from '@navigation/helpers/orientationHelpers';

export const initializeApp = () => {
  registerComponent();
  setDefaultOrientation();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setInitialRoot();
  });
};
