import {Navigation} from 'react-native-navigation';
import {setInitialRoot} from '@core/navigation/roots';
import {
  registerComponent,
  setDefaultOptions,
} from '@core/navigation/navigation';
import {setDefaultOrientation} from '@core/navigation/helpers/orientationHelpers';

export const initializeApp = () => {
  registerComponent();
  setDefaultOrientation();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setInitialRoot();
  });
};
