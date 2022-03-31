import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {getStorybookUI} from '@storybook/react-native';

import {
  PlatformColorsAndroid,
  PlatformColorsIOS,
} from '@components/common/color';
import {platformNativeColor} from '@components/helpers/colorHelpers';
import {Pages} from './constants/pages';
import {WrappedComponent} from '../hoc';

import SettingScreen from '@screens/Setting/SettingScreen';
import ProfileScreen from '@screens/Profile/ProfileScreen';
import SearchScreen from '@screens/Search/SearchScreen';
import HomeScreen from '@screens/Home/HomeScreen';
import LoginScreen from '@screens/Login/LoginScreen';
import SplashScreen from '@screens/Splash/SplashScreen';
import SearchButton from '@components/general/Button/SearchButton';
import ChatButton from '@components/general/Button/ChatButton';
import NotificationScreen from '@screens/Notification/NotificationScreen';
import SettingButton from '@components/general/Button/SettingButton';
import LanguageScreen from '@screens/Language/LanguageScreen';
import MarketPlace from '@screens/marketplace/MarketPlace';
import MenuScreen from '@screens/menu/MenuScreen';

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export function setDefaultOptions() {
  Navigation.setDefaultOptions({
    animations: {
      setRoot: {
        waitForRender: true,
      },
      setStackRoot: {
        waitForRender: true,
      },
    },
    layout: {
      componentBackgroundColor: platformNativeColor(
        PlatformColorsIOS.secondarySystemBackground,
        PlatformColorsAndroid.background,
      ),
    },
    topBar: {
      animate: true,
      drawBehind: true,
      backButton: {
        showTitle: false,
      },
      // background: {
      //   translucent: false,
      //   color: platformNativeColor(
      //     PlatformColorsIOS.systemFill,
      //     PlatformColorsAndroid.background,
      //   ),
      // },
      // title: {
      //   color: platformNativeColor(
      //     undefined,
      //     PlatformColorsAndroid.onPrimaryText,
      //   ),
      // },
      // largeTitle: {
      //   visible: false,
      // },
      scrollEdgeAppearance: {
        active: true,
        noBorder: true,
        // background: {
        //   translucent: true,
        //   color: platformNativeColor(
        //     PlatformColorsIOS.secondarySystemBackground,
        //     PlatformColorsAndroid.navigation,
        //   ),
        // },
      },
      noBorder: false,
    },
    bottomTabs: {
      animate: false,
      titleDisplayMode: 'alwaysShow',
      hideShadow: true,
      translucent: true,
      animateTabSelection: false,
      barStyle: 'default',
      preferLargeIcons: true,
      tabsAttachMode: 'afterInitialTab',
      backgroundColor: platformNativeColor(
        PlatformColorsIOS.secondarySystemBackground,
        PlatformColorsAndroid.background,
      ),
      ...Platform.select({
        android: {
          translucent: true,
          borderWidth: 1,
          borderColor: platformNativeColor(
            undefined,
            PlatformColorsAndroid.divider,
          ),
        },
      }),
    },
    bottomTab: {
      selectedTextColor: platformNativeColor(
        PlatformColorsIOS.systemBlue,
        PlatformColorsAndroid.primary,
      ),
      selectedIconColor: platformNativeColor(
        PlatformColorsIOS.systemBlue,
        PlatformColorsAndroid.primary,
      ),
      textColor: platformNativeColor(
        PlatformColorsIOS.secondaryLabel,
        PlatformColorsAndroid.secondaryText,
      ),
      iconColor: platformNativeColor(
        PlatformColorsIOS.secondaryLabel,
        PlatformColorsAndroid.secondaryText,
      ),
    },
    statusBar: {
      backgroundColor: platformNativeColor(
        undefined,
        PlatformColorsAndroid.statusbar,
      ),
      visible: true,
    },
  });
}
/**
 * Register all screen and components
 */
export function registerComponent() {
  if (__DEV__) {
    Navigation.registerComponent(Pages.storybook.name, () => StorybookUIRoot);
  }

  /**
   * register all screen
   */
  Navigation.registerComponent(
    Pages.splash.name,
    () => WrappedComponent(SplashScreen),
    () => SplashScreen,
  );
  /**
   * Auth Screen and other children
   */
  Navigation.registerComponent(
    Pages.login.name,
    () => WrappedComponent(LoginScreen),
    () => LoginScreen,
  );
  /**
   * Home Screen and other children
   */
  Navigation.registerComponent(
    Pages.home.name,
    () => WrappedComponent(HomeScreen),
    () => HomeScreen,
  );
  Navigation.registerComponent(
    Pages.search.name,
    () => WrappedComponent(SearchScreen),
    () => SearchScreen,
  );

  /**
   * Marketplace Screen and other children
   */
  Navigation.registerComponent(
    Pages.marketplace.name,
    () => WrappedComponent(MarketPlace),
    () => MarketPlace,
  );

  /**
   * Profile Screen and other children
   */
  Navigation.registerComponent(
    Pages.profile.name,
    () => WrappedComponent(ProfileScreen),
    () => ProfileScreen,
  );
  /**
   * Notification Screen and other children
   */
  Navigation.registerComponent(
    Pages.notification.name,
    () => WrappedComponent(NotificationScreen),
    () => NotificationScreen,
  );
  /**
   * Menu Screen and other children
   */
  Navigation.registerComponent(
    Pages.menu.name,
    () => WrappedComponent(MenuScreen),
    () => MenuScreen,
  );
  Navigation.registerComponent(
    Pages.setting.name,
    () => WrappedComponent(SettingScreen),
    () => SettingScreen,
  );
  Navigation.registerComponent(
    Pages.language.name,
    () => WrappedComponent(LanguageScreen),
    () => LanguageScreen,
  );

  /**
   * register all custom components
   */
  //button
  Navigation.registerComponent('SearchButtonComponent', () => SearchButton);
  Navigation.registerComponent('ChatButtonComponent', () => ChatButton);
  Navigation.registerComponent('SettingButtonComponent', () => SettingButton);
}
