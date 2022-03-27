import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {getPlatformTabsIcon} from '@navigation/helpers/navigationIconHelpers';
import PostContainer from './components/PostContainer';
import {SFSymbols} from '@assets/symbols/SFSymbols';
import {Navigation} from 'react-native-navigation';
import StoryContainer from './components/StoryContainer';
import {platformNativeColor} from '@components/helpers/colorHelpers';
import {
  Colors,
  PlatformColorsAndroid,
  PlatformColorsIOS,
} from '@components/common/color';

const HomeScreen = (props: any) => {
  const {componentId} = props;
  const {t} = useTranslation();
  const [isSearch, setIsSearch] = useState(false);

  const onClickSearchButton = useCallback(() => {
    setIsSearch(!isSearch);
  }, [isSearch]);

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        searchBar: {
          visible: isSearch,
        },
        rightButtons: [
          {
            id: 'ChatButtonComponent_id',
            component: {
              name: 'ChatButtonComponent',
              passProps: {},
            },
          },
          {
            id: 'SearchButtonComponent_id',
            component: {
              name: 'SearchButtonComponent',
              passProps: {
                onClick: () => onClickSearchButton(),
              },
            },
          },
        ],
      },
    });
  }, [onClickSearchButton, isSearch, componentId]);

  /**
   * Change Language
   */
  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      bottomTab: {
        text: t('Home'),
      },
    });
  }, [t, componentId]);

  console.log(t('Hello World'));

  return (
    <View style={styles.container}>
      <ScrollView>
        <PostContainer />
        <StoryContainer />
      </ScrollView>
    </View>
  );
};

HomeScreen.options = () => ({
  topBar: {
    barStyle: 'default',
    hideOnScroll: true,
    title: {
      text: 'Facebook',
      fontWeight: 'bold',
      alignment: 'fill',
      fontSize: 25,
      color: platformNativeColor(
        PlatformColorsIOS.systemBlue,
        PlatformColorsAndroid.primary,
      ),
    },
    searchBar: {
      hideOnScroll: true,
      hideTopBarOnFocus: false,
      obscuresBackgroundDuringPresentation: true,
      hideNavBarOnFocusSearchBar: true,
      searchBarHiddenWhenScrolling: true,
      searchBarPlaceholder: 'Search',
    },
  },
  bottomTab: {
    ...getPlatformTabsIcon(SFSymbols.house, SFSymbols['house.fill'], 'home'),
  },
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgMain,
  },
});
