import {Colors} from '@core/common/color';
import {screenDimensions} from '@core/common/commonConsts';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const UserPostContainer = () => {
  const [onChange, setOnChange] = useState('');

  useEffect(() => {
    console.log(onChange);
  }, [onChange]);

  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: 'https://randomuser.me/api/portraits/women/71.jpg',
        }}
        style={styles.avatar}
      />
      <TextInput
        style={styles.postInput}
        onChangeText={setOnChange}
        placeholder="What`s on your mind?"
      />
    </View>
  );
};

export default UserPostContainer;

const styles = StyleSheet.create({
  container: {
    width: screenDimensions.width,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
  postInput: {
    padding: 15,
  },
});
