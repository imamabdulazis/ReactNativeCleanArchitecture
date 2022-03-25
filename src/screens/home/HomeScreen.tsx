import React, {useCallback, useEffect, useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
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
import {useTranslationContext} from '@contexts/translationContext/TranslationContext';
import {useTranslation} from 'react-i18next';

const HomeScreen = (props: any) => {
  const {componentId} = props;
  const {t} = useTranslation();
  const {switchLang} = useTranslationContext();

  const [isSearch, setIsSearch] = useState(false);

  const onSwitchLang = (lang: string) => {
    switchLang(lang);
  };

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

  console.log(t('Hello World'));

  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>{t('Hello World')}</Text>
      <View
        style={{
          alignItems: 'center',
          marginTop: 100,
          justifyContent: 'center',
        }}>
        <Button title="ENGLISH" onPress={() => onSwitchLang('en')} />
        <Button title="JAPAN" onPress={() => onSwitchLang('ja')} />
        <Button title="FRANCE" onPress={() => onSwitchLang('fr')} />
        <Button title="INDO" onPress={() => onSwitchLang('id')} />
      </View>
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
    text: 'News Feed',
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
