import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {getStorybookUI} from '@storybook/react-native';
import {platformNativeColor} from '@components/helpers/colorHelpers';
import {Pages} from './constants/pages';
import SettingScreen from '@screens/setting/SettingScreen';
import ProfileScreen from '@screens/profile/ProfileScreen';
import SearchScreen from '@screens/search/SearchScreen';
import HomeScreen from '@screens/home/HomeScreen';
import LoginScreen from '@screens/login/LoginScreen';
import SplashScreen from '@screens/splash/SplashScreen';
import {
  PlatformColorsAndroid,
  PlatformColorsIOS,
} from '@components/common/color';
import SearchButton from '@components/general/SearchButton';
import ChatButton from '@components/general/ChatButton';

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
      largeTitle: {
        visible: false,
      },
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
 * Register all screen here
 */
export function registerComponent() {
  if (__DEV__) {
    Navigation.registerComponent(Pages.storybook.name, () => StorybookUIRoot);
  }

  Navigation.registerComponent(Pages.splash.name, () => SplashScreen);
  Navigation.registerComponent(Pages.login.name, () => LoginScreen);
  Navigation.registerComponent(Pages.home.name, () => HomeScreen);
  Navigation.registerComponent(Pages.search.name, () => SearchScreen);
  Navigation.registerComponent(Pages.setting.name, () => SettingScreen);
  Navigation.registerComponent(Pages.profile.name, () => ProfileScreen);

  //component
  Navigation.registerComponent('SearchButtonComponent', () => SearchButton);
  Navigation.registerComponent('ChatButtonComponent', () => ChatButton);
}
