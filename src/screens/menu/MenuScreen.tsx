import React, {useCallback, useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  PlatformColorsAndroid,
  PlatformColorsIOS,
} from '@components/common/color';
import {platformNativeColor} from '@components/helpers/colorHelpers';
import {getPlatformTabsIcon} from '@navigation/helpers/navigationIconHelpers';
import {SFSymbols} from '@assets/symbols/SFSymbols';
import {useTranslation} from 'react-i18next';
import {Navigation} from 'react-native-navigation';
import {Pages} from '../../navigation/constants/pages';

const MenuScreen = (props: any) => {
  const {componentId} = props;
  const {t} = useTranslation();

  const onPressSetting = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        name: Pages.setting.name,
        id: Pages.setting.id,
        options: {
          bottomTabs: {
            visible: false,
            drawBehind: true,
          },
        },
      },
    });
  }, [componentId]);

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: t('Menu'),
        },
        rightButtons: [
          {
            id: 'SearchButtonComponent_id',
            component: {
              name: 'SearchButtonComponent',
              passProps: {
                onClick: () => {},
              },
            },
          },
          {
            id: 'SettingButtonComponent_id',
            component: {
              name: 'SettingButtonComponent',
              passProps: {
                onClick: onPressSetting,
              },
            },
          },
        ],
      },
      bottomTab: {
        text: t('Menu'),
        ...getPlatformTabsIcon(
          SFSymbols['line.horizontal.3.decrease'],
          SFSymbols['line.horizontal.3.decrease'],
          'menu',
        ),
      },
    });
  }, [t, componentId, onPressSetting]);

  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

MenuScreen.options = () => ({
  topBar: {
    barStyle: 'default',
    hideOnScroll: true,
    title: {
      alignment: 'fill',
      fontSize: 20,
      color: platformNativeColor(
        PlatformColorsIOS.label,
        PlatformColorsAndroid.primaryText,
      ),
    },
  },
});

export default MenuScreen;
