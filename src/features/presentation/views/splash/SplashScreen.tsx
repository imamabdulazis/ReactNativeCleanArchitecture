import {setTabsRoot} from '@core/navigation/roots';
import React from 'react';
import {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

const SplashScreen: NavigationFunctionComponent = () => {
  useEffect(() => {
    setTimeout(() => {
      setTabsRoot();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  );
};

export default SplashScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
