import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {screenDimensions} from '@components/common/commonConsts';
import {Colors} from '@components/common/color';
import {useTranslation} from 'react-i18next';

const UserPostContainer = () => {
  const [onChange, setOnChange] = useState('');
  const {t} = useTranslation();

  useEffect(() => {
    // console.log(onChange);
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
        placeholder={t('What`s on your mind?')}
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
    width: 40,
    height: 40,
    overflow: 'hidden',
  },
  postInput: {
    padding: 15,
  },
});
