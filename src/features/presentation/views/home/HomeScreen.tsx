import {Colors} from '@core/common/color';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import PostContainer from './components/PostContainer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <PostContainer />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgMain,
  },
});
