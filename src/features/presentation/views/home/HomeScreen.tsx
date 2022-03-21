import {
  Colors,
  PlatformColorsAndroid,
  PlatformColorsIOS,
} from '@core/common/color';
import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {getPlatformTabsIcon} from '@core/navigation/helpers/navigationIconHelpers';
import PostContainer from './components/PostContainer';
import {SFSymbols} from '@assets/symbols/SFSymbols';
import {platformNativeColor} from '@core/helpers/colorHelpers';
import {Navigation} from 'react-native-navigation';
import StoryContainer from './components/StoryContainer';

const HomeScreen = (props: any) => {
  const [isSearch, setIsSearch] = useState(false);

  const onClickSearchButton = useCallback(() => {
    setIsSearch(!isSearch);
  }, [isSearch]);

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
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
  }, [onClickSearchButton, isSearch, props.componentId]);

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
