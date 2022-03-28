import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {getPlatformTabsIcon} from '@navigation/helpers/navigationIconHelpers';
import {SFSymbols} from '@assets/symbols/SFSymbols';
import {Colors} from '@components/common/color';
import MainMenuItem from './components/MainMenuItem';

const SettingScreen = (props: any) => {
  const {componentId} = props;
  const {t} = useTranslation();

  const onPressLanguage = () => {};

  /**
   * Change Language
   */
  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: t('Setting & Privacy'),
        },
      },
      bottomTab: {
        text: t('Home'),
      },
    });
  }, [t, componentId]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContent}>
          <Text style={styles.headerContentTitle}>Preferences</Text>
          <Text>Customize your experience on Facebook</Text>
        </View>
        <MainMenuItem
          onPress={onPressLanguage}
          icon={'ios-globe-outline'}
          title={'Language and Region'}
        />
        <MainMenuItem
          onPress={() => {}}
          icon={'ios-moon-outline'}
          title={'Dark Mode'}
        />
      </ScrollView>
    </View>
  );
};

SettingScreen.options = () => ({
  topBar: {
    barStyle: 'default',
    hideOnScroll: true,
  },
  bottomTab: {
    ...getPlatformTabsIcon(SFSymbols.house, SFSymbols['house.fill'], 'home'),
  },
});

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgMain,
  },
  headerContent: {
    marginTop: 0.5,
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerContentTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
