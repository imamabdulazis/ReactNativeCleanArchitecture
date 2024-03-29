import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SFSymbols} from '@assets/symbols/SFSymbols';
import {getPlatformTabsIcon} from '@navigation/helpers/navigationIconHelpers';
import {useTranslation} from 'react-i18next';
import {Navigation} from 'react-native-navigation';

const NotificationScreen = (props: any) => {
  const {componentId} = props;
  const {t} = useTranslation();

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      bottomTab: {
        badge: '10',
        animateBadge: true,
        text: t('Notifications'),
        ...getPlatformTabsIcon(
          SFSymbols.bell,
          SFSymbols['bell.fill'],
          'notifications',
        ),
      },
    });
  }, [t, componentId]);

  return (
    <View style={styles.container}>
      <Text>Notifikasi</Text>
    </View>
  );
};

NotificationScreen.options = () => ({});

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
