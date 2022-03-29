import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {SFSymbols} from '@assets/symbols/SFSymbols';
import {getPlatformTabsIcon} from '@navigation/helpers/navigationIconHelpers';
import {useTranslation} from 'react-i18next';
import {Navigation} from 'react-native-navigation';

const ProfileScreen = (props: any) => {
  const {componentId} = props;
  const {t} = useTranslation();

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      bottomTab: {
        animateBadge: true,
        text: t('Profile'),
        ...getPlatformTabsIcon(
          SFSymbols['person.circle'],
          SFSymbols['person.circle.fill'],
          'person-pin',
        ),
      },
    });
  }, [t, componentId]);
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

ProfileScreen.options = () => ({});

export default ProfileScreen;
