import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Colors} from '@components/common/color';
import MainMenuItem from './components/MainMenuItem';
import {Pages} from '../../navigation/constants/pages';

const SettingScreen = (props: any) => {
  const {componentId} = props;
  const {t} = useTranslation();

  const onPressLanguage = () => {
    Navigation.push(componentId, {
      component: {
        id: Pages.language.id,
        name: Pages.language.name,
        options: {
          bottomTabs: {
            visible: false,
            drawBehind: true,
          },
        },
      },
    });
  };

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
    });
  }, [t, componentId]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContent}>
          <Text style={styles.headerContentTitle}>{t('Preferences')}</Text>
          <Text>{t('Customize your experience on Facebook')}</Text>
        </View>
        <MainMenuItem
          onPress={onPressLanguage}
          icon={'ios-globe-outline'}
          title={t('Language and Region')}
        />
        <MainMenuItem
          onPress={() => {}}
          icon={'ios-moon-outline'}
          title={t('Dark Mode')}
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
