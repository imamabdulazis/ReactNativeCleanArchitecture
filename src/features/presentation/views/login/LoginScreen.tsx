import React from 'react';
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {screenDimensions} from '@core/common/commonConsts';
import {Colors} from '@core/common/color';
import {TouchableOpacity} from 'react-native-gesture-handler';

const headerSource = require('../../../../assets/images/header-login.jpeg');

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <FastImage source={headerSource} style={styles.headerLogin} />
      <View style={styles.inputArea}>
        <TextInput placeholder="Phone number or email" style={styles.input} />

        <View style={styles.divider} />

        <TextInput placeholder="Password" style={styles.input} />
      </View>
      <View style={styles.centerButton}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.titleButton}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity>
          <Text style={styles.forgetTitle}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orContainer}>
        <View style={styles.row}>
          <View style={styles.line} />
          <Text style={styles.orTitle}> Or </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.newAccountButton}>
          <Text style={styles.titleNewAccount}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLogin: {
    width: screenDimensions.width,
    height: screenDimensions.width / 2,
  },
  inputArea: {
    margin: 20,
    backgroundColor: 'white',
    borderColor: Colors.darkGray,
    borderWidth: 1,
    borderRadius: 5,
    opacity: 0.5,
  },
  divider: {
    borderBottomColor: Colors.darkGray,
    borderBottomWidth: 1,
  },
  line: {
    borderBottomColor: Colors.darkGray,
    borderBottomWidth: 1,
    width: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    marginVertical: 10,
  },
  centerButton: {
    marginHorizontal: 20,
  },
  input: {
    padding: 10,
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenDimensions.width - 40,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  titleButton: {
    color: Colors.white,
    fontWeight: '700',
  },
  forgetTitle: {
    color: Colors.primary,
    fontWeight: '700',
    textAlign: 'center',
  },
  orTitle: {
    textAlign: 'center',
  },
  orContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
  },
  newAccountButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenDimensions.width - 40,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  titleNewAccount: {
    color: Colors.white,
    fontWeight: '700',
  },
});
