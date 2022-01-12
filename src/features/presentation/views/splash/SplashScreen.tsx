import {Colors} from '@core/common/color';
import {screenDimensions} from '@core/common/commonConsts';
import {setAuthenticationRoot} from '@core/navigation/roots';
import React from 'react';
import {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

const SplashScreen: NavigationFunctionComponent = () => {
  useEffect(() => {
    setTimeout(() => {
      setAuthenticationRoot();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/logo.png')}
        style={styles.mainLogo}
      />
      <View style={styles.company}>
        <Text style={styles.from}>from</Text>
        <Image
          source={require('../../../../assets/images/meta.png')}
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
