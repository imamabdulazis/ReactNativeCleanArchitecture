import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {getStorybookUI} from '@storybook/react-native';
import {PlatformColorsAndroid, PlatformColorsIOS} from '@core/common/color';
import {isAndroid} from '@core/common/commonConsts';
import {platformNativeColor} from '@core/helpers/colorHelpers';
import {Pages} from './constants/allPages';
import SplashScreen from '@presentation/views/splash/SplashScreen';
import OnBoardingScreen from '@presentation/views/onboarding/OnboardingScreen';
import SettingScreen from '@presentation/views/setting/SettingScreen';
import ProfileScreen from '@presentation/views/profile/ProfileScreen';
import SearchScreen from '@presentation/views/search/SearchScreen';
import HomeScreen from '@presentation/views/home/HomeScreen';

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
      drawBehind: !isAndroid,
      background: {
        translucent: false,
        color: platformNativeColor(
          PlatformColorsIOS.secondarySystemBackground,
          PlatformColorsAndroid.background,
        ),
      },
      title: {
        // color: platformNativeColor(
        //   undefined,
        //   PlatformColorsAndroid.onPrimaryText,
        // ),
      },
      largeTitle: {
        visible: false,
      },
      scrollEdgeAppearance: {
        active: true,
        noBorder: true,
        background: {
          translucent: true,
          color: platformNativeColor(
            PlatformColorsIOS.secondarySystemBackground,
            PlatformColorsAndroid.navigation,
          ),
        },
      },
      searchBar: {
        visible: false,
        hideOnScroll: true,
        hideTopBarOnFocus: true,
        obscuresBackgroundDuringPresentation: true,
      },
      hideNavBarOnFocusSearchBar: false,
      searchBarHiddenWhenScrolling: true,
      searchBarPlaceholder: 'Search',
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

export function registerComponent() {
  if (__DEV__) {
    Navigation.registerComponent(Pages.storybook.name, () => StorybookUIRoot);
  }

  Navigation.registerComponent(Pages.splash.name, () => SplashScreen);
  Navigation.registerComponent(Pages.onboarding.name, () => OnBoardingScreen);
  Navigation.registerComponent(Pages.main.name, () => HomeScreen);
  Navigation.registerComponent(Pages.search.name, () => SearchScreen);
  Navigation.registerComponent(Pages.setting.name, () => SettingScreen);
  Navigation.registerComponent(Pages.profile.name, () => ProfileScreen);
}
