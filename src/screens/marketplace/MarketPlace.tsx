import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Navigation} from 'react-native-navigation';

import {getPlatformTabsIcon} from '@navigation/helpers/navigationIconHelpers';
import {SFSymbols} from '@assets/symbols/SFSymbols';

const MarketPlace = (props: any) => {
  const {componentId} = props;
  const {t} = useTranslation();

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      bottomTab: {
        animateBadge: true,
        text: t('Marketplace'),
        ...getPlatformTabsIcon(
          SFSymbols['suitcase.cart'],
          SFSymbols['suitcase.cart.fill'],
          'storefront',
        ),
      },
    });
  }, [t, componentId]);

  return (
    <View style={styles.container}>
      <Text>MarketPlace</Text>
    </View>
  );
};

MarketPlace.options = () => ({});

export default MarketPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
