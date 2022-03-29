import React, {useEffect} from 'react';
import {setAuthenticationRoot, setTabsRoot} from '@navigation/roots';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from '@components/common/color';
import {screenDimensions} from '@components/common/commonConst';

const SplashScreen: NavigationFunctionComponent = () => {
  useEffect(() => {
    (async function () {
      const isLogin = AsyncStorage.getItem('@login');

      if (isLogin !== null) {
        setTimeout(() => {
          setTabsRoot();
        }, 1000);
      } else {
        setTimeout(() => {
          setAuthenticationRoot();
        }, 1000);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/logo.png')}
        style={styles.mainLogo}
      />
      <View style={styles.company}>
        <Text style={styles.from}>from</Text>
        <Image
          source={require('@assets/images/meta.png')}
          style={styles.metaLogo}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLogo: {
    width: screenDimensions.width / 4,
    height: screenDimensions.width / 4,
  },
  metaLogo: {
    width: screenDimensions.width / 4,
    height: screenDimensions.width / 8,
  },
  company: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 30,
  },
  from: {
    fontWeight: '600',
    color: 'grey',
  },
});
